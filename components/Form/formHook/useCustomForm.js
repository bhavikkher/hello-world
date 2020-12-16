import React, { useState } from 'react'

function useCustomForm(formStateFields) {
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    const [form, setForm] = useState(formStateFields);

    const handelInputChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        }); 
    }

    const validateField = (name) => {
        let isValid = false;
        console.log(name);
        if (name === "firstName") isValid = validateFirstName();
        else if (name === "lastName") isValid = validateLastName();
        else if (name === "emailAddress") isValid = validateEmailAddress();
        else if (name === "password") isValid = validatePassword();
        else if (name === "passwordConfirmation")
            isValid = validatePasswordConfirmation();
        return isValid;
    }

    const validateFirstName = () => {
        let firstNameError = "";
        const value = form.firstName;
        if (value.trim() === "") firstNameError = "First Name is required";

        setForm({
            ...form,
            formError: {
                ...form.formError,
                firstNameError
            }
        });
        return firstNameError === "";
    }

    const validateLastName = () => {
        let lastNameError = "";
        const value = form.lastName;
        if (value.trim() === "") lastNameError = "Last Name is required";

        setForm({
            ...form,
            formError: {
                ...form.formError,
                lastNameError
            }
        });
        return lastNameError === "";
    }

    const validateEmailAddress = () => {
        let emailAddressError = "";
        const value = form.emailAddress;
        if (value.trim === "") emailAddressError = "Email Address is required";
        else if (!emailValidator.test(value))
            emailAddressError = "Email is not valid";

        setForm({
            ...form,
            formError: {
                ...form.formError,
                emailAddressError
            }
        });
        return emailAddressError === "";
    }

    const validatePassword = () => {
        let passwordError = "";
        const value = form.password;
        if (value.trim === "") passwordError = "Password is required";
        else if (!passwordValidator.test(value))
            passwordError = "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

        setForm({
            ...form,
            formError: {
                ...form.formError,
                passwordError
            }
        });
        return passwordError === "";
    }

    const validatePasswordConfirmation = () => {
        let passwordConfirmationError = "";
        if (form.password !== form.passwordConfirmation)
            passwordConfirmationError = "Password does not match Confirmation";

        setForm({
            ...form,
            formError: {
                ...form.formError,
                passwordConfirmationError
            }
        });
        return passwordConfirmationError === "";
    }

    // const handleBlur = (event) => {
    //     const { name } = event.target;
    //     validateField(name);
    //     return;
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        let formFields = [
            "firstName",
            "lastName",
            "emailAddress",
            "password",
            "passwordConfirmation"
        ];

        let isValid = true;

        formFields.forEach(field => {
            isValid = validateField(field) && isValid;
        });

        if (isValid) setForm({ ...form, isFormSubmitted: true });
        else setForm({ ...form, isFormSubmitted: false });

        return form.isFormSubmitted;
    }

    return {
        form,
        handelInputChange,
        handleSubmit
        // handleBlur,
    }
}

export default useCustomForm;

