import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import Condition from 'components/Condition/Condition';

class HomePage extends Component {
  handleOnClick = () => {
    this.props.fetchPlaces(this.props.condition);
  }

  handleOnConditionChange = (value) => {
    this.props.setRadius(value);
  }

  handleOnClickCheckbox = (value) => {
    this.props.setPriceRange(value);
  }

  render() {
    const { condition, place } = this.props;
    console.log('home', this.props);
    return (
      <div className="homePageWrapper">
        <Place place={place} />
        <div className="searchWrapper">
          <Condition condition={condition} action={this.handleOnConditionChange} actionChange={this.handleOnClickCheckbox}/>
          <Button onClick={this.handleOnClick} theme={Object.keys(condition).length === 1 ? 'homepageClickGrey' : 'homepageClick'} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaces: placeActions.fetchPlaces,
    setRadius: conditionActions.setRadius,
    setPriceRange: conditionActions.setPriceRange,
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  price: PropTypes.object,
  fetchPlaces: PropTypes.func,
  setRadius: PropTypes.func,
  setPriceRange: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
