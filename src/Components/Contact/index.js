import React, { Component } from 'react'
import {Span,ContactSection,DropTitle,Form,FormInput,Input,InputEmail,InputExp,InputSubmit,InputText,TextArea} from './style.js';
import Footer from './../Footer'

const Contact =()=>  {
        return (

            <React.Fragment>
            <ContactSection>
            <div class="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputExp type="text" class="sub" placeholder="Your Subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </ContactSection>
        <Footer/>
        </React.Fragment>
        )
    
}


export default  Contact;
