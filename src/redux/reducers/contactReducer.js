import { ADD_CONTACT, DELETE_CONTACT } from "../actionType";
const initialState = {
  allContacts: [],
  count: 0,
};

const contactReducers = (state = initialState, { type, payload }) => {
  const data = { ...payload, key: state.count + 1 };
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        allContacts: [...state.allContacts, data],
        count: state.count + 1,
      };
    case DELETE_CONTACT:
      const newData = state.allContacts.filter((item) => item.key !== payload);
      return { ...state, allContacts: [...newData], count: state.count - 1 };

    default:
      return state;
  }
};

export default contactReducers;
