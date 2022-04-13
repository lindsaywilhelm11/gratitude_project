import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link to='/'>home</Link>
        <Link to='/login'>login</Link>
        <Link to='/signup'>sign up</Link>
    </div>
  )
}

export default Nav