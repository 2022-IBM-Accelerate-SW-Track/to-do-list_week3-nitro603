import React, { Component } from 'react';
import "./About.css";
import Image from '../assets/profile_pic_cristian.JPG';
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            alt="Profile Pic" 
            src = {Image}
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Cristian Tavara</div>
          <div className="brief_description">
            <h6>I'm a Computer Science major at Brooklyn College</h6>
            <p>I love gaining new experiences, wheter it be learning about web development or learning a new submission from side control.
               A fun fact about me is I practice Brazilian Jiu Jitsu 🤠</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}