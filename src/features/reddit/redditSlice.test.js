import { kFormatter } from './redditSlice'
import redditReducer from './redditSlice'

const reducer = redditReducer

const initialState = {
    subredditStatus: 'idle',
    postsStatus: 'idle',
    searchStatus: 'idle',
    discussionStatus: 'idle',
    categories: [],
    posts: [],
    discussion: []
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