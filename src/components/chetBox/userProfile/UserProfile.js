import React, { Component } from "react";
import "./userProfile.css";
import img from '../../../Images/Anurag.jpeg'
export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={img} alt="img" />
          </div>
          <h5>Anurag Prajapati</h5>
          <p>follow :- anuragprajapatianu</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
          Managing consistency across applications and teams is always a challenge, especially in a large firm. Be it UX, design, code-styling, build tools, the list goes on. This is what largely constitutes the Developer Experience.
          </div>
        </div>
      </div>
    );
  }
}
