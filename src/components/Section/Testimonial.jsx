import React from 'react';

export default function Testimonial({
  profilePicture,
  comment,
  name,
  position
}) {
  return (
    <div className='flex'>
      <img
        className='profilePicture'
        src={profilePicture}
        alt='profile picture'
      />
      <p>{comment}</p>
      <p>{name}</p>
      <span>{position}</span>
    </div>
  );
}
