import styled from 'styled-components';

export const Creative =styled.div`
    height: 500px;
    background-image:url('../images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media (max-width:991px) {
        height: auto
    }
`;

export const AboutInfo = styled.div`
     padding-top: 100px;
    width: 44%;
    float: right;
    @media (max-width:991px) {
        width: 100%;
        padding-top: 10px;
        float: none;
    }
`;

export const InfoTitle = styled.h2`
    font-weight: bold;
    font-size: 50px;
    padding: 0;
    margin: 0;
`;

export const Span = styled.span`
    font-weight: normal
`;


export const InfoDir = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    padding: 0;
    margin: 0;
    @media (max-width:991px) {
        font-size: 30px;
    }
`;

export const InfoDesc = styled.p`
       color: #000;
    margin-bottom: 15px;
    line-height: 1.8
`;


export const Anchor = styled.a`
  text-decoration: none
`;





