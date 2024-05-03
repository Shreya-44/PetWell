import React from "react";
import "C:/Users/Shalu Khanna/pet-well/src/Pages/CSS/Therapy.css";

const Therapy = () => {

  return (
    <div className="therapy-container">
      <div className="therapy-box-1">
        <h2>Video Consultation</h2>
        <p>
          Book a video consultation with our therapists for personalized
          sessions.
        </p>
        <a href="/video.html" target="_blank">
          <button>Book Now</button>
        </a>
      </div>
      <div className="therapy-box-2">
        <h2>Connect with Animal Shelters</h2>
        <p>
          Explore our network of animal shelters to find your perfect therapy
          companion.
        </p>
        <a href="https://awbi.gov.in/view/index/list-of-awo" target="_blank">
          <button>Find Shelters</button>
        </a>
      </div>
      <div className="therapy-box-3">
        <h2>Activity Recommendation</h2>
        <p>Get to know activities that could help your pet.</p>
        <div>
          <a href="http://localhost:8501/" target="_blank">
            <button>Explore</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Therapy;
