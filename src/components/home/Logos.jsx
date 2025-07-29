import React from "react";

export default function Cards() {
  const whatsappLink = "https://wa.me/447861666452?text=Hello,%20I%20have%20a%20question%20regarding%20visa%20services";

  const cards = [
    {
      image: "/media/images/eden.webp",
      title: "We provide official visa assistance for Eden Foods Canada.",
      desc: "Eden Foods is a reputed food company in Canada offering job opportunities in production and packaging.",
    },
    {
      image: "/media/images/mapleleaf.jpg",
      title: "Get authentic job visa services for Maple Leaf Canada.",
      desc: "Maple Leaf is one of Canada’s leading food brands, known for quality meat and bakery products.",
    },
    {
      image: "/media/images/agfoods.png",
      title: "Apply now for a genuine AG Foods Canada work visa.",
      desc: "AG Foods operates grocery stores across Canada, offering roles in retail, logistics, and supply chain.",
    },
  ];

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center text-center g-4">
        {cards.map((card, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-lg border-0 custom-hover">
                <div className="card-body d-flex flex-column align-items-center justify-content-between">
                  <img
                    src={card.image}
                    alt="Company Logo"
                    style={{ maxWidth: "100%", maxHeight: "150px", objectFit: "contain" }}
                    className="mb-4"
                  />
                  <p className="card-text">
                    <b>{card.title}</b>
                    <br />
                    <small className="text-muted">{card.desc}</small>
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Custom Styling */}
      <style>{`
        .custom-hover:hover {
          transform: scale(1.03);
          transition: 0.3s ease-in-out;
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
}
