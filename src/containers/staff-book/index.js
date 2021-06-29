import React, {Component} from 'react'
import StaffBookLogo from '../../assets/staff-book-logo.png';

class StaffBook extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-8">
                        <h2>Welcome to staff book</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src={StaffBookLogo} className="img-responsive" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-tabs">
                            <li role="presentation" className="active"><a href="#">Preference</a></li>
                            <li role="presentation"><a href="#">Account Details</a></li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
};

export default StaffBook;
