import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom'

let myDate = new Date();
let hours = myDate.getHours();
let greet;

if (hours < 12) greet = "Morning";
else if (hours >= 12 && hours <= 17) greet = "Afternoon";
else if (hours >= 17 && hours <= 24) greet = "Evening";

const TeamMember = (props) => {
  return (
    <div className="team-col-3">
        <div className="member-img">
          <img src="" alt="" />
        </div>
        <div className="member-info">
          <h3>William Chandler</h3>
          <p>Web Developer</p>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium sunt similique suscipit pariatur eius ratione aliquam fugit rerum quis nobis!</p>
    </div>
  );
};

export default TeamMember;