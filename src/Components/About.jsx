import React, { Component } from 'react'
import portimg from './public/image/IMG_03891.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={portimg} width="180" height="180" alt="abtimg"/>
                    <p>IT Professional and Developer looking for the right employer to offer his services
                    </p>
                
            </section>
        )
    }
}

export default About
