import React from 'react';
import './profile_card.css';

const ProfileCard = ({ image, name, description, github, leetcode, linkedin }) => {
  return (
    <div className="profile-card">
      <img src="https://i.pinimg.com/736x/0d/18/0c/0d180cf154047d0e43b1b72656d68d3d.jpg" alt="Profile" className="profile-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="buttons">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <button className="btn github">GitHub</button>
        </a>
        <a href={leetcode} target="_blank" rel="noopener noreferrer">
          <button className="btn leetcode">LeetCode</button>
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <button className="btn linkedin">LinkedIn</button>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
