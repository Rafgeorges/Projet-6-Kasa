import Collapse from "./Collapse";
import Footer from "./Footer";
import Header from "./Header";
import aboutBanner from '../assets/images/fond2.png'

export default function PageAbout(){
    return (
        <>
        <Header/>
        <div className="about--main">
            <div className="about--banner">
                <img src={aboutBanner} alt="banner_picture"/>
            </div>
            <div className="about--collapse--container">
                <Collapse
                    title='salut'
                    />
                <Collapse
                    title='salut'
                    />
                <Collapse
                title='salut'
                />
                <Collapse
                    title='salut'
                /> 
            </div>
        </div>
        <Footer/>
        </>
    )
}