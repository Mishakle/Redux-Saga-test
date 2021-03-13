import { CREATE_POST, FETCHED_POSTS } from "./types";

const initialState = {
    posts: [],
    fetchedposts: []
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            // return { ...state, posts: [...state.posts, action.payload] }
            return { ...state, posts: state.posts.concat([action.payload]) };
        case FETCHED_POSTS:
            return { ...state, fetchedposts: action.payload }
        default: return state;
    }
};