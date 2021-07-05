import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

const Login = (props) => {

  const apiUrl = "http://localhost:42761/api/auth/login";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const submit = (data) => {

    //the options used for fetch
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
         'Content-Type': 'application/json'})

    }
        
        
      fetch(apiUrl, options)
      .then(res => {
        res.json()
        props.setLoggedIn(true)
        history.push("/member")
       })
      .catch(err => console.error(err));
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = { username: username,  password: password}
    submit(data)
  }
    return (
        <main className="form-signin">
         <form >
           <h1 className="h3 mb-3 fw-normal text-center">Login</h1>
           <div className="form-floating">
             <input type="username" className="form-control" id="floatingUserName" placeholder="username"
             onChange = {e => setUsername(e.target.value)}/>
             <label htmlFor="floatingName">Username</label>
           </div>
           <div className="form-floating">
             <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
             onChange = {e => setPassword(e.target.value)}/>
             <label htmlFor="floatingPassword">Password</label>
           </div>
           
           
           <button className="w-100 btn btn-lg btn-primary mb-2" type="submit" 
           onClick={submitHandler}>Login</button>

           <Link className="link" to="/register">Dont have an account yet? Sign Up Now!</Link>
         </form>
        </main>
    )
}

export default Login
