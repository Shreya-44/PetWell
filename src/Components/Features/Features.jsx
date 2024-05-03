

import React from 'react';
import './Features.css';
import consultation from '../Assets/consultation.png';
import activity from '../Assets/Activity.png';
import community from '../Assets/Community.png';
import gamification from '../Assets/Gamification.png';
import shelter from '../Assets/Shelter.png';



const Feature = () => {
  return (
    <div className='features'>
      <h1 className='features-heading'>Features</h1>
      <div className='feature-1'>
      <img src={consultation} alt="consult" className='image' style={{ width: '350px', height: 'auto' }} />
      <div className="text">
        <h3>Video Consultation</h3>
        <p>Connects pet owners with veterinarians or therapists for virtual consultations and personalized sessions.</p>
      </div>
    </div> 

      <div className='feature-2'>
      <img src={activity} alt="activity" style={{ width: '350px', height: 'auto', gridColumn: '1' }} />
      <div className="text" style={{gridColumn:'2'}}>
        <h3>Activity Recommendation</h3>
        <p>Provides tailored activity recommendations based on a pet's profile and specific requirements, ensuring their physical and mental well-being.</p>
      </div>
    </div>

      
      <div className='feature-3'>
      <img src={community} alt="community" style={{ width: '350px', height: 'auto' }} />
      <div className="text">
        <h3>Community</h3>
        <p>Join a vibrant community of pet owners for engaging conversations, sharing experiences, and seeking advice on pet care and training.</p>
      </div>
      </div>
      
      <div className='feature-4'>
      <img src={gamification} alt="gamification" style={{ width: '350px', height: 'auto' , gridColumn:'1'}} />
      <div className="text" style={{gridColumn:'2'}}>
        <h3>Gamification</h3>
        <p>Offers unique and interactive online games designed specifically for pets, providing entertainment and mental stimulation.</p>
      </div>
      </div>

      <div className='feature-5'>
      <img src={shelter} alt="shelter" style={{ width: '350px', height: 'auto' }} />
      <div className="text">
        <h3>Connecting with Animal Shelters</h3>
        <p>Facilitates connections with animal shelters to find and adopt pets in need of a loving home, promoting pet adoption and welfare.</p>
      </div>
      </div>

  
 
    </div>
  );
}

export default Feature;


