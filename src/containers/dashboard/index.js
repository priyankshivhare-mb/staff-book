import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from '../../modules/counter'
import Modal from '../common/modal';
import BannerImage from '../../assets/dashboard-cta.png';



const Home = props => {
    const [ isModalOpen, handleModalState ] = useState(false);
    const confirmStaffBookActivation = () => {
        const cookies = new Cookies();
        cookies.set('isStaffBookEnabled', 'true', { path: '/' });
        window.location.reload();
    }

    return (
    <div>
        <h1>Dashboard</h1>
        <img
            src={BannerImage}
            className="img-responsive"
            onClick={() => handleModalState(true)}
        />

        {
            isModalOpen &&
            <Modal
                title="Activate Staff-book?"
                content="Are you sure you want to activate Staff-book?"
                handleConfirm={() => confirmStaffBookActivation()}
                handleCancel={() => handleModalState(false)}
            />
        }

        <p>Count: {props.count}</p>

        <p>
            <button className="btn btn-primary" onClick={props.increment}>Increment</button>
            <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
                Increment Async
            </button>
        </p>

        <p>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
                Decrement Async
            </button>
        </p>

        <p>
            <button onClick={() => props.changePage()}>
                Go to about page via redux
            </button>
        </p>
    </div>
)}

const mapStateToProps = ({counter}) => ({
    count: counter.count,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
            incrementAsync,
            decrement,
            decrementAsync,
            changePage: () => push('/about-us')
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
