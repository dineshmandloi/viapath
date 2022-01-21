import Button from "../Button/Button";
import React from "react";
import Styles from './header.module.scss';
import Img from "../Img/Img";
import Icon from "../Icon/Icon";
import Links from "../Links/Links";

const Header = () => {
    return (
        <>
            <header>
                <div className={Styles.header}>
                    <div className={Styles.logo}>
                       <Links> <Img srcPath="logo.png" /></Links>
                    </div>
                    <div className={Styles.humburger}>
                        <Icon color="white" fontSize="xlg" iconName="fa fa-bars" />
                    </div>
                    <div className={Styles.menu}>

                        <ul>
                            {
                                menuItem.map((value) => {
                                    return (
                                        <>
                                            <li> <Links fontFamily="fontBold" color="white" textTransform="upper" linkText={value.menu} /></li>
                                        </>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
                <div className={Styles.rightMenu}>
                    <ul>
                        <li><Links fontFamily="fontBold" color="white" textTransform="upper" linkText="about" /></li>
                        <li>
                            <Button btnText="contact" color="white"/>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}


export default Header;

const menuItem = [
    {
        menu: 'Communications'
    },
    {
        menu: 'Rehabilitation'
    }, {
        menu: 'Facilities'
    }, {
        menu: 'payments'
    },
]
