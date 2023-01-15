import React, { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const initialState = { email: "", password: "" }

const SignUp = () => {

    const [state, setState] = useState(initialState)
    
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(state)

        const { email, password } = state

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User Successfully signup");
                console.log(userCredential.user);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                console.error(error)
                // ..
            });
    }

    return (
        <div className="main">
            <div className='py-5 w-100'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
                            <div className="card p-2 p-md-4 p-lg-5">
                                <h2 className="text-center mb-4">SignUp Form</h2>
                                <form onSubmit={handleSubmit} >
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input type="email" className="form-control" placeholder="Enter your Email" name='email' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input type="password" className="form-control" placeholder="Enter your Password" name='password' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <button className='btn btn-outline-success w-100'>Sign up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;


