import { createSlice } from '@reduxjs/toolkit';

export const redditSlice = createSlice({
  name: 'reddit',
  initialState: {
    value: 0,
    categories: ['r/Skiing', 'r/Fishing', 'r/Coding', 'r/Cooking'],
    currentTopic: 'r/Latest',
    posts: [
      { title: 'Reddit Post1',
        msg: 'This is a test message',
        author: 'Mike Johansson'},
      { title: 'Reddit Post2',
        msg: 'This is another test',
        author: 'Mike Johansson'},
      { title: 'Reddit Post3',
        msg: 'Works nice if this can be seen',
        author: 'Mike Johansson'},
    ]
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = redditSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.reddit.value;

export const selectCategories = state => state.reddit.categories;

export const selectPosts = state => state.reddit.posts;

export const selectCurrentTopic = state => state.reddit.currentTopic;

export default redditSlice.reducer;
