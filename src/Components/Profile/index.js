import React, { Component } from 'react'
import './style.css'; 
const Profile =()=>  {
        return (
            <div class="profile_skills">
            <div class="container">
                <div class="profile">
                    <h2 class="profile-title" style={{marginRight:300}}><span>My </span>Profile</h2>
                    <ul class="profile-list">
                        <li class="profile-item" style={{marginRight:300}}>
                            <span>Name</span>
                            Kareem Hassan
                        </li>
                        <li class="profile-item" style={{marginRight:325}}>
                            <span>Birthday</span>
                            1/7/1996
                        </li>
                        <li class="profile-item" style={{marginRight:330}}>
                            <span>Address</span>
                            Nasr City
                        </li>
                        <li class="profile-item" style={{marginRight:315}}>
                            <span>Phone</span>
                            01021465625
                        </li>
                        <li class="profile-item" style={{marginRight:210}}>
                            <span>Email</span>kareemragab334@gmail.com
                            
                        </li>
                        <li class="profile-item" style={{marginRight:300}}>
                            <span>Website</span>
                            <span class="web">www.google.com</span>
                        </li>
                    </ul>
                </div>
                
                <div class="skills">
                    <h2 class="skills-title">Some <span>skills</span></h2>
                    <p class="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    <div class="bar">
                        <span class="title">Bootstrap</span>
                        <span class="perc">100%</span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">CSS3</span>
                        <span class="perc">90%</span>
                        <div class="parent">
                            <span class="sp2"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">Photoshop</span>
                        <span class="perc">80%</span>
                        <div class="parent">
                            <span class="sp3"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        )
    
}


export default Profile;
