import React, {Component} from 'react';
import '../../../StylesComponent/beforeAuth/landing.css';
import {Button} from 'react-bootstrap';

class Landing extends Component{
    render(){
        return(
            <div className='landing'>
                <Header />
            </div>
        )
    }
}

const Header = () =>{
    return(
        <div className='header'>
            <div className='hero-text'>
               <div className='container'>
                   <div className='header-text'>
                       <h1>Help Fight For Justice In Prison</h1>
                       <p className='text-summary'>250 prisons in nigeria with 50,000 total capacity but <br /> the total  prisoners are more than 75,000 <br /> and 70percent are awaiting trial</p>
                       <div className='call-to-action'>
                           <Button>Report an emergency</Button>
                       </div>
                   </div>
               </div>
            </div>
            <div className='header-bg'>
            </div>
        </div>
    )
}

export default Landing