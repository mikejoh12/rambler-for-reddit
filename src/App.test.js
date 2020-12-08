import App from './App'
import store from './app/store';
import { Provider } from 'react-redux';

const { shallow, mount } = require("enzyme")


describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
})

describe('App Full DOM Rendering', () => {
  it('renders without crashing', () => {
    mount(<Provider store={store}>
            <App />
          </Provider>)
  })
})