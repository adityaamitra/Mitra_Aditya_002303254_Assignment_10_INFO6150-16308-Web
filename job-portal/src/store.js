import { createStore } from 'redux';

const initialState = {
  user: null, 
  isAuthenticated: false, 
};

const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload, isAuthenticated: true };
    case LOGOUT:
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export default store;
