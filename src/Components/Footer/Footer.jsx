import React from 'react'
import './footer.css'
import Wave from '../../img/wave.png'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Snapchat from '@iconscout/react-unicons/icons/uil-snapchat-alt'


const Footer = () => {
    return (

        <div className='footer'>
            <img src={Wave} alt="wave" />
            <div className="footer-content">
                {/* <span>mathew5359302@gmail.com</span> */}
                <div className="footer-icons">
                    <a href="https://github.com/Vijaykumar23112000" target='_blank' rel='noopener noreferrer' ><Github color={"white"} size={"3rem"}/></a>
                    <a href="https://www.linkedin.com/in/vijayakumarJ2311/" target='_blank' rel='noopener noreferrer' ><LinkedIn color={"white"} size={"3rem"}/></a>
                    <a href="https://www.snapchat.com/add/jon23snow?share_id=KanR7g9YX9Q&locale=en-IN" target='_blank' rel='noopener noreferrer' ><Snapchat color={"white"} size={"3rem"}/></a>
                </div>
            </div>


        </div>
    )
}

export default Footer
