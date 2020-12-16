import React, {useState} from "react"
import {Card, Button, Alert } from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {useHistory, } from 'react-router-dom'
export default function Logout() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  async function handleLogout() {
       setError('')
       try{
        await logout()
        history.pushState('/Login')
       }catch{
           setError('Fail to log out')
       }
    }

    return (
        <>
        <Card>
            <Card.Body>
     <h2> YOUR ACCOUNT</h2>
     {error && <Alert variant="danger">{error}</Alert>}
     <strong>Email:</strong>{currentUser.email}
            </Card.Body>
        </Card>
        <Button id='91' variant="link" onClick={handleLogout} >Log out</Button>
        </>
    )
}