import React from 'react';

import { ReactComponent as WalletIcon } from '../../../assets/icons/wallet.svg';
import { ReactComponent as LocationIcon } from '../../../assets/icons/location.svg';
import { ReactComponent as ReviewsIcon } from '../../../assets/icons/reviews.svg';

import './shortProfileCard.scss';

class ShortProfileCard extends React.Component {
  renderRating() {
    const {
      rating,
      showRating=false,
      showVerified=false,
    } = this.props;

    const verifiedCheck = <i className="fa fa-check-circle-o" style={{color: '#6CBB11'}} />;

    return (
      showRating && (
        <div className="profile-rating d-inline-block">
          <div className={`profile-score-cont float-left ${showVerified ? 'border-right' : ''}`}>
            <span className="profile-score">
              <i className="fa fa-star" /> {rating}
            </span>
            /5
          </div>
          {showVerified && verifiedCheck}
        </div>
      )
    );
  }

  renderMatchingScore() {
    const score = Math.floor(Math.random() * 101);

    const {
      showMatchingScore=false,
    } = this.props;

    let colorClass = 'red';
    if (score <= 100 && score >= 80) {
      colorClass = 'green';
    } else if (score <= 80 && score >= 50) {
      colorClass = 'yellow';
    }

    return showMatchingScore && (
      <div className={`matching-score ${colorClass}`}>{score}% Matching</div>
    );
  }

  render() {
    const {
      name,
      id,
      location,
      verified,
      img_url: profilePic,
      key_skills: keySkills,
      hourly_rate: hourlyRate,
    } = this.props;

    return (
      <div className="row short-profile">
        <div className="col-md-12 px-0">
          <div className="row">
            <div className="col-2 profile-pic pl-0">
              <div className="row">
                <img src={profilePic} className="img-responsive rounded-circle profile-img" height="50px" />
              </div>
            </div>
            <div className="col-10 px-0">
              <div className="row">
                <div className="col-md-8 pl-0">
                  <div className="row">
                    <div className="col-sm-12 name pl-0">
                      {name}
                    </div>
                  </div>
                </div>

                <div className="col-md-4 float-right p-0 profile-meta">
                  {this.renderRating()}
                  {this.renderMatchingScore()}
                </div>

              </div>
              <div className="col-md-12 pl-0 pt-2">
                <div className="col-sm-12 key-skills pl-0">
                  {keySkills}
                </div>
                <div className="row">
                  <div className="col-sm-4 pl-2">
                    <WalletIcon className="icon"/> fotter
                  </div>
                  <div className="col-sm-4 pl-2">
                    <LocationIcon className="icon"/> fotter
                  </div>
                  <div className="col-sm-4 pl-2">
                    <ReviewsIcon className="icon"/> fotter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ShortProfileCard;
