
import { DiscussionCard } from './DiscussionCard'
import { DiscussionList } from './DiscussionList'
import { PostCard } from './PostCard'
import { PostList } from './PostList'
import { TimeAgo } from './TimeAgo'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
const { shallow } = require("enzyme")

const mockStore = configureStore([])
const store = mockStore()

describe('DiscussionCard component', () => {
    it('should render with given state from Redux store', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <DiscussionCard />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('DiscussionList component', () => {
    it('should render with given state from Redux store', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <DiscussionList />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('PostCard component', () => {
    it('should render with given state from Redux store', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <PostCard />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
  
describe('PostList component', () => {
    it('should render with given state from Redux store', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <PostList />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
  
describe('TimeAgo component', () => {
    it('should render with given state from Redux store', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <TimeAgo />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})