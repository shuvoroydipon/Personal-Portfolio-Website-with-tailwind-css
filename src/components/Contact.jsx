import { useState } from "react";

const emptyForm = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    // Clear the error for a field as soon as the user starts fixing it
    setErrors((previous) => ({ ...previous, [name]: "" }));
    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    setErrors({});
    setSuccessMessage(
      `Thank you, ${formData.name.trim()}! Your message has been sent successfully. I will get back to you soon.`
    );
    setFormData(emptyForm);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="section-inner">
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind or a question? Send me a message.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What is this about?"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="form-error">{errors.subject}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="form-error">{errors.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

          {successMessage && (
            <p className="form-success">{successMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
