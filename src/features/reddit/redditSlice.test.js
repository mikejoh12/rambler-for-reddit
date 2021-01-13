import { kFormatter } from './redditSlice'
import redditReducer from './redditSlice'

const reducer = redditReducer

const initialState = {
    subredditStatus: 'idle',
    postsStatus: 'idle',
    searchStatus: 'idle',
    discussionStatus: 'idle',
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
    posts: [],
    discussion: [],
    searchTarget: 'posts'
  }

describe('redditSlice', () => {

    describe('kFormatter function', () => {
        it('should return the string "1.5k" with an input of 1500', () => {
            const input = 1500
            const output = '1.5k'

            expect(kFormatter(input)).toBe(output)
        })

        it('should return the string "123" with an input of 123', () => {
            const input = 123
            const output = 123

            expect(kFormatter(input)).toBe(output)
        })
    })

    describe('reducer', () => {
        it('should return initial state when called with empty state and action', () => {

            expect(reducer(undefined, {})).toEqual(initialState)
        })

    })
})