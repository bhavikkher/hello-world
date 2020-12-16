import React from 'react'
import useCustomForm from '../Form/formHook/useCustomForm'

const Form = () => {
    let formStateFields = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        passwordConfirmation: '',
        formError: {
            firstNameError: '',
            lastNameError: '',
            emailAddressError: '',
            passwordError: '',
            passwordConfirmationError: '',
        },
        isFormSubmitted: false
    }
    // custom form hook will get formFields & return form & handleFormInputChange
    const { form, handelInputChange, handleSubmit } = useCustomForm(formStateFields);

    return (
        <div className="row">
            <div className="col-lg-7">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form className="user" onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="First Name" name="firstName" value={form.firstName} onChange={handelInputChange} />
                                        {form.formError.firstNameError && (
                                            <small className="form-text text-danger">{form.formError.firstNameError}</small>
                                        )}
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Last Name" name="lastName" value={form.lastName} onChange={handelInputChange} />
                                        {form.formError.lastNameError && (
                                            <small className="form-text text-danger">{form.formError.lastNameError}</small>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" name="emailAddress" value={form.emailAddress} onChange={handelInputChange} />
                                    {form.formError.emailAddressError && (
                                        <small className="form-text text-danger">{form.formError.emailAddressError}</small>
                                    )}
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" name="password" value={form.password} onChange={handelInputChange} />
                                        {form.formError.passwordError && (
                                            <small className="form-text text-danger">{form.formError.passwordError}</small>
                                        )}
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" name="passwordConfirmation" value={form.passwordConfirmation} onChange={handelInputChange} />
                                        {form.formError.passwordConfirmation && (
                                            <small className="form-text text-danger">{form.formError.passwordConfirmation}</small>
                                        )}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-user btn-block">Register Account</button>
                            </form>
                            <hr />
                            <div className="text-center">
                                <a className="small" href="">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <a className="small" href="">Already have an account? Login!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
