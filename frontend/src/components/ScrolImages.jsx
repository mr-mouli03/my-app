import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1757148047631_6thsepplaycardsep25hpptmdesktop.jpg",
  "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1758543760684_22ndsepblockbustertuesdaydesktop.jpg",
  "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1756379853786_travisscottdesktopsept.jpg",
  "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1758089016301_webbannerpostmalone.jpg",
];

function ScrolImages() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "18px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul
          style={{
            margin: 0,
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            padding: 0,
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#ccc", 
          transition: "all 0.3s ease",
        }}
      />
    ),
  };

  return (
    <div style={{ width: "100%", height: "350px", position: "relative" }}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`slide-${idx}`}
              style={{
                width: "98%",
                height: "340px",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                margin: "auto",
              }}
            />
          </div>
        ))}
      </Slider>

      <style>
        {`
          .slick-dots li.slick-active div {
            background: white !important;
            transform: scale(1.3);
          }
        `}
      </style>
    </div>
  );
}

export default ScrolImages;
