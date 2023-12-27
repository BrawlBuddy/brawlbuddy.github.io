import React from 'react';
import PropTypes from 'prop-types';

const Pick = ({ imageSrc, borderColour }) => {
  const pickStyle = {
    width: '75px',
    height: '75px',
    border: '5px solid ' + borderColour, 
    overflow: 'hidden', 
    borderRadius: '5%',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={pickStyle}>
      {imageSrc && <img src={imageSrc} alt="Picked Image" style={imageStyle} />}
    </div>
  );
};

Pick.propTypes = {
  imageSrc: PropTypes.string,
};

export default Pick;
