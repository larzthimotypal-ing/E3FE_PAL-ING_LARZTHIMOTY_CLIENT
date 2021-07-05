import { useState } from "react";
import { Redirect } from "react-router-dom";

const Register = () => {
   /** setting up states that we will use to track input values*/
   const [name, setName] = useState("");
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   /** a state used to track if we are gonna redirect to another page*/
   const [redirect, setRedirect] = useState(false);

   useEffect(() => {
     if(redirect === true)
     return <Redirect to ='/login'/>
   }, [redirect])

   const apiUrl = "http://localhost:42761/api/auth/register";

   /** method to be used for submitting form*/
   
   
   const submit = (data) => {

       //the options used for fetch
       const options = {
           method: "POST",
           body: JSON.stringify(data),
           headers: new Headers({
            'Content-Type': 'application/json'})
 
       }
           
           
         fetch(apiUrl, options)
         .then(res => res.json())
         .catch(err => console.error(err));

       //redirecting if registration is successful
       
       

   }

   const submitHandler = (e) => {
    e.preventDefault()
    const data = { username: username,  password: password, email:email, name:name}
    submit(data)
  }

   return (
       <main className="form-signin">
         <form >
           <h1 className="h3 mb-3 fw-normal text-center">Please Sign-up</h1>

           <div className="form-floating">
             <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"
             onChange = {e => setEmail(e.target.value)}/>
             <label htmlFor="floatingEmail">Email address</label>
           </div>
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
           <div className="form-floating">
             <input type="name" className="form-control" id="floatingName" placeholder="name"
             onChange = {e => setName(e.target.value)}/>
             <label htmlFor="floatingName">Name</label>
           </div>
           
           <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={submitHandler}>Sign Up</button>
         </form>
     </main>
   )
}

export default Register
