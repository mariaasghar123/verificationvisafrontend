import React from 'react';

export default function Footer() {
  return (
    <div style={{ position: 'relative' }}>
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447861666452"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
       
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          zIndex: 9999,
          textDecoration: 'none',
          fontSize: '30px'
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      {/* Inline CSS for responsiveness */}
      <style jsx>{`
        .whatsapp-button {
          display: flex !important;
        }
        @media screen and (max-width: 576px) {
          .whatsapp-button {
            width: 50px !important;
            height: 50px !important;
            font-size: 24px !important;
            bottom: 15px !important;
            right: 15px !important;
          }
        }
      `}</style>
    </div>
  );
}
