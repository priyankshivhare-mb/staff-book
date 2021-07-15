import React from 'react';
import gallery1 from '../../assets/gallery-image1.png';

const Gallery = (props) => {
    return (
        <div className="row">
        <div className="col-md-12 gallery-wrapper">
            <h3>Work Gallery</h3>
            <div className="row justify-center">
                <div className="gallery-image">
                    <img src={gallery1} className="img-responsive" />
                </div>
                <div className="gallery-image">
                    <img src={gallery1} className="img-responsive" />
                </div>
                <div className="gallery-image">
                    <img src={gallery1} className="img-responsive" />
                </div>
                <div className="gallery-image">
                    <img src={gallery1} className="img-responsive" />
                </div>
                <div className="gallery-image">
                    <img src={gallery1} className="img-responsive" />
                </div>
                <div className="gallery-image">
                    <img src={gallery1} className="img-responsive" />
                </div>
                <div className="gallery-image">
                    <img src={gallery1} className="img-responsive" />
                </div>
                <div className="gallery-image">
                    <img src={gallery1} className="img-responsive" />
                </div>
                <div className="gallery-image">
                    <img src={gallery1} className="img-responsive" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button className="btn full-width-btn">
                        Load More
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Gallery;
