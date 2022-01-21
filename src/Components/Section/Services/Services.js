import Heading from '../../Heading/Heading';
import Styles from './services.module.scss';
import Text from '../../Text/Text';
import Links from '../../Links/Links';
import Img from '../../Img/Img';
import { Children } from 'react';

const Services = () => {
    return (
        <>
        <div>
        </div>
            <div className={Styles.topServices}>
                <div className={Styles.service_heading}>
                    <Heading headingType="h2" fontSize="xl" color="black" letter="firstLetter" fontFamily="fontBold" headingText="This is a headline about our line of industry solutions" />
                    <Img srcPath="Group 92.png"/>
                </div>
                <div className={Styles.container}>
                    <div className={Styles.services}>
                        {
                            serviceItem.map((serviceValue) => {
                                return (
                                    <>
                                        <div className={Styles.col_6}>
                                            <div className={Styles.servicesText}>
                                               
                                                <Img srcPath={serviceValue.imgsrc}/>
                                                <Heading headingType="h2" fontSize="lg" color="black" textTransform="upper" fontFamily="fontBold" headingText={serviceValue.heading} />
                                                <Text textType="p" color="blackLight" fontSize="xmd" textTransform="lower" fontFamily="fontMedium"  text={serviceValue.para} />
                                                <Links linkText={serviceValue.links} fontFamily="fontBold" color="darkGreen" textTransform="upper"/>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default Services;

const serviceItem = [
    {
        imgsrc: "Group14.png",
        heading: 'Communications',
        para: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        links: 'learn more'
    },
    {
        imgsrc: "Group169.png",
        heading: 'Rehabilitation',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        links: 'learn more'
    },
    {
        imgsrc: "Group19.png",
        heading: 'Facilities & Agencies',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        links: 'learn more'
    },
    {
        imgsrc: "Group36.png",
        heading: 'Payment',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        links: 'learn more'
    },

]