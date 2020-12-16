import React, { useRef, useState, useEffect } from 'react'
import InputField from './InputField'

const Form2 = () => {
    const [data, setData] = useState({})
    const [buttonLoading, setButtonLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [comment, setComment] = useState('');
    const [formDirty, setFormDirty] = useState(false);
    const [programmingLanguage, setProgrammingLanguage] = useState('');
    const [languages, setLanguages] = useState([]);
    const [knowReactJs, setKnowReactJs] = useState('');

    const [formErrors, setFormErrors] = useState({
        comment: '',
        programmingLanguage: '',
        languages: '',
        knowReactJs: ''
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleInputTextChange = (name, value) => {
        setData(prevState => ({ ...prevState, [name]: value }))
        if (formDirty) validateForm();
    }

    const handleChangeLanguage = (e) => {
        const { value } = e.target;
        let oldLan = [...languages];
        if (!oldLan.includes(value)) {
            oldLan.push(value);
        } else {
            oldLan = oldLan.filter(arrayItem => arrayItem !== value);
        }
        setLanguages(oldLan)
        if (formDirty) validateForm();
    }

    useEffect(() => {
        if (formDirty) validateForm();
    }, [comment, programmingLanguage, languages, knowReactJs])

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonLoading(true);
        let formValid = validateForm();
        if (!formValid) {
            setFormSubmitted(false);
        } else {
            setFormSubmitted(true);
        }
        setFormDirty(true);
        setButtonLoading(false);
        return;
    }

    const validateForm = () => {
        let formValid = true;
        // validate Email
        if (!emailRef.current.validate({ label: 'Email Address' })) {
            formValid = false;
        }
        // validate password
        if (!passwordRef.current.validate({ label: 'Password' })) {
            formValid = false;
        }

        let commentError = ''
        if (comment === '') {
            commentError = 'Please enter your comment'
            formValid = false;
        }

        let programmingLanguageError = ''
        if (programmingLanguage === '') {
            programmingLanguageError = 'Please choose Programming language'
            formValid = false;
        }

        let languagesError = ''
        if (languages.length === 0) {
            languagesError = 'Please choose at least one language'
            formValid = false;
        }

        let knowReactJsError = ''
        if (knowReactJs === '') {
            knowReactJsError = 'Please choose Yes or No'
            formValid = false;
        }

        setFormErrors((prevError) => ({
            ...prevError,
            'comment': commentError,
            'programmingLanguage': programmingLanguageError,
            'languages': languagesError,
            'knowReactJs': knowReactJsError
        }));

        return formValid
    }
    let currentState = JSON.stringify({ ...data, formErrors, comment, 'Programming Language': programmingLanguage, 'Comment': comment, 'Languages': languages, 'Do you know ReactJs?': knowReactJs }, "", 2);
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
                                <div className="form-group">
                                    <InputField
                                        label="Email Address:"
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
                                </div>
                                <div className="form-group">
                                    <InputField
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        onChange={handleInputTextChange}
                                        value={data.password || ''}
                                        autoComplete="off"
                                        ref={passwordRef}
                                        label="Password:"
                                        autoFocus={false}
                                        validation="required|min:6"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Choose Programming Language</label>
                                    <select className="form-control" id="exampleFormControlSelect1" value={programmingLanguage} onChange={(e) => setProgrammingLanguage(e.target.value)}>
                                        <option value="">Choose</option>
                                        <option value="C">C</option>
                                        <option value="C++">C++</option>
                                        <option value="PHP">PHP</option>
                                        <option value="Python">Python</option>
                                        <option value="Angular">Angular</option>
                                    </select>
                                    {formErrors.programmingLanguage && (
                                        <small className="form-text text-danger">{formErrors.programmingLanguage}</small>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Comment:</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={comment || ''} onChange={(e) => setComment(e.target.value)} />
                                    {formErrors.comment && (
                                        <small className="form-text text-danger">{formErrors.comment}</small>
                                    )}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleFormControlTextarea1">Languages:</label>
                                    <br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="english" checked={languages.includes('english') ? true : false} onClick={(e) => handleChangeLanguage(e)} onChange={(e) => handleChangeLanguage(e)} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">English</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="hindi" checked={languages.includes('hindi') ? true : false} onClick={(e) => handleChangeLanguage(e)} onChange={(e) => handleChangeLanguage(e)} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Hindi</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="gujarati" checked={languages.includes('gujarati') ? true : false} onClick={(e) => handleChangeLanguage(e)} onChange={(e) => handleChangeLanguage(e)} />
                                        <label className="form-check-label" htmlFor="inlineCheckbox3">Gujarati</label>
                                    </div>
                                    <div>
                                        {formErrors.languages && (
                                            <small className="form-text text-danger">{formErrors.languages}</small>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleFormControlTextarea1 p-5">Do you know ReactJs?</label>
                                    <div className="form-check form-check-inline pl-3">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="yes" checked={knowReactJs === 'yes' ? true : false} onChange={(e) => setKnowReactJs(e.target.value)} />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="no" checked={knowReactJs === 'no' ? true : false} onChange={(e) => setKnowReactJs(e.target.value)} />
                                        <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                                    </div>
                                    <div>
                                        {formErrors.knowReactJs && (
                                            <small className="form-text text-danger">{formErrors.knowReactJs}</small>
                                        )}
                                    </div>
                                </div>
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
