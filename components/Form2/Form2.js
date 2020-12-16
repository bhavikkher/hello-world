import React, { useRef, useState } from 'react'
import InputField from './InputField'

const Form2 = () => {
    const [data, setData] = useState({})
    const [buttonLoading, setButtonLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleInputTextChange = (name, value) => {
        setData(prevState => ({ ...prevState, [name]: value }))
    }
    let currentState = JSON.stringify(data, "", 2);

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonLoading(true);
        let isValid = true;
        // validate Email
        if (!emailRef.current.validate({ label: 'Email Address' })) {
            isValid = false;
        }
        // validate password
        if (!passwordRef.current.validate({ label: 'Password' })) {
            isValid = false;
        }

        if (!isValid) {
            setFormSubmitted(false);
        } else {
            setFormSubmitted(true);
        }
        setButtonLoading(false);
        return;
    }
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="p-5">

                            {
                                formSubmitted && (
                                    <div className="alert alert-success" role="alert">
                                        Logged In Successfully
                                    </div>
                                )
                            }
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <InputField
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    placeholder="yourname@example.com"
                                    onChange={handleInputTextChange}
                                    value={data.email || ''}
                                    autoComplete="off"
                                    ref={emailRef}
                                    autoFocus={true}
                                    validation="required|email"
                                />
                                <br />
                                <InputField
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleInputTextChange}
                                    value={data.password || ''}
                                    autoComplete="off"
                                    ref={passwordRef}
                                    label="Password"
                                    autoFocus={false}
                                    validation="required|min:6"
                                />
                                <br />
                                <button type="submit" className="btn btn-success" disabled={buttonLoading}>{buttonLoading ? "Signing in..." : "Sign in"}</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="p-5">
                            current state:
                            <pre>
                                {currentState}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form2
