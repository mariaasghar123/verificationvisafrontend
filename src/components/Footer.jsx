import React from 'react';

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#001f3f" }} className="text-white py-5">
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col-12 col-md-4 mb-4 text-center text-md-start">
            <img
              src="/media/images/Googlevisalogo.png"
              alt="Logo"
              style={{ width: "200px" }}
            />
          </div>

          {/* About Us */}
          <div className="col-12 col-md-4 mb-4 text-center text-md-start">
            <h4>About Us</h4>
            <div
              style={{
                height: "2px",
                backgroundColor: "red",
                width: "50px",
                marginBottom: "10px",
              }}
              className="mx-md-0 mx-auto"
            ></div>
            <p style={{ lineHeight: "1.7" }}>
              The Most Eminent Visas and Immigration Consultant service provider
              in major metros and overseas with reliability since 1987. We are
              committed to provide reliable client support.
            </p>
          </div>

          {/* Contact Us */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <h4>Contact Us</h4>
            <div
              style={{
                height: "2px",
                backgroundColor: "red",
                width: "50px",
                marginBottom: "10px",
              }}
              className="mx-md-0 mx-auto"
            ></div>
            <ul className="list-unstyled">
              <li><strong>Phone:</strong> +1 (920) 489-7664</li>
              <li><strong>Email:</strong> sardarjagmohansingh302@gmail.com</li>
              <li><strong>Name:</strong> Sardar Jagmohan Singh</li>
              <li><strong>Helpline:</strong> +44 7861 666 452</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
