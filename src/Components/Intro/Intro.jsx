import React, { useContext } from 'react'
import './Intro.css'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import thumbUp from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesEmoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context/Context'
import Git from '../Fontawesome/Git'
import LinkedIn from '../Fontawesome/LinkedIn'
import vj from '../../img/vj.png'
import { motion } from 'framer-motion'
import SlideTransition from '../../Transition/SlideTransition'
import Snapchat from '../Fontawesome/Snapchat'

const Intro = () => {

    const transition = SlideTransition

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode


    return (
        <div className='intro'>
            <div className="intro-left">
                <div className="intro-name">
                    <span style={{ color: darkMode ? "white" : "" }} >Hey! I'm</span>
                    <span>Vijay</span>
                    <span style={{ color: darkMode ? "white" : "" }}>
                        Step into my portfolio, where the worlds of mechanical engineering and industrial design converge.
                    </span>
                    <span style={{ color: darkMode ? "white" : "" }}>
                        As a fresh graduate skilled in
                        <b className='text' style={{ color: darkMode ? "white" : "", textShadow: darkMode ? "2px 2px 4px rgba(215, 215, 215, 0.5)" : "2px 2px 4px rgba(0, 0, 0, 0.5)" }} > frontend</b> ,
                        <b className='text' style={{ color: darkMode ? "white" : "", textShadow: darkMode ? "2px 2px 4px rgba(215, 215, 215, 0.5)" : "2px 2px 4px rgba(0, 0, 0, 0.5)" }} > backend</b> , and
                        <b className='text' style={{ color: darkMode ? "white" : "", textShadow: darkMode ? "2px 2px 4px rgba(215, 215, 215, 0.5)" : "2px 2px 4px rgba(0, 0, 0, 0.5)" }} > web development</b>,
                    </span>
                    <span style={{ color: darkMode ? "white" : "" }}>
                        I'm venturing into the realm of design.
                    </span>
                    <span style={{ color: darkMode ? "white" : "" }}>
                        Join me in exploring the fusion of technical expertise and creative vision
                    </span>
                </div>

                {/* <Link spy={true} to="Contact" smooth={true} >
                    <motion.div
                        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)" }}
                        whileTap={{ scale: 0.9 }}
                        className='hire-button'
                        style={{
                          border: "2px solid var(--orange)",
                          cursor: "pointer"                          
                        }}
                    >
                        Hire Me
                    </motion.div>
                </Link>                 */}

        

                <div className="intro-icons">
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/Vijaykumar23112000" className='i'>{Git}</a>
                    <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/vijayakumarJ2311/" className='i'>{LinkedIn}</a>
                    <a target='_blank' rel='noopener noreferrer' href="https://www.snapchat.com/add/jon23snow?share_id=KanR7g9YX9Q&locale=en-IN" className='i'>{Snapchat}</a>
                </div>
            </div>
            <div className="intro-right">
                <img src={vector1} alt="vetor 1" />
                <img src={vector2} alt="vetor 2" />
                <img src={vj} alt="boy" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesEmoji}
                    alt="glassesEmoji"
                />
                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    style={{ top: "-4%", left: "68%" }}
                    className='floating-div'
                >
                    <FloatingDiv img={crown} txt1="Java" txt2="Developer" />
                </motion.div>
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    style={{ top: "18.4rem", left: "1.5rem" }}
                    className='floating-div'
                >
                    <FloatingDiv img={thumbUp} txt1="Web" txt2="Developer" />
                </motion.div>
                {/* blurred divs */}
                <div
                    className='blur'
                    style={{
                        backgroundColor: "rgb(238, 210, 255)"
                    }}
                >
                </div>
                <div
                    className='blur'
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                        filter: "blur(50px)"
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default Intro
