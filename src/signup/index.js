import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
export default function Signup(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordconfirmRef = useRef()
    const { signup } = useAuth()
    const[error, setError] = useState('')
    const[loading, setLoading] =useState(false)
    const history = useHistory()
async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !==
        passwordconfirmRef.current.value){
            return setError('Password is wrong')
        }
        try{
            setError("")
            setLoading(true)
         await signup(emailRef.current.value, passwordRef.current.value)
         history.push("/Login")
    }catch{
        setError('Fail to create the account')
    }
       setLoading(false)
    }
    return(
        <>
    <Card>
<Card.Body>
    <h2 classname='text-center mb-4'>Sign up</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required/>
        </Form.Group>

        <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required/>
        </Form.Group>

        <Form.Group id="password-confirm">
            <Form.Label>Password confiration</Form.Label>
            <Form.Control type="password" ref={passwordconfirmRef} required/>
        </Form.Group>
      <Button disabled={loading} classname="w-100" type="submit">Sign up</Button>


    </Form>
</Card.Body>
    </Card>
    <div classname="w-100 text-center mt-2">
        Already have a account?<Link id='5' to="/Login">Login</Link>
    </div>
        </>
    )
}