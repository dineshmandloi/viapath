import Heading from '../../Heading/Heading';
import Styles from './brand.module.scss';
import Text from '../../Text/Text';
import Img from '../../Img/Img';
import Button  from '../../Button/Button';

const Brand = () => {
    return (
        <>
            <div className={Styles.topBrand}>
                <div className={Styles.container}>
                    <div className={Styles.brand}>
                        <div className={Styles.brandText}>
                            <Heading headingType="h2" fontSize="xl" color="white" letter="firstLetter" fontFamily="fontBold" headingText="briefly describe the new brand vision"/>
                            <Text textType="p" fontSize="md" fontFamily="fontMedium" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. At tellus at urna condimentum mattis pellentesque id. Suspendisse in est ante in nibh mauris. Egestas fringilla phasellus faucibus scelerisque. Cursus metus aliquam eleifend mi in." />
                        </div>
                        <div className={Styles.brandImg}>
                             <Img srcPath="tablet-launching@2x (1).png"/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Brand;