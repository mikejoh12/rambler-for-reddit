import { configureStore } from '@reduxjs/toolkit';
import redditReducer from '../features/reddit/redditSlice';

export default configureStore({
  reducer: {
    reddit: redditReducer,
  },
});
