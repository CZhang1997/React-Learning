import jsonPlaceholder from "../apis/jsonPlaceholder";

export const FETCH_POSTS = "FETCH_POSTS";

export const fetchPosts = () => {
  return {
    type: FETCH_POSTS,
  };
};
