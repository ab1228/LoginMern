import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



class AppNavbar extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }


    toggle = () => {

    }
    render() {

        const { isAuthenticated, user } = this.props.auth;


        const authLinks = (
            <Fragment>

                <ul className="nav justify-content-end ml-auto pr-5 " data-toggle="tab">
                    <li className='d-inline'>
                        <span className='navbar-text mr-3'>
                            <strong>{user ? `Weclome,  ${user.name}` : ''}</strong>
                        </span>
                    </li>
                    <li className="d-inline mx-2 mb-2 px-4 py-2   badge badge-primary">

                    </li>
                </ul>
            </Fragment>
        )
        const guestLinks = (
            <Fragment>
                <ul className="nav justify-content-end ml-auto pr-5 " data-toggle="tab">

                    <li className="d-inline mx-2 mb-2 px-4 py-2   badge badge-primary">
                        <Link to="/register">Register </Link>
                    </li>
                    <li className="d-inline mx-2 mb-2 px-4 py-2    badge badge-primary">
                        <Link to="/login"> Login</Link>
                    </li>
                </ul>

            </Fragment>
        )


        return (
            <div>
                <div className='navbar-nav navbar-expand-sm navbar-light bg-light'>
                    <div className='container'>
                        <div className="navbar-brand"><Link style={{ color: "blue" }} to="/">ReactApp</Link></div>



                        {isAuthenticated ? authLinks : guestLinks}



                    </div>

                </div>

            </div>
        )

    }

}


const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(
    mapStateToProps, null
)(AppNavbar);