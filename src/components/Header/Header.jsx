import React from "react";
import s from './Header.module.css'

const Header = (props) => {
    
    return (
        <div>
            <img src="https://w7.pngwing.com/pngs/335/319/png-transparent-computer-icons-orb-orb-miscellaneous-glass-logo-thumbnail.png"  className={s.img}/>
            <span className={s.span}>ORBS SOCIAL NETWORK</span>
        </div>
    )
}

export default Header