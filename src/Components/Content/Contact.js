import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import "../../Styles/style.css";
import "../../Styles/Contact.css";
import ContactImage from "../../assets/Icons/undraw_join_re_w1lh.svg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        },
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section py-5" id="Contact">
      <div className="container">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="glass-container p-4 p-md-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <h1 className="section-title mb-4">
                Let's Connect <span className="title-glow">.</span>
              </h1>
              <p className="contact-intro mb-5">
                I'm currently <span className="highlight">available for freelance</span> opportunities 
                and collaborative projects. Whether you have a question or just want to say hi, 
                my inbox is always open.
              </p>
              
              <div className="contact-info-glass glass-container p-4 mb-4">
                <div className="d-flex align-items-center mb-3">
                    <div className="info-icon me-3">
                        <i className="bi bi-envelope"></i>
                    </div>
                    <div>
                        <div className="info-label">Email Me</div>
                        <div className="info-value">siranjeevi.pro@gmail.com</div>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="info-icon me-3">
                        <i className="bi bi-geo-alt"></i>
                    </div>
                    <div>
                        <div className="info-label">Location</div>
                        <div className="info-value">Tamil Nadu, India</div>
                    </div>
                </div>
              </div>

              <div className="text-center d-none d-md-block">
                <img src={ContactImage} alt="Contact Illustration" className="contact-img" />
              </div>
            </div>

            <div className="col-12 col-md-6 ps-md-5">
              <div className="glass-container contact-form-card p-4">
                <h3 className="mb-4 fw-bold">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="custom-label">Full Name</label>
                    <input
                      type="text"
                      className="glass-input"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="custom-label">Email Address</label>
                    <input
                      type="email"
                      className="glass-input"
                      placeholder="name@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="custom-label">Message</label>
                    <textarea
                      className="glass-input"
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
                    className="premium-button w-100 py-3"
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send Message"} 
                    <i className="bi bi-send ms-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
