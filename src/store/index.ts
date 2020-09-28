import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {personListsReducer} from 'src/store/persons/reducer';
import personList from 'src/store/persons/sagas';
const rootReducer = combineReducers({
  contactList: personListsReducer,
});
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(personList);
