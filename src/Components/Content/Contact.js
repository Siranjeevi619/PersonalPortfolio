import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import "../../Styles/style.css";
import "../../Styles/Contact.css";
import { Link } from "react-scroll";
import ContactImage from "../../assets/Icons/undraw_join_re_w1lh.svg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_93g8n2k",
        "template_iv3gl3f",
        formData,
        "TTp-hqMDrUjLyw8wE"
      );

      toast.success("Email sent successfully");
    } catch (error) {
      console.error("Failed to send email:", error);
    }

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="py-4" id="Contact">
      <div className="container">
        <Toaster position="top-center" reverseOrder={false} />
        <h3 className="h1 text-center">
          Contact
          <Link to="Contact">
            <i class="bi bi-link-45deg nav-icon"></i>
          </Link>
        </h3>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="container-expand-lg">
              <div className="row">
                <div className="col-12">
                  <div className="h2 mt-4">Look here</div>
                  <div className="text-start">
                    I am excited to announce that I am now available for
                    freelance work. With extensive experience as a frontend
                    developer, I deliver high-quality, tailored solutions. If
                    you have projects that could benefit from my skills, please
                    contact me. I look forward to collaborating with you.
                    <br /> Best regards, <span className="h4 ">Siranjeevi</span>
                    .
                  </div>
                </div>
                <div className="col-12 ">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={ContactImage} className='img-fluid w-50 h-50' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="h2 mt-4 text-center">Any Queries</div>
            <form onSubmit={handleSubmit} className="form">
              <div className="row">
                <div className="col-md col-12 my-2">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      aria-label="Name"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                </div>
                <div className="col-12 col-md my-2">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="col-12 col-md-12 mt-3">
                  <div className="form-floating">
                    <textarea
                      className="form-control no-resize"
                      placeholder="Leave a comment here"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      style={{ height: "100px" }}
                      required
                    ></textarea>
                    <label htmlFor="message" className="">
                      Send a message
                    </label>
                  </div>
                  <button className="btn btn-primary mt-2">Send <i className="bi bi-send-fill"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
