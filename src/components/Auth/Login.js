import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="tg-breadcrumbarea">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <ol className="tg-breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li className="tg-active">Login</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;