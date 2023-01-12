import Tdl from './Components/tdl.png';
import './App.css';
import { Header } from './Components/Header';
import { ToDoInput } from './Components/ToDoInput';
import { Body } from './Components/Body';
import { Footer } from './Components/Footer';
import Test from './q';


function App() {
  return (
    <>
    <div className="Main_Container">
      <Header/>
      <img className="tdl" src={Tdl} alt='0'/>
      <ToDoInput/>
       <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <Body/>
      <Footer/>
    </div>
    <Test/>
    </>
  );
}

export default App;
