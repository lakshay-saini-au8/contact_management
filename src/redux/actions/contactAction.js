import { ADD_CONTACT, DELETE_CONTACT } from "../actionType";

export const addContact = (payload) => ({
  type: ADD_CONTACT,
  payload,
});
export const delContact = (payload) => ({
  type: DELETE_CONTACT,
  payload,
});
