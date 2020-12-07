import { Header } from './Header'
const { shallow } = require("enzyme")

describe('Header component', () => {
  it('renders without crashing', () => {
    shallow(<Header />)
  })
})