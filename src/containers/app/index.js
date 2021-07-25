import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import Dashboard from '../dashboard';
import StaffOnCall from '../staff-on-call';
import Staff from '../staff-dashboard';
import StaffListing from '../staff-listing';
import BookingsCalendar from '../bookings-calendar';
import Navigation from '../common/navigation';
import Footer from '../common/footer';

const App = () => {
    const isStaff = window.location.pathname === '/staff';

    return (
      <>
        <Navigation isStaff={isStaff}/>
        <div className="container-fluid">
          <main>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/recommended-profiles" component={StaffOnCall}/>
            <Route exact path="/staff" component={Staff}/>
            <Route exact path="/search-profiles" component={StaffListing} />
            <Route exact path="/bookings-calendar" component={BookingsCalendar} />
          </main>
        </div>
        <Footer />
      </>
    );
};

export default App;
