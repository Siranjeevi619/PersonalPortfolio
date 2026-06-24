import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import "../../Styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const headingRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const headingEl = headingRef.current;
    const formEl = formRef.current;

    if (headingEl) observer.observe(headingEl);
    if (formEl) observer.observe(formEl);

    return () => {
      if (headingEl) observer.unobserve(headingEl);
      if (formEl) observer.unobserve(formEl);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        "service_93g8n2k",
        "template_iv3gl3f",
        formData,
        "TTp-hqMDrUjLyw8wE"
      );

      toast.success("Message sent successfully!", {
        style: {
          background: "#1a1a1a",
          color: "#ffffff",
          fontFamily: "Inter, sans-serif",
          fontWeight: "600",
          letterSpacing: "0.03em",
        },
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again.", {
        style: {
          background: "#1a1a1a",
          color: "#ffffff",
          fontFamily: "Inter, sans-serif",
        },
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="editorial-section contact-editorial" id="Contact">
      <div className="editorial-container">
        <Toaster position="top-right" reverseOrder={false} />

        <h2 className="section-heading reveal" ref={headingRef}>
          CONTACT
        </h2>

        <div className="contact-grid reveal" ref={formRef}>
          <div className="contact-info-area">
            <p className="contact-intro">
              I'm currently <span className="highlight">available for freelance</span> opportunities 
              and collaborative projects. Whether you have a question or just want to say hi, 
              my inbox is always open.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-detail-label">EMAIL</span>
                <a href="mailto:siranjeevi0619@gmail.com" className="contact-detail-value">
                  siranjeevi0619@gmail.com
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-label">PHONE</span>
                <a href="tel:+916385908383" className="contact-detail-value">
                  +91 63859 08383
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-label">LEETCODE</span>
                <a href="https://leetcode.com/Siranjeevi619" target="_blank" rel="noreferrer" className="contact-detail-value">
                  leetcode.com/Siranjeevi619
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-label">LOCATION</span>
                <span className="contact-detail-value">Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          <div className="contact-form-area">
            <form onSubmit={handleSubmit}>
              <div className="editorial-field">
                <label className="editorial-label">Full Name</label>
                <input
                  type="text"
                  className="editorial-input"
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="editorial-field">
                <label className="editorial-label">Email Address</label>
                <input
                  type="email"
                  className="editorial-input"
                  placeholder="name@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="editorial-field">
                <label className="editorial-label">Message</label>
                <textarea
                  className="editorial-input editorial-textarea"
                  placeholder="How can I help you?"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="editorial-btn editorial-submit-btn"
                disabled={isSending}
              >
                {isSending ? "SENDING..." : "SEND MESSAGE"}
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
