import Heading from '../../Heading/Heading';
import Styles from './viapath.module.scss';
import Button from '../../Button/Button';
import Img from '../../Img/Img';

const Viapath = () => {
    return (
        <>
            <div className={Styles.topViapath}>
                <div className={Styles.container}>

                    <div className={Styles.viapath}>
                        <div className={Styles.viapathText}>
                            <Heading headingType="h2" fontSize="xl" color="white" letter="firstLetter" fontFamily="fontBold" headingText="Learn more about how ViaPath is transforming corrections" />
                            <Button btnText="contact" color="white"/>
                        </div>
                        <div className={Styles.viapathImg}>
                            <Img srcPath="Group 91.png" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Viapath;