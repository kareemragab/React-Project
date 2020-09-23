import React, { Component } from 'react'
import  {Icon,P,PSpan,PSpan2,Social,SocialMedia} from './style.js';
import axios from 'axios';

class SocailMedia extends Component {

    state={
        social:[]
      }

      componentDidMount(){
        axios.get('js/data.json').then(res => {this.setState({social: res.data.social})} )
      }

    render(){
        const {social}=this.state;

        const socialList = social.map( (socialItem)=>{
            return (
                <Social item={socialItem.id} key={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <P>
                    <PSpan>{socialItem.title}</PSpan>
                    <PSpan2>{socialItem.body}</PSpan2>
                </P>
            </Social>
            )
        } )


        return (
            <SocialMedia>
            
             {socialList}
            </SocialMedia>
        )
    }
    }

export default SocailMedia;
