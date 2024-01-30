import React from 'react';

function InfoItem({ iconSrc, text, strongText }) {
  return (
    <div className='item'>
      <div className='icon-background'>
        <img src={iconSrc} alt='icon'/>
      </div>
      <div className='context'>
        <p>{text}</p>
        <strong>{strongText}</strong>
      </div>
    </div>
  );
}

export default InfoItem;
