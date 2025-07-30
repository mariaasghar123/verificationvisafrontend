import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center fw-bold mb-3">
          Contact Us
          <div
            style={{
              height: "3px",
              backgroundColor: "red",
              width: "50px",
              margin: "10px auto",
            }}
          ></div>
        </h2>

        <p className="text-center text-muted mb-5">
          If you have any queries, feel free to contact us!
        </p>

        <div className="row text-center">
          {/* Address */}
          <div className="col-md-4 mb-4">
            <FaMapMarkerAlt className="text-danger mb-2" size={32} />
            <h5 className="fw-semibold">Address</h5>
            <p className="text-muted">Toronto, Canada</p>
          </div>

          {/* Phone */}
          <div className="col-md-4 mb-4">
            <FaPhone className="text-danger mb-2" size={32} />
            <h5 className="fw-semibold">Phone</h5>
            <p className="text-muted">+1 (920) 489-7664</p>
          </div>

          {/* Email */}
          <div className="col-md-4 mb-4">
            <FaEnvelope className="text-danger mb-2" size={32} />
            <h5 className="fw-semibold">Email</h5>
            <p className="text-muted">sardarjagmohansingh302@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
