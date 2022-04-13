import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
      <h1>sign up</h1>
        <p>already have an account? click <Link to="/Login">here</Link></p>
        <form>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder='confirm password' />
            <button type="submit">sign up</button>
        </form>
    </div>
  )
}

export default SignUp