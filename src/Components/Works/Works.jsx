import React, { useContext } from 'react'
import './works.css'
// import UpWork from '../../img/Upwork.png'
// import Fiverr from '../../img/fiverr.png'
// import Amazon from '../../img/amazon.png'
// import Shopify from '../../img/Shopify.png'
// import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context/Context'
import SlideTransition from '../../Transition/SlideTransition'
import {motion} from 'framer-motion'
import Music from '../../img/music-solid.svg'
import Football from '../../img/futbol-solid.svg'
import TT from '../../img/table-tennis-paddle-ball-solid.svg'
import Compass from '../../img/compass-solid.svg'
import Coffee from '../../img/mug-saucer-solid.svg'


const Works = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    let transition = SlideTransition
    transition = {...transition , duration:3.5}

    return (
        <div className='works' id='About'>
            <div className='services-left'>
                <span style={{color:darkMode ? "white" : ""}} >Vijayakumar J</span>
                <span>A Lil Bit About me</span>
                <span style={{color:darkMode ? "white" : ""}}>
                    Hey there! I'm a mechanical engineering graduate with a passion 
                    <br />
                    for technology and innovation. Despite my background in mechanical engineering, 
                    <br />
                    I've always been drawn to the world of IT and software development.
                    <br />
                    <br />
                    Transitioning into the IT domain is not just a career move for me,
                    <br /> 
                    it's a journey towards fulfilling my Dream
                    <br />
                    <br />
                    Off the clock, I'm a globe-trotter, football enthusiast, 
                    <br />
                    and table tennis aficionado. 
                    <br />
                    When not on the move, I'm tuned in to a diverse playlist, 
                    <br />
                    finding solace in the rhythm of music
                </span>
                {/* Blur effect */}
                <div
                    className='blur submit-blur1'
                    style={{
                        background: "#ABF1FF94",
                        filter: "blur(40px)"
                    }}
                >
                </div>
            </div>
            <div className="works-right">
                <motion.div
                    initial={{rotate:45}}
                    whileInView={{rotate:0}}
                    viewport={{margin:"-40px"}}
                    transition={transition}
                    className="works-mainCircle"
                    style={{
                        background:darkMode?"hsl(219, 30%, 17%)":""
                    }}
                >
                    <div className="works-secCircle">
                        {/* <img src={UpWork} alt="upwork" /> */}
                        <img src={Coffee} alt="coffee" />
                    </div>
                    <div className="works-secCircle">
                        {/* <img src={Fiverr} alt="Fiverr" /> */}
                        <img src={Football} alt="Football" />
                    </div>
                    <div className="works-secCircle">
                        {/* <img src={Amazon} alt="Amazon" /> */}
                        <img src={TT} alt="TT" />
                    </div>
                    <div className="works-secCircle">
                        {/* <img src={Shopify} alt="shopify" /> */}
                        <img src={Compass} alt="Compass" />
                    </div>
                    <div className="works-secCircle">
                        {/* <img src={Facebook} alt="Facebook" /> */}
                        <img src={Music} alt="Music" />
                    </div>
                </motion.div>

                <div className="works-backCircle blueCircle"></div>
                <div className="works-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works
