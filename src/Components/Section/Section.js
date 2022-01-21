import About from './About/About';
import Brand from './Brand/Brand';
import Styles  from './section.module.scss';
import Services from './Services/Services';
import Viapath from './Viapath/Viapath';


const Section = ()=>{
    return(
        <>
            <section>
                    <Brand/>
                    <Services/>
                    <About/>
                    <Viapath/>
            </section>
        </>
    )
}
export default Section;