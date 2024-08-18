import './App.css'
import AppNavbar from "./Components/Navbar/AppNavbar";
import Skillset from "./Components/Skillset/Skillset";
import Education from "./Components/Education/Education";
import WorkHistory from "./Components/WorkHistory/WorkHistory";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Interests from "./Components/Interests/Interests";

function App() {
    return (
        <div className="container p-3">

            <br/><br/>
            <AppNavbar/>
            <hr/><br/>

            <About/>
            <br/><hr/><br/>

            <Skillset/>
            <br/><hr/><br/>

            <Education/>
            <br/><hr/><br/>

            <Projects/>
            <br/><hr/><br/>


            <WorkHistory/>
            <br/><hr/><br/>


            <Interests/>
            <br/><hr/><br/>

            <Footer/>
            <br/><br/>

        </div>
    );
}

export default App;
