import { Link } from 'react-router-dom'
import Nav from './Nav'

function Login() {
  return (
    <div>
      <Nav />
      <h1>login</h1>
      <p>need to sign up? click <Link to="/SignUp">here</Link></p>
      <form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login