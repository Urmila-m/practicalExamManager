import React, {Component} from 'react'

class Navbar extends Component{
    // state
    render() {
        return (
            <nav className="navbar navbar-default navbar-expand-lg navbar-expand-md nav">
                <a className="navbar-brand" href="#">Practical Exam Management</a>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-light"/>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="active nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Admin Login</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Student Login</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Page 3</a></li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;