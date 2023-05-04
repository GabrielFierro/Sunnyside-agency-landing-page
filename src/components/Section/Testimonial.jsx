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
      <p className='comment'>{comment}</p>
      <p className='name'>{name}</p>
      <span>{position}</span>
    </div>
  );
}
