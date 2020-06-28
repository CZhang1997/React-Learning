import { FETCH_POSTS } from "../actions";
// import { act } from "react-dom/test-utils";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
};
