import ErrorDisplay from "./ErrorDisplay";
import Footer from "./Footer";
import Header from "./Header";

export default function PageError(){
    return <div className="pageError__container">
                <Header/>
                <ErrorDisplay/>
                <Footer/>
           </div>
            
    
        
}