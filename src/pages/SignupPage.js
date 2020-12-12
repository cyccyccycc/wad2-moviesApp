import React from "react"
import Signup from '../login'
import {Container} from 'react-bootstrap'
import {AuthProvider} from "../contexts/AuthContext"
 
function functiona(){
return(
<AuthProvider>
<Container> 
  <Signup/>
 </Container>
 </AuthProvider>
)
}
export default functiona