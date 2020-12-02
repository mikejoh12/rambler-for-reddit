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

export const fetchPosts = createAsyncThunk('reddit/fetchPosts', async subreddit => {
  try {
    const response = await axios.get(`https://www.reddit.com/${subreddit}.json`)
    console.log(response.data)
    const postsArray = response.data.data.children
    const posts = postsArray.map(item => {
      return {
        title: item.data.title,
        author: item.data.author,
        subreddit: item.data.subreddit_name_prefixed,
        imgUrl: item.data.url,
        thumbnailUrl: item.data.thumbnail,
        id: item.data.id
      }
    })
    return posts
  } catch (error) {
    console.log(error)
  }
})

export const redditSlice = createSlice({
  name: 'reddit',
  initialState: {
    categories: [],
    currentTopic: 'r/popular',
    posts: []
  },
  reducers: {
    currentTopicUpdated(state, action) {
      state.currentTopic = action.payload
    }
  },
  extraReducers: {
    [fetchSubreddits.pending]: (state, action) => {
      state.subredditStatus = 'loading'
    },
    [fetchSubreddits.fulfilled]: (state, action) => {
      state.subredditStatus = 'succeeded'
      state.categories = action.payload
    },
    [fetchSubreddits.rejected]: (state, action) => {
      state.subredditStatus = 'failed'
    },
    [fetchPosts.pending]: (state, action) => {
      state.postsStatus = 'loading'
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.postsStatus = 'succeeded'
      state.posts = action.payload
    },
    [fetchPosts.rejected]: (state, action) => {
      state.postsStatus = 'failed'
    },
  }
});

export const selectCategories = state => state.reddit.categories;
export const selectPosts = state => state.reddit.posts;
export const selectCurrentTopic = state => state.reddit.currentTopic;

export const { currentTopicUpdated } = redditSlice.actions

export default redditSlice.reducer;
