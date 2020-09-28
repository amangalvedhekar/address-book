import {fetchPersonList} from 'src/store/persons/actions';

const initialState = {
  personLists: [],
  isLoading: false,
};

export const personListsReducer = (state = initialState, action: any) => {
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
