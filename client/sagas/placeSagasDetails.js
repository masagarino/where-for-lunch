import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceDetails } from 'services/placeApi';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES_DETAILS,
} from '../actions/placeActionTypes';

function* fetchPlacesDetails(action) {
  try {
    const placesDetails = yield call(getPlaceDetails, action.payload);
    yield put(placeActions.setDetails(placesDetails));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeSagasDetails() {
  yield takeEvery(FETCH_PLACES_DETAILS, fetchPlacesDetails);
}

export default placeSagasDetails;
