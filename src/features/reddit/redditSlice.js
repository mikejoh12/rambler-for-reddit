import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const axios = require('axios')

export const kFormatter = num => {
  if (isNaN(num)) {
    return ''
  }
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

export const fetchPosts = createAsyncThunk('reddit/fetchPosts', async subreddit => {
  try {
    const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`)
    const postsArray = response.data.data.children
    const posts = postsArray.map(item => {
      const postData = {
        title: item.data.title,
        author: item.data.author,
        subreddit: item.data.subreddit,
        url: item.data.url,
        post_hint: item.data.post_hint,
        thumbnailUrl: item.data.thumbnail,
        id: item.data.id,
        ups: kFormatter(item.data.ups),
        created_utc: item.data.created_utc,
        num_comments: kFormatter(item.data.num_comments)
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

export const fetchDiscussion = createAsyncThunk('reddit/fetchDiscussion', async (discussionPath) => {
  try {
    const response = await axios.get(`https://www.reddit.com/${discussionPath}`)
    const postsArray = response.data[1].data.children
    const posts = postsArray.map(item => {
      return {
        author: item.data.author,
        body: item.data.body,
        id: item.data.id,
        ups: kFormatter(item.data.ups),
        created_utc: item.data.created_utc
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
    subredditStatus: 'idle',
    postsStatus: 'idle',
    searchStatus: 'idle',
    discussionStatus: 'idle',
    posts: [],
    discussion: [],
    searchTarget: 'posts',
    //Predefined subreddit categories
    categories: [
      { subreddit: 'aviation',
        icon_img: 'https://styles.redditmedia.com/t5_2qhu8/styles/communityIcon_20l8k4i5rei21.png?width=256&s=b8f03ab48e9ebcc9713ff35e04a4c4127a9a6af1'
      },
      { subreddit: 'funny',
        icon_img: 'https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png'
      },
      { subreddit: 'javascript',
        icon_img: 'https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png'
      },
      { subreddit: 'Music',
        icon_img: 'https://b.thumbs.redditmedia.com/UO8Hj8ZnQmYGeE9ZIjKPQEwlX46OBPC_kj2Jqlt5nqo.png'
      },
      { subreddit: 'news',
        icon_img: 'https://a.thumbs.redditmedia.com/E0Bkwgwe5TkVLflBA7WMe9fMSC7DV2UOeff-UpNJeb0.png'   
      },
      { subreddit: 'pics',
        icon_img: 'https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png'
      },
      { subreddit: 'reactjs',
        icon_img: 'https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png?width=256&s=13a87a036836ce95570a76feb53f27e61717ad1b'
      },
      { subreddit: 'science',
        icon_img: 'https://styles.redditmedia.com/t5_mouw/styles/communityIcon_xtjipkhhefi41.png?width=256&s=23dbd8fcbd7c632995ddc63929abe0c2ce3b8b4d'
      },
      { subreddit: 'technology',
        icon_img: 'https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png',
      },
      { subreddit: 'tennis',
        icon_img: 'https://styles.redditmedia.com/t5_2qiq1/styles/communityIcon_dwmyh6nx1n821.png?width=256&s=40e1f746bbbe6edbc3da2ea5b1419fa687322c13'
      },
      { subreddit: 'webdev',
        icon_img: 'https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_5ey8lzmwmxp21.png?width=256&s=5a85d5c682f40e3cf317c560b219585ac0afce78',
      },
    ],
  },
  reducers: {
    searchTargetUpdated(state, action) {
      state.searchTarget = action.payload
    }
  },
  extraReducers: {
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

export const { searchTargetUpdated } = redditSlice.actions
export const selectCategories = state => state.reddit.categories
export const selectPosts = state => state.reddit.posts
export const selectDiscussionStatus = state => state.reddit.discussionStatus
export const selectPostsStatus = state => state.reddit.postsStatus
export const selectDiscussion = state => state.reddit.discussion
export const selectSearchTarget = state => state.reddit.searchTarget
export default redditSlice.reducer
