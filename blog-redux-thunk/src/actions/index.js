import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_USER = "FETCH_USER";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: FETCH_POSTS,
    payload: response.data,
  });
};

export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
});
// export const fetchUser = function (id) {
//   return _.memoize(async function (dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({
//       type: FETCH_USER,
//       payload: response.data,
//     });
//   });
// };

// export const fetchPosts = () => {
//   return async (dispatch) => {
//     const response = await jsonPlaceholder.get("/posts");

//     dispatch({
//       ttype: FETCH_POSTS,
//       payload: response,
//     });
//   };
// };
