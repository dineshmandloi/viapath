import Button from '../Button//Button';
import Styles from './footer.module.scss';
import Text from '../Text/Text';
import Links from '../Links/Links';
import Img from '../Img/Img';
import Icon from '../Icon/Icon';

const Footer = () => {
    return (
        <>
        <footer>
            <div className={Styles.topFooter}>
                <div className={Styles.container}>
                    <div className={Styles.footer}>

                        <div className={Styles.footerText}>
                            <ul>
                                <li><Links><Img srcPath="logo.png" /></Links></li>
                                <li><Links><Text textType="address" text="123 Main Street San Diego, CA 0000"/></Links></li>
                                <li><Links><Text textType="address" textNumber={+11234567890} /></Links></li>
                                <li><Links><Icon color="white" fontSize="xlg" iconName="fa fa-linkedin" /><Icon color="white" fontSize="xlg" iconName="fa fa-twitter" /><Icon color="white" fontSize="xlg" iconName="fa fa-facebook-f" /></Links></li>

                            </ul>

                        </div>
                        {
                            footerItem.map((listValue) => {
                                return (
                                    <>
                                        <div className={Styles.footerText}>
                                            <ul>
                                                <li><Links fontFamily="fontBold" color="white" textTransform="upper" linkText={listValue.list1}></Links></li>
                                                <li><Links fontFamily="fontBold" color="white" textTransform="upper" linkText={listValue.list2}></Links></li>
                                                <li><Links fontFamily="fontBold" color="white" textTransform="upper" linkText={listValue.list3}></Links></li>
                                                <li><Links fontFamily="fontBold" color="white" textTransform="upper" linkText={listValue.list4}></Links></li>
                                            </ul>
                                        </div>
                                    </>
                                )
                            })
                        }

                        <div className={Styles.footerText}>
                            <div className={Styles.footItem}>
                                <Text textType="p" fontSize="xmd" color="white" fontFamily="fontMedium" text="Looking to connect with your loved one on ConnectNetwork?" />
                            </div>
                            <Button btnText="Connect now" color="wg"/>
                        </div>

                    </div>
                </div>
            </div>
            </footer>
        </>
    )
}

export default Footer;

const footerItem = [
    {
        list1: 'communications',
        list2: 'Rehabilitation',
        list3: 'Facilities',
        list4: 'Payment',
    },
    {
        list1: 'About us',
        list2: 'Pressroom',
        list3: 'Contact us',
        list4: 'Privacy policy',
    },
]