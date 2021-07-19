import React from 'react';
import emailSent from '../../assets/email-sent.png';

const SentModal = (props) => (
    <div className="staff-modal modal modal-show" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{props.title}</h5>
                    <button type="button" className="close" onClick={props.handleCancel} data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body mx-auto d-block">
                    <img src={emailSent} className="img-responsive" />
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
