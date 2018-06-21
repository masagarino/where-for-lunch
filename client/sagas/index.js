import { all } from 'redux-saga/effects';

import placeSagas from './placeSagas';
import placeSagasDetails from './placeSagasDetails';

export default function* rootSagas() {
  yield all([
    placeSagas(),
    placeSagasDetails(),
  ]);
}
