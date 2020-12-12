import React from "react"
// import Signup from '../signup'
import {Container} from 'react-bootstrap'
import {AuthProvider} from "../contexts/AuthContext"
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
 import Login from '../login'
function functiona(){
return(
  <AuthProvider>
<Container> 
  <Login/>
  {/* <Router> */}
  {/* <AuthProvider> */}
    {/* <Switch> */}
    {/* <Route path="/signup" component={Signup} /> */}
    {/* <Route path="/Login" component={Login} /> */}
    {/* </Switch> */}
    {/* </AuthProvider> */}
  {/* </Router> */}
 </Container>
    </AuthProvider>
)
}
export default functiona