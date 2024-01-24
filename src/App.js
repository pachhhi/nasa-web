// import styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import component
import Home from './component/Home';
import Aside from './component/Aside';
import Section from './component/Section';
import Siguenos from './component/Siguenos';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Aside/>
      <Section/>
      <Siguenos/>
      <Footer/>
      


    </div>
  );
}

export default App;
