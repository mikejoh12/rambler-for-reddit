import App from './App'
const { shallow } = require("enzyme")

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
})