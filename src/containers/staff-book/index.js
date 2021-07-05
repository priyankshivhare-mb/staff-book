import React, {Component} from 'react'
import StaffBookLogo from '../../assets/staff-book-logo.png';
import ProfileCard from '../common/profileCard';

class StaffBook extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <ProfileCard />
                </div>
            </>
        );
    }
};

export default StaffBook;
