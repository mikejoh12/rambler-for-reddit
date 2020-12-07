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
            <DiscussionCard post={{
                author: 'Sarah',
                body: 'Test message',
                id: 'abc123',
                ups: '123',
                created_utc: '12345'
            }} />
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
    it('should render with given props', () => {
        const wrapper = shallow(
            <PostCard post={{
            title: 'Test Title',
            author: 'Mike',
            subreddit: 'popular',
            imgUrl: 'https://www.test.com',
            thumbnailUrl: 'https://www.test.com',
            id: 'testid',
            ups: '123',
            created_utc: '12345',
            num_comments: '5'
            }} />
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
    it('should render', () => {
        const wrapper = shallow(
                <TimeAgo timestamp='123456' />
        )
        expect(wrapper).toMatchSnapshot()
    })
})