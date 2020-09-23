import React, { Component } from 'react';
import {Span,WorkScetion,Icon,Line,Part,PartDesc,PartTitle,WorkTitle} from './style.js'
import axios from 'axios';

class Work extends Component  {

    state={
        works : [],
    };

    // if used axios   
    // methos componentDidMountيتم وهنا هستخدم الreqده يعني اني لازم الكمبونت كلها تحمل وبعدها ال  
    componentDidMount() {
        axios.get('js/data.json').then(res => {this.setState({works: res.data.works})} )
    };


    render(){
        const {works} = this.state;

        const worksList = works.map( (workItem)=>{
          return ( <Part first={workItem.id} key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line/>
                    <PartDesc>
                    {workItem.body}
                    </PartDesc>
                    </Part>
          )
        } )

        return (
            <WorkScetion>
            <div class="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {worksList}

            </div>
        </WorkScetion>
        )
    }
}


export default Work;
