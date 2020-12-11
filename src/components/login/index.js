import React, {useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'

export default function Signup(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordconfirmRef = useRef()
    return(
        <>
    <Card>
<Card.Body>
    <h2 classname='text-center mb-4'>Sign up</h2>
    <Form>
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
      <Button classname="w-100" type="submit">Sign up</Button>


    </Form>
</Card.Body>
    </Card>
    <div classname="w-100 text-center mt-2">
        Already have a account?
    </div>
        </>
    )
}