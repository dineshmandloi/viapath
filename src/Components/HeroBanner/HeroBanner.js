import Heading from '../Heading/Heading';
import Styles  from './herobanner.module.scss';
import Text from '../Text/Text';
import  Button  from '../Button/Button';

const HeroBanner = ()=>{
    return(
        <>
           <div className={Styles.hero_banner}>
           <div className={Styles.container}>
            <div className={Styles.banner}>
                <div className={Styles.heroText}>
                    <Heading headingType="h1" fontSize="xxl" color="black" fontFamily="fontBold" headingText="GTL is now
                    ViaPath" />
                    <Text textType="p" fontSize="lg" fontFamily="fontLight"  text="Our focus is moving forward — with communication and management technologies that connect people with the support and resources needed to improve the here and now and realize the potential of tomorrow"/>
                    <Button btnText="watch our video" endIcon="fa fa-play" color="green"/>
                </div>
            </div>
            </div>
           </div>
        </>
    )
}

export default HeroBanner;