import React from 'react';
import sendEmail from '../../assets/icons/send-email.png';

const Modal = (props) => (
    <div className="staff-modal modal modal-show" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{props.title}</h5>
                    <button type="button" className="close" onClick={props.handleCancel} data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={props.handleCancel}
                            data-dismiss="modal">Cancel
                    </button>
                    <button type="button" className="btn btn-primary" onClick={props.handleSend}>Send Invite<img src={sendEmail} className="send-email img-responsive"/></button>
                </div>
            </div>
        </div>
    </div>
);

export default Modal;
