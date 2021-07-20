import React from 'react';
import emailSent from '../../assets/email-sent.png';

const SentModal = (props) => (
    <div className="staff-modal modal modal-show sent-modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body mx-auto d-block">
                    <img src={emailSent} className="img-responsive email-sent-img" />
                    <h4>Your request has been sent successfully</h4>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={props.handleClose}
                            data-dismiss="modal">OK
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default SentModal;
