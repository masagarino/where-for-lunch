import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlaceDetailsMap.css';

const PlaceDetailsMap = ({ place }) => {
  const coordinates = place.coordinates;
  return (
    <div className={styles.root}>
      {coordinates &&
        <iframe className={styles.map}
          src={`https://maps.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}&hl=es;z=14&output=embed`}
        >
        </iframe>
      }
    </div>
  );
};

PlaceDetailsMap.propTypes = {
  place: PropTypes.object,
};

export default PlaceDetailsMap;
