import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { signOut } from '../actions';

class Nav extends Component {
    renderLinks() {
        const { auth } = this.props;
        if (auth) {
            return (
                // <li>
                //     User logged in!
                // </li>
                <Fragment>
                    <li>
                        <Link to="/secret-list">Secret List</Link>
                    </li>
                    <li>
                        <Link to="/movie-quote">Movie Quote</Link>
                    </li>
                    <li>
                        <button className="btn red darken-2" onClick={this.props.signOut}>Sign Out</button>
                    </li>
                </Fragment>
            )
        }
        return (
            // <li>
            //     User NOT logged in
            // </li>
            <Fragment>

                <li>
                    <Link to="/sign-in">Sign In</Link>
                </li>
                <li>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
            </Fragment>
        );
    }

    render() {

        const navStyle = {
            padding: '0 12px'
        }

        return (
            <nav style={navStyle} className="orange lighten-2">
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">Movie Quotes</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/person-list">Person List</Link>
                        </li>
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {
    signOut: signOut
})(Nav);