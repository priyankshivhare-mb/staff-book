import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Dashboard from '../dashboard';
import StaffOnCall from '../staff-on-call';
import Staff from '../staff';
import Navigation from '../common/navigation';

const App = () => {
    const [activeLink, setActiveLink] = useState('dashboard');
    const cookies = new Cookies();
    const isStaffBookEnabled = cookies && cookies.get('isStaffBookEnabled');

    return (
      <>
        <Navigation
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          isStaffBookEnabled={isStaffBookEnabled}
        />
        <div className="container-fluid">
          <main>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/recommended-profiles" component={StaffOnCall}/>
            <Route exact path="/staff" component={Staff}/>
          </main>
        </div>
      </>
    );
};

export default App;
