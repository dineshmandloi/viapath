import Heading from '../../Heading/Heading';
import Styles from './about.module.scss';
import Text from '../../Text/Text';
import Button  from '../../Button/Button';
import Img from '../../Img/Img';

const About = () => {
    return (
        <>
            <div className={Styles.topAbout}>
                    <div className={Styles.about}>
                    <div className={Styles.aboutImg}>
                        <Img srcPath="back-to-work-close-uncropped@2x.png"/>
                    </div>
                        <div className={Styles.aboutText}>
                            <Heading headingType="h2" fontSize="xl" color="black" letter="firstLetter" fontFamily="fontBold" headingText="A headline about our commitment
                            to rehabilitation"/>
                            <Text textType="p" fontSize="xmd" color="black" fontFamily="fontMedium"  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. At tellus at urna condimentum mattis pellentesque id. Suspendisse in est ante in nibh mauris. Egestas fringilla phasellus faucibus scelerisque. Cursus metus aliquam eleifend mi in. Dolor magna eget est lorem. Arcu dui vivamus arcu felis bibendum ut tristique et egestas." />
                            <Button btnText="About Viapath" color="green"/>
                        </div>
                      

                </div>
            </div>
        </>
    )
}

export default About;