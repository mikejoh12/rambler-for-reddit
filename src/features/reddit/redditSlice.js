import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const axios = require('axios')

export const fetchSubreddits = createAsyncThunk('reddit/fetchSubreddits', async () => {
  try {
    const response = await axios.get('https://www.reddit.com/subreddits.json')
    console.log(response.data)
    const subredditArray = response.data.data.children
    const categories = subredditArray.map(item => item.data.display_name)
    return categories
  } catch (error) {
    console.log(error)
  }
})

export const fetchPosts = createAsyncThunk('reddit/fetchPosts', async subreddit => {
  try {
    const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`)
    console.log(response.data)
    const postsArray = response.data.data.children
    const posts = postsArray.map(item => {
      const postData = {
        title: item.data.title,
        author: item.data.author,
        subreddit: item.data.subreddit,
        imgUrl: item.data.url,
        thumbnailUrl: item.data.thumbnail,
        id: item.data.id,
      }
      if (item.data.is_video) {
        postData.videoUrl = item.data.media.reddit_video.fallback_url
      }
      return postData
    })
    return posts
  } catch (error) {
    console.log(error)
  }
})

export const fetchSearch = createAsyncThunk('reddit/fetchSearch', async searchTerm => {
  try {
    const response = await axios.get(`https://www.reddit.com/search.json?q=${searchTerm}`)
    console.log(response.data)
    const postsArray = response.data.data.children
    const posts = postsArray.map(item => {
      return {
        title: item.data.title,
        author: item.data.author,
        subreddit: item.data.subreddit,
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

export const fetchDiscussion = createAsyncThunk('reddit/fetchDiscussion', async (discussionPath) => {
  try {
    const response = await axios.get(`https://www.reddit.com/${discussionPath}`)
    console.log(response.data)
    const postsArray = response.data[1].data.children
    const posts = postsArray.map(item => {
      return {
        author: item.data.author,
        body: item.data.body,
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
    currentTopic: 'popular',
    posts: [],
    discussion: []
  },
  reducers: {
    currentTopicUpdated(state, action) {
      state.currentTopic = action.payload
    }
  },
  extraReducers: {
    //Reducers for fetching subreddits
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
    //Reducers for fetching posts
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
    //Search reducers
    [fetchSearch.pending]: (state, action) => {
      state.searchStatus = 'loading'
    },
    [fetchSearch.fulfilled]: (state, action) => {
      state.searchStatus = 'succeeded'
      state.posts = action.payload
    },
    [fetchSearch.rejected]: (state, action) => {
      state.searchStatus = 'failed'
    },
    //Reducers for fetching discussion
    [fetchDiscussion.pending]: (state, action) => {
      state.discussionStatus = 'loading'
    },
    [fetchDiscussion.fulfilled]: (state, action) => {
      state.discussionStatus = 'succeeded'
      state.discussion = action.payload
    },
    [fetchDiscussion.rejected]: (state, action) => {
      state.discussionStatus = 'failed'
    },
  }
});

export const selectCategories = state => state.reddit.categories;
export const selectPosts = state => state.reddit.posts;
export const selectCurrentTopic = state => state.reddit.currentTopic;
export const selectDiscussion = state => state.reddit.discussion;

export const { currentTopicUpdated } = redditSlice.actions

export default redditSlice.reducer;
