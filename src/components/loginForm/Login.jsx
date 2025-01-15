import React from "react";
import { useState } from "react";



function Login() {
    const users = [
        { email: "user@gmail.com", password: "1234" },
    ];

    // State for inputs and error messages
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isLoading, setIsLoading] = useState(false);



    const handelsubmit = (e) => {
        e.preventDefault();
        setEmailError("");
        setPasswordError("");
        setIsLoading(true);




        setTimeout(() => {
            // Find the user by email
            const foundUser = users.find((user) => user.email === email);

            if (!foundUser) {
                setEmailError('User not found');
            } else if (foundUser.password !== password) {
                setPasswordError('Password Incorrect');
            } else {
                alert('Login successful!');
                setEmailError('');  // Clear the email input on successful login
                setPasswordError('');  // Clear the password input
            }
            setIsLoading(false);
        }, 3000);

    }



    let setEmailonchange = (e) => {
        setEmail(e)
    }
    let setPasswordonchange = (e) => {
        setPassword(e)
    }
    return (
        <>
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={handelsubmit} >
                    <input id="input-email" type="text" placeholder="Email" name="email" onChange={(e) => { setEmailonchange(e.target.value) }} />
                    {emailError && <span id="user-error" className="error-message">{emailError}</span>}

                    <input id="input-password" type="password" placeholder="Password" name="password" onChange={(e) => { setPasswordonchange(e.target.value) }} />
                    {passwordError && (<span id="password-error" className="error-message">{passwordError}</span>)}

                    <button id="submit-form-btn" type="submit">{isLoading ? "Loading" : "login"}</button>

                </form>

            </div>
        </>
    )
}

export default Login;