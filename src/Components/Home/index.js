import React, { Component } from 'react'

import {HomeSection,HomeBtn,HomeDesc,HomeInfo,HomeInformation,HomeTitle,Span} from './style.js';

const Home =()=>  {

        return (
            
            <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Kareem Hassan</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn className="home-btn">Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
        )
}

export default Home;
