import React from 'react'
import GoogleMapWithMarker from '../common/googleMapWithMarker';
import JobPipeline from '../common/jobPipeline';

const markerPosition = [{
    lat: 37.772,
    lng: -122.214
}, {
    lat: 39.772,
    lng: -122.214
}];

const handleOnClick = (lat, lng) => {
    console.log(lat, lng);
};

const funnelData = [
    { label: "Received", value: 5000, labelColor: "#FFFFFF" },
    { label: "Shortlisted", value: 2500, labelColor: "#FFFFFF" },
    { label: "Scheduled", value: 500, labelColor: "#FFFFFF" },
    { label: "Conducted", value: 200, labelColor: "#FFFFFF" },
    { label: "Verified", value: 200, labelColor: "#FFFFFF" },
    { label: "Accepted", value: 200, labelColor: "#FFFFFF" },
];

const Staff = () => (
    <div className="wrapper">
        <div className="sidebar" data-color="white">
            <div className="logo">
                <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                    Staff Book
                </a>
            </div>

            <div className="sidebar-wrapper">
                <div className="user">
                    <div className="photo">
                        <img src="https://via.placeholder.com/150"/>
                    </div>
                    <div className="info">
                        <div className="clearfix"></div>
                        <div className="collapse" id="collapseExample">
                            <ul className="nav">
                                <li>
                                    <a href="#">
                                        <span className="sidebar-mini-icon">MP</span>
                                        <span className="sidebar-normal">My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="sidebar-mini-icon">EP</span>
                                        <span className="sidebar-normal">Edit Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="sidebar-mini-icon">S</span>
                                        <span className="sidebar-normal">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className="nav">
                    <li className="active">
                        <a href="#">
                            <i className="nc-icon nc-app"></i>
                            <p>Example 1</p>
                        </a>
                    </li>
                    <li>
                        <a data-toggle="collapse" href="#pagesExamples">
                            <i className="nc-icon nc-layout-11"></i>
                            <p>Example 2
                                <b className="caret"></b>
                            </p>
                        </a>

                        <div className="collapse" id="pagesExamples">
                            <ul className="nav">
                                <li>
                                    <a href="#">
                                        <span className="sidebar-mini-icon">C1</span>
                                        <span className="sidebar-normal">Collapse 1</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="sidebar-mini-icon">C2</span>
                                        <span className="sidebar-normal">Collapse 2</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div className="main-panel">
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute">
                <div className="container-fluid">


                    <div className="navbar-wrapper">
                        <div className="navbar-toggle">
                            <button type="button" className="navbar-toggler">
                                <span className="navbar-toggler-bar bar1"/>
                                <span className="navbar-toggler-bar bar2"/>
                                <span className="navbar-toggler-bar bar3"/>
                            </button>
                        </div>
                        <a className="navbar-brand" href="#pablo">Dashboard</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                            aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar navbar-kebab"/>
                        <span className="navbar-toggler-bar navbar-kebab"/>
                        <span className="navbar-toggler-bar navbar-kebab"/>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navigation">


                        <form>
                            <div className="input-group no-border">
                                <input type="text" value="" className="form-control" placeholder="Search..."/>
                                <span className="input-group-addon">
                        <i className="nc-icon nc-zoom-split"/>
                      </span>
                            </div>
                        </form>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#pablo">
                                    <i className="nc-icon nc-chart-bar-32"/>
                                    <p>
                                        <span className="d-lg-none d-md-block">Stats</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com"
                                   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false">
                                    <i className="nc-icon nc-vector"/>
                                    <p>
                                        <span className="d-lg-none d-md-block">Some Actions</span>
                                    </p>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right"
                                     aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#pablo">
                                    <i className="nc-icon nc-single-02"/>
                                    <p>
                                        <span className="d-lg-none d-md-block">Account</span>
                                    </p>
                                </a>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>

            <div className="panel-header panel-header-sm">
            </div>

            <div className="content">
                <div className="card">
                    <div className="card-header">
                        <GoogleMapWithMarker
                            containerClassName="map-class-name"
                            width="800px"
                            height="400px"
                            zoom={4}
                            mapCenter={
                                {lat: 38.772,
                                lng: -122.214}}
                            markerData={markerPosition}
                            onMarkerClick={handleOnClick}
                            showInfobox={true}
                            infoboxPosition={{lat: 38.772,
                                lng: -122.214}}
                        >
                            <div style={{backgroundColor: 'yellow', opacity: 0.75, padding: 12}}>
                                <div style={{fontSize: 16, fontColor: `#08233B`}}>
                                    Hello, World!
                                </div>
                            </div>
                        </GoogleMapWithMarker>
                        <div className="row">
                            <div className="col-md-4">
                                <JobPipeline data={funnelData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container-fluid">
                </div>
            </footer>
        </div>
    </div>
)

export default Staff
