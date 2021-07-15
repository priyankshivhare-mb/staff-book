import React from 'react';

const Gallery = (props) => {
    return (
        <div className="row">
        <div className="col-md-12 gallery-wrapper">
            <h3>Work Gallery</h3>
            <div className="row justify-center">
                {
                    props.imageData.map(data => (
                        <div className="gallery-image">
                            <img src={data} className="img-responsive" />
                        </div>
                    ))
                }
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
