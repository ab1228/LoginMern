import React from 'react';

class Login extends Component {
    state = {
        email: '',
        password: '',
        msg: null
    }

    render() {
        return (
            <div>

                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card mt-5">
                            <div className="card-header">
                                <h3> <i className="ml-3 mr-2 fas fa-lock" />Login</h3>
                                <div className="d-flex justify-content-end social_icon">
                                    <span><i className="fab fa-facebook-square"></i></span>
                                    <span><i className="fab fa-google-plus-square"></i></span>
                                    <span><i className="fab fa-twitter-square"></i></span>
                                </div>
                            </div>
                            <div className="card-body" id="my_Login">
                                <div> {this.state.msg ? <div className="alert alert-danger">{this.state.msg}</div> : null}</div>


                                <form onSubmit={this.onSubmit}>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                        </div>
                                        <input type="email" className="form-control" placeholder="email" name="email" value={this.state.email}
                                            onChange={this.handleChange} />

                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="password" name="password" value={this.state.password}
                                            onChange={this.handleChange} />

                                    </div>

                                    <div className='row align-items-center remember'>
                                        <input type="checkbox" /> Remember Me
					                </div>



                                    <div className="row">


                                        <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                                    </div>


                                </form>
                            </div>
                            <div className="card-footer">

                                <div className="d-flex justify-content-center">
                                    <a href="/contact" className="btn btn-outline-light">If you have any questions please contact
                        us.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Login;