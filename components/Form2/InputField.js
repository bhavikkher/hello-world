import React, { forwardRef, useImperativeHandle, useState } from 'react'

const InputField = forwardRef((props, ref) => {
    const [inputValue, setValue] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setError('')
        setValue(value)
        props.onChange(name, value);
    }

    const validate = ({ label }) => {
        let isValid = true;
        if (props.validation) {
            const rules = props.validation.split("|");
            for (let rule of rules) {
                if (rule && rule.includes(":")) {
                    if (rule.split(':').length = 2) {

                        const pair = rule.split(':');
                        const ruleName = pair[0], ruleValue = pair[1];

                        switch (ruleName) {
                            case 'min':
                                if (inputValue.length < ruleValue) {
                                    setError(`${label} must be at least minimum ${ruleValue} character long`);
                                    return false
                                }
                                break;
                            case 'max':
                                if (inputValue.length > ruleValue) {
                                    setError(`${label} must be no longer than ${ruleValue} character`);
                                    return false
                                }
                                break;
                            default:
                                break;
                        }
                    }
                } else {
                    switch (rule) {
                        case 'required':
                            if (!inputValue.trim()) {
                                setError(`${label} is Required`);
                                return false;
                            }
                            break;
                        case 'email':
                            const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if (!emailValidator.test(inputValue)) {
                                setError(`Please enter your ${label} in format: yourname@example.com`);
                                return false;
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        return isValid;
    }

    useImperativeHandle(ref, () => {
        return {
            validate: (props) => validate(props)
        }
    })
    
    return (
        <>
            { props.label && (<label className="label">{props.label}</label>)}
            <input
                placeholder={props.placeholder}
                name={props.name}
                onChange={(e) => handleChange(e)}
                type={props.type}
                value={props.value ? props.value : inputValue}
                autoComplete={props.autoComplete}
                className="form-control mb-2"
                autoFocus={props.autoFocus}
            />
            {error && (
                <small className="form-text text-danger">{error}</small>
            )}
        </>
    )
});

InputField.defaultProps = {
    placeholder: "",
    name: "",
    type: "text",
    value: "",
    autoComplete: "off",
    autoFocus: false,
    validation: ""
}

export default InputField
