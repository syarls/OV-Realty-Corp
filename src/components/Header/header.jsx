import React from 'react';
import './header.css';
import video from '../../assets/video.mp4'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className='header-video'>
          <video width="700" height="400" controls autoPlay>
          <source src={video} type="video/mp4"class />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='header-description'>
          <h1 className='txt1'>What is OV Realty Corp?</h1>
          <p className='txt2'>OV Realty Corp. is a leading real estate agency specializing in sales, leasing, and property management services across the Philippines. With a team of experienced professionals and a commitment to excellence, we strive to provide unparalleled service and deliver exceptional results for our clients. Whether buying, selling, or leasing properties, OV Realty Corp. offers personalized guidance, market expertise, and innovative solutions to meet the diverse needs of our clients.</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
