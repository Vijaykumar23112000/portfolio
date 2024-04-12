import React, { useContext } from 'react'
import './portfolio.css'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { themeContext } from '../../Context/Context'
import mysql from '../../SliderComponents/mysql.png'
import mongodb from '../../SliderComponents/mongodb.png'
import port from '../../SliderComponents/port.png'
import jwt from '../../SliderComponents/Spring Security.png'

const Portfolio = () => {
    
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className='portfolio' id='Portfolio'>
            {/* Heading */}
            <span style={{color:darkMode ? "white" : ""}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper 
                spaceBetween={0}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={mysql} alt="mysql" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mongodb} alt="mongo" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={port} alt="portfolio" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={jwt} alt="Jwts" />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Portfolio
