import Banner from "./components/Banner";
import MemberList from './components/members/MemberList'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from './components/register/Register'
import Login from './components/login/Login'

import MemberContext from './context/MemberContext'
import InviteContext from "./context/InviteContext";
import {useState, useEffect} from 'react'

import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <Router>
        <MemberContext>
          <InviteContext>
            <Navbar loggedIn = {loggedIn}/>
            <Banner />
            <Switch>
              <Route exact path='/member'>
                <MemberList />
              </Route>
              <Route exact path='/register'>
                <Register/>
              </Route>
              <Route exact path='/login' 
              render={(props) => <Login{...props} setLoggedIn={setLoggedIn}/>}/>
            </Switch>
          </InviteContext>
        </MemberContext>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
