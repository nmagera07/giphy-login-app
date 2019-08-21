import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios'


const Credentials = (props) => {
    const [input, setInput] = useState({
        form: {
            username: '',
            password: '',
        }
    })

    const [ login, setLogin] = useState(false)

    const toggle = () => {
        setLogin(!login)
    }

    const handleChanges = e => {
        setInput({
            form: {
                ...input.form,
                [e.target.name]: e.target.value
            }
        })
    }

    const registerUser = (e) => {
        // e.preventDefault()
        const newUser = {
            username: input.form.username,
            password: input.form.password,
        }
        axios 
            // .post('http://localhost:5000/api/register', newUser)
            .post('https://nmagera-giphy-app.herokuapp.com/register', newUser)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.token)
                props.history.push('/funstuff')
            })
            .catch(error => {
                console.log(error)
            })
        
    }

    const loginUser = e => {
        axios
            // .post('http://localhost:5000/api/login', {
            //     username: input.form.username,
            //     password: input.form.password,
            // })
            .post('https://nmagera-giphy-app.herokuapp.com/login', {
                username: input.form.username,
                password: input.form.password
            })
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.token)
                props.history.push('/funstuff')
            })
            .catch(error => {
                console.log(error)
            })
    }

    if (!login) {

    
    return ( 
        <div className="outer-container">
        <div className="Container">
            <div className="Login" >
                <a href="#" style={{ textDecoration: "underline" }}>
                    Login
                </a>
                <a href="#" onClick={toggle}>
                    Register
                </a>
            </div>
            <Form>
                <Form.Field >
                    <input 
                        placeholder="username"
                        type="text"
                        name="username"
                        value={input.form.username}
                        onChange={handleChanges}
                    />
                </Form.Field>
                <Form.Field >
                    <input 
                        placeholder="password"
                        type="password"
                        name="password"
                        value={input.form.password}
                        onChange={handleChanges}
                    />
                </Form.Field>
                <Button type="submit" onClick={loginUser}>Login</Button> 
            </Form>
        </div>
        </div>
     );
    } else {
        return (
            <div className="outer-container">
            <div className="Container">
                <div className="Login">
                    <a href="#" onClick={toggle}>
                        Login
                    </a>
                    <a href="#" style={{ textDecoration: "underline" }}>
                        Register
                    </a>
                </div>
            <Form>
                <Form.Field >
                    <input 
                        placeholder="username"
                        type="text"
                        name="username"
                        value={input.form.username}
                        onChange={handleChanges}
                    />
                </Form.Field>
                <Form.Field >
                    <input 
                        placeholder="password"
                        type="password"
                        name="password"
                        value={input.form.password}
                        onChange={handleChanges}
                    />
                </Form.Field>
                <Button type="submit" onClick={registerUser}>Register</Button> 
            </Form>
        </div>
        </div>
        )
    }
}

 
export default Credentials;