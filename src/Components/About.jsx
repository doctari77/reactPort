import React, { Component } from 'react'
import portimg from './public/image/IMG_03891.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={portimg} width="180" height="180" alt="abtimg"/>
                    <p>IT professional, strategic leader, developer and accomplished team builder, motivates and leads others while successfully driving towards the end result of desired deliverables. Able to understand, balance, and implement the technological and business needs of the organization. 
                    </p>
                
            </section>
        )
    }
}

export default About
