import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../Util/Validator/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Navigate} from "react-router-dom";
import style from "./../common/FormsControl/FormControl.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field validate={[required]} placeholder={"Email"} name={'email'} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} placeholder={"Password"} type={'password'} name={'password'} component={Input}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>
            </div>
            { error && <div className={style.formSummeryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    if (props.isAuth) return <Navigate to={'/profile'}/>;
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    return (
        <div>
            <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)