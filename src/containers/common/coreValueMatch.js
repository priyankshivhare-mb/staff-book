import React from 'react';
import tick from '../../assets/icons/tick.png';
import cross from '../../assets/icons/cross.png';

const CoreValueMatch = ({ valueData }) => {
    return (
        <div className="row">
            <div className="col-md-12 core-value-wrapper">
                <h3>Profile Values
                    <span>Matching {valueData.filter(data => data.value).length}/{valueData.length}</span>
                </h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="core-value">
                            <span>
                                <img src={valueData[0].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[0].label}
                        </div>
                        <div className="core-value">
                            <span>
                                <img src={valueData[1].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[1].label}
                        </div>
                        <div className="core-value">
                            <span>
                                <img src={valueData[2].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[2].label}
                        </div>
                        <div className="core-value">
                            <span>
                                <img src={valueData[3].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[3].label}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="core-value">
                            <span>
                                <img src={valueData[4].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[4].label}
                        </div>
                        <div className="core-value">
                            <span>
                                <img src={valueData[5].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[5].label}
                        </div>
                        <div className="core-value">
                            <span>
                                <img src={valueData[6].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[6].label}
                        </div>
                        <div className="core-value">
                            <span>
                                <img src={valueData[7].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[7].label}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="core-value">
                            <span>
                                <img src={valueData[8].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[8].label}
                        </div>
                        <div className="core-value">
                            <span>
                                <img src={valueData[9].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[9].label}
                        </div>
                        <div className="core-value">
                            <span>
                                <img src={valueData[10].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[10].label}
                        </div>
                        <div className="core-value">
                            <span>
                                <img src={valueData[11].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[11].label}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="core-value">
                            <span>
                                <img src={valueData[12].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[12].label}
                        </div>
                        <div className="core-value">
                            <span>
                                <img src={valueData[13].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[13].label}
                        </div>
                        <div className="core-value">
                            <span>
                                <img src={valueData[14].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[14].label}
                        </div>
                        <div className="core-value">
                            <span>
                                <img src={valueData[15].value ? tick : cross} className="img-responsive" />
                            </span> {valueData[15].label}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValueMatch;
