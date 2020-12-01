import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const axios = require('axios')

export const fetchSubreddits = createAsyncThunk('reddit/fetchSubreddits', async () => {
  try {
    const response = await axios.get('https://www.reddit.com/subreddits.json')
    console.log(response.data)
    const subredditArray = response.data.data.children
    const categories = subredditArray.map(item => item.data.display_name_prefixed)
    return categories
  } catch (error) {
    console.log(error)
  }
})

export const redditSlice = createSlice({
  name: 'reddit',
  initialState: {
    categories: ['r/Skiing', 'r/Fishing', 'r/Coding', 'r/Cooking', 'r/Camping', 'r/Flying'],
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
  reducers: {},
  extraReducers: {
    [fetchSubreddits.fulfilled]: (state, action) => {
      state.categories = action.payload
    },
  }
});

export const { categoriesUpdated } = redditSlice.actions;

export const selectCategories = state => state.reddit.categories;
export const selectPosts = state => state.reddit.posts;
export const selectCurrentTopic = state => state.reddit.currentTopic;

export default redditSlice.reducer;
