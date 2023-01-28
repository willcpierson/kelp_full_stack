import csrfFetch from "./csrf";
import { storeCSRFToken } from "./csrf";

export const CREATE_SESSION = "CREATE_SESSION";
export const DELETE_SESSION = "DELETE_SESSION";

const createSession = (payload) => {
  
  return {
    type: "CREATE_SESSION",
    user: payload,
  };
};

const deleteSession = () => {
  return { type: "DELETE_SESSION" };
};

const storeCurrentUser = (user) => {
  if (user) {
    sessionStorage.setItem("currentUser", JSON.stringify(user));
  } else {
    sessionStorage.removeItem("currentUser");
  }
};

export const sessionReducer = (state = initialState, action) => {
  let prevState = { ...state };
  switch (action.type) {
    case CREATE_SESSION:
      prevState["user"] = action.user;
      return prevState;
    case DELETE_SESSION:
      prevState = { user: null };
      return prevState;
    default:
      return state;
  }
};

export const loginUser = ({ credential, password }) => async (dispatch) => {
  let response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password
    }),
  });

  let data = await response.json();
  storeCurrentUser(data.user);
  dispatch(createSession(data.user));
};

export const signup = (user) => async (dispatch) => {
  const { email, password, firstName, lastName, zip } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      firstName,
      lastName,
      zip
    })
  });
  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(createSession(data.user));
  return response;
};

export const logoutUser = () => async (dispatch) => {
    let response = await csrfFetch("/api/session", {
    method: "DELETE"
  });
  storeCurrentUser(null);
  dispatch(deleteSession());
};

export const restoreSession = () => async (dispatch) => {
  let response = await csrfFetch("/api/session");

  storeCSRFToken(response);
  let data = await response.json();
  storeCurrentUser(data.user);
  dispatch(createSession(data.user));
  return response;
};

const initialState = {
  user: JSON.parse(sessionStorage.getItem("currentUser")),
};

