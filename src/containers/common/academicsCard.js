import React from 'react';

const AcademicsCard = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 academics-wrapper">
                <h3>Education and Certification</h3>
                <div className="row">
                    <div className="col-md-12">
                        <label>Graduation</label><span>{props.graduation}</span><br/>
                        <label>Certification</label>
                        <span className="skill-tag">{
                            props.certification.map(certificate => <span>{certificate}</span>)
                        }</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AcademicsCard;
