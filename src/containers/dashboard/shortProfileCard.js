import React from 'react';
import Moment from 'react-moment';
import { getProfileColor } from '../common/utils/utils';

import './shortProfileCard.scss';

// Profile Icons
import { ReactComponent as WalletIcon } from '../../assets/icons/wallet.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg';
import { ReactComponent as ReviewsIcon } from '../../assets/icons/reviews.svg';
import { ReactComponent as BriefcaseIcon } from '../../assets/icons/briefcase.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg';
import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg';

class ShortProfileCard extends React.Component {
  renderFooter() {
    const {
      footerIcons = ['briefcase', 'wallet', 'location'],
      location,
      reviews,
      experience,
      hourly_rate: hourlyRate,
      booking_date: bookingDate,
      booking_time: bookingTime,
    } = this.props;

    const iconMap = {
      wallet: { icon: WalletIcon, data: `$ ${hourlyRate}/hr`, col: 'col-sm-3' },
      location: { icon: LocationIcon, data: location, col: 'col-sm-6' },
      reviews: { icon: ReviewsIcon, data: reviews, col: 'col-sm-3' },
      briefcase: { icon: BriefcaseIcon, data: experience, col: 'col-sm-3' },
      calendar: { icon: CalendarIcon, data: <Moment date={bookingDate} format={'ddd, Do MMM'}/>, col: 'col-sm-4' },
      time: { icon: TimeIcon, data: bookingTime, col: 'col-sm-3' }
    };

    const timeOptions = {weekday: 'short', month: 'short', day: 'numeric' };

    const { icon: Icon0, data: data0, col: col0 } = iconMap[footerIcons[0]];
    const { icon: Icon1, data: data1, col: col1 } = iconMap[footerIcons[1]];
    const { icon: Icon2, data: data2, col: col2 } = iconMap[footerIcons[2]];

    return(
      <>
        <div className={`${col0} pl-0`}>
          <Icon0 className="icon"/> {data0}
        </div>
        <div className={`${col1} pl-1`}>
          <Icon1 className="icon"/> {data1}
        </div>
        <div className={`${col2} pl-1`}>
          <Icon2 className="icon"/> {data2}
        </div>
      </>
    );
  }

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

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  renderMatchingScore() {
    const {
      showMatchingScore=false,
      profile_score: profileScore
    } = this.props;

    return showMatchingScore && (
      <div className={`matching-score ${getProfileColor(profileScore)}`}>{profileScore}% Profile Match</div>
    );
  }

  renderKeySkillsOrDescription() {
    const {
      description=false,
      key_skills: keySkills,
      recommended_for:recommendedFor='Yoga Instructor',
    } = this.props;

    const returnText = description ? (
      <span>Recommended for <b>{recommendedFor}</b></span>
    ) : (
      <span>{keySkills}</span>
    );

    return returnText;
  };

  render() {
    const {
      name,
      id,
      location,
      verified,
      img_url: profilePic,
      hourly_rate: hourlyRate,
    } = this.props;

    return (
      <div className="row short-profile">
        <div className="col-md-12 px-0">
          <div className="row">
            <div className="col-2 profile-pic pl-0">
              <div className="row">
                <img src={profilePic} className="img-responsive rounded-circle profile-img" width="50px" />
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
              <div className="col-md-12 pl-0 pt-1">
                <div className="col-sm-12 key-skills pl-0">
                  {this.renderKeySkillsOrDescription()}
                </div>
                <div className="row footer">
                  {this.renderFooter()}
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
