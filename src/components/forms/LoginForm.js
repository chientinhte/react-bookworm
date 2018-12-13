import React, {Component} from 'react';
import PropTypes from 'prop-types'

import Validator from 'validator'
import InlineError from "../messages/InlineError";


class LoginForm extends Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    };
    onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});
    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data)
        }
    };
    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
        if (!data.password) errors.password = "Can't be blank";
        return errors;
    };

    render() {
        const {data, errors} = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="" id="email" name="email" placeholder="example@example.com"
                               className="form-control"
                               value={data.email}
                               onChange={this.onChange}
                        />
                        {errors.email && <InlineError text={errors.email}/>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Email</label>
                        <input type="password" id="password" name="password" placeholder="password"
                               className="form-control"
                               value={data.password}
                               onChange={this.onChange}
                        />
                        {errors.password && <InlineError text={errors.password}/>}
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm;
