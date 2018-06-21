import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlaceDetails.css';

const PlaceDetails = ({ place }) => {
  return (
    <div className={styles.root}>
      <div className={styles.name}>{place.name || 'Where for lunch?'}</div>
      <div className={styles.box}>
        <div className={styles.postthumb}><img src={place.img} width="300" height="300" /></div>
        <div>{place.address}</div>
        <div>{place.phone}</div>
        <div>{place.categories && place.categories.join(', ')}</div>
        <div>{place.price}</div>
        {place.rating &&
          <div className={styles.rating}>
            <div className={styles.ratingScore}>{place.reviewCount} reviews</div>
            <div className={styles.stars}>
              <div className={styles.emptyStars}></div>
              <div className={styles.fullStars} style={{ width: `${place.rating / 5 * 100}%` }}></div>
              <div>
              </div>
            </div>
          </div>
        }
        <div>
          {place.photos ? place.photos.map((photo, i) => {
            console.log('photos', photo);
            return (
              <div className={styles.gallery} key={i}>
                <a target="_blank" href={photo}>
                  <img src={photo} width="150" height="200" />
                </a>
              </div>);
          }) :
            ''}
          {/* <div className={styles.gallery}>
            <a target="_blank" href="img_5terre.jpg">
              <img src="5terre.jpg" alt="5Terre" width="150" height="200" />
            </a>
          </div>
          <div className={styles.gallery}>
            <a target="_blank" href="img_5terre.jpg">
              <img src="5terre.jpg" alt="5Terre" width="150" height="200" />
            </a>
          </div>
          <div className={styles.gallery}>
            <a target="_blank" href="img_5terre.jpg">
              <img src="5terre.jpg" alt="5Terre" width="150" height="200" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

PlaceDetails.propTypes = {
  place: PropTypes.object,
};

export default PlaceDetails;
