import {createSelector} from 'reselect';
import {RootState} from 'src/models/rootState';
import {ContactItem, ContactListState} from 'src/store/persons/reducer';

export const contactListSelector = (state: RootState): ContactListState => state?.contactList;

export const personListSelector = createSelector(
  contactListSelector,
  (item): ContactItem[] => item?.personLists,
);
