import {call, put, takeLatest} from 'redux-saga/effects';
import {addressBookGet} from 'src/api/addressBook';
import {fetchPersonList} from 'src/store/persons/actions';
import {Person} from 'src/models/addressBook';

function* fetchContactList(action: any) {
  try {
    const {results = []} = yield call(addressBookGet, action.payload);
    const updatedData = results.map((elm: Person, index: number) => ({
      ...elm,
      key: `${elm.name.first}${elm.name.last}${index}`,
    }));
    yield put(fetchPersonList.success(updatedData));
  } catch (e) {
    yield put(fetchPersonList.failure(e));
  }
}

function* sagas() {
  yield takeLatest(fetchPersonList.REQUEST, fetchContactList);
}

export default sagas;
