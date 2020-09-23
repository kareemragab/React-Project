import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {NavbarSection,LogoText,Logo,Anchor,ListItem,UlList,RefLink} from './style.js';
import styled from 'styled-components';


const Navbar =()=>  {


 
    return (

            <NavbarSection>

            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem ><RefLink to="/">Home</RefLink></ListItem>
                    <ListItem ><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem ><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem ><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem ><Anchor href="#">About</Anchor></ListItem>
                    <ListItem ><RefLink to="/contact">Contact</RefLink></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
        
       
        )
    
}


export default Navbar;
