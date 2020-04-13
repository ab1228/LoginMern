import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorsAction';
import { Link } from 'react-router-dom';
import "./registerModal.css"

class AuthModal extends Component {


    state = {
        name: '',
        email: '',
        password: '',
        msg: null
    }


    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevPorps) {
        const { error } = this.props;
        if (error !== prevPorps.error) {
            ///CHECK FOR REGISTER ERROR
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }
    }




    handleChange = ({ target }) => {
        const { name, value } = target;


        this.setState({
            [name]: value
        })

    };



    onSubmit = e => {
        e.preventDefault();



        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        ///ATTEMPT TO REGISTER
        this.props.register(newUser);



    };

    render() {
        console.log(this.state);

        return (
            <div className="body container my-4 my-xl-5 pt-2 content">
                <div className="row">
                    <div className="css card mb-5 px-1 pt-5 pb-5 col-md mr-md-3 register off-white shadow-sm">
                        <h5 className="card-title ml-2">
                            <i className="ml-3 mr-2 fas fa-lock" />
              Register
            </h5>

                        {this.state.msg ? <div className="alert alert-danger">{this.state.msg}</div> : null}



                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="Name" className="label">
                                        Full Name
                                        </label>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input
                                            type="text"
                                            className='form-control form-control-lg'
                                            name="name"
                                            placeholder='full name'
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                        />

                                    </div>





                                </div>
                                <div className="form-group">
                                    <label htmlFor="Email" className="label">
                                        Email Address
                  </label>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                        </div>
                                        <input
                                            type="email"
                                            className='form-control form-control-lg'
                                            name="email"
                                            placeholder='email'
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        />

                                    </div>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="Password" className="label">
                                        Password
                  </label>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                        </div>
                                        <input
                                            type="password"
                                            className='form-control form-control-lg'
                                            name="password"
                                            placeholder='password'
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        />

                                    </div>

                                </div>

                                <button className="btn btn-primary btn-block">Register</button>
                            </form>
                        </div>
                    </div>

                    <div className="login card mb-5 py-5 px-1 col-md ml-md-3 h-25 login off-white shadow-sm">
                        <h5 className="card-title ml-3">Already have an account?</h5>
                        <div className="card-body pb-5">
                            <Link style={{ color: "white" }} to="/login"><div className='btn btn-primary btn-block'>   Login</div></Link>



                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});
export default connect(
    mapStateToProps, { register, clearErrors }
)(AuthModal);