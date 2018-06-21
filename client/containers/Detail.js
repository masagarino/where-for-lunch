import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import placeActions from 'actions/placeActions';
import PlaceDetails from 'components/PlaceDetails/PlaceDetails';
import PlaceDetailsMap from 'components/PlaceDetailsMap/PlaceDetailsMap';

class Details extends Component {
  componentDidMount = () => {
    console.log('0ddddasdasdasd', this.props);
    this.props.fetchPlacesDetails(this.props.match.params.id);
  }

  render() {
    const { place } = this.props;
    console.log('home', this.props);
    return (
      <div className="homePageWrapper">
        <PlaceDetails place={place} />
        <div className="searchWrapper">
          <PlaceDetailsMap place={place} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlacesDetails: placeActions.fetchPlacesDetails,
  }, dispatch);

Details.propTypes = {
  place: PropTypes.object,
  fetchPlacesDetails: PropTypes.func,
  match: PropTypes.object,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
