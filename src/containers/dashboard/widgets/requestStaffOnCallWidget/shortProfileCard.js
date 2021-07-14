import React from 'react';

import { ReactComponent as WalletIcon } from '../../../../assets/icons/wallet.svg';
import { ReactComponent as LocationIcon } from '../../../../assets/icons/location.svg';
import { ReactComponent as ReviewsIcon } from '../../../../assets/icons/reviews.svg';

import './shortProfileCard.scss';

const ShortProfileCard = (props) => {
  const {
    name,
    id,
    location,
    verified,
    rating,
    img_url: profilePic,
    key_skills: keySkills,
    hourly_rate: hourlyRate,
  } = props;

  return (
    <div className="row short-profile">
      <div className="col-md-12">
        <div className="row">
          <div className="col-2 profile-pic padding-left-0">
            <div className="row">
              <img src={profilePic} className="img-responsive rounded-circle profile-img" height="50px" />
            </div>
          </div>
          <div className="col-10 padding-left-0">
            <div className="row">
              <div className="col-md-9 padding-left-0">
                <div className="row">
                  <div className="col-sm-12 name padding-left-0">
                    {name}
                  </div>
                  <div className="col-sm-12 key-skills padding-left-0">
                    {keySkills}
                  </div>
                </div>
              </div>
              <div className="col-md-3 profile-rating float-right">
                <span className="profile-score">
                  <i className="fa fa-star" /> {rating}
                </span>
                 /5
              </div>
            </div>
            <div className="col-md-12 padding-left-0 padding-top-5">
              <div className="row">
                <div className="col-sm-4 padding-left-3">
                  <WalletIcon className="icon"/> fotter
                </div>
                <div className="col-sm-4 padding-left-3">
                  <LocationIcon className="icon"/> fotter
                </div>
                <div className="col-sm-4 padding-left-3">
                  <ReviewsIcon className="icon"/> fotter
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortProfileCard;
