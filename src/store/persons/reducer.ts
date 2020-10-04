import {fetchPersonList} from 'src/store/persons/actions';
import {Name} from 'src/models/addressBook';

export interface ContactItem {
  key: string;
  name: Name;
  phone: string;
}

export interface ContactListState {
  personLists: ContactItem[];
  isLoading: boolean;
}

const initialState: ContactListState = {
  personLists: [],
  isLoading: false,
};

export const personListsReducer = (state = initialState, action: any): ContactListState => {
  switch (action.type) {
    case fetchPersonList.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case fetchPersonList.SUCCESS:
      return {
        ...state,
        personLists: [...action.payload],
        isLoading: false,
      };
    case fetchPersonList.FAILURE:
      return {
        ...state,
        isLoading: false,
        personLists: [],
      };
    default:
      return state;
  }
};
