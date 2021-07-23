import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Dashboard from '../dashboard';
import StaffOnCall from '../staff-on-call';
import Staff from '../staff-dashboard';
import StaffListing from '../staff-listing';
import Navigation from '../common/navigation';
import Footer from '../common/footer';

const App = () => {
    const [activeLink, setActiveLink] = useState('dashboard');
    const cookies = new Cookies();
    const isStaffBookEnabled = cookies && cookies.get('isStaffBookEnabled');

    return (
      <>
        <Navigation />
        <div className="container-fluid">
          <main>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/recommended-profiles" component={StaffOnCall}/>
            <Route exact path="/staff" component={Staff}/>
            <Route exact path="/search-profiles" component={StaffListing} />
          </main>
        </div>
        <Footer />
      </>
    );
};

export default App;
