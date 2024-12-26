import './index.css'
import Navbar from './Components/Navbar';
import Manager from './Components/Manager';
import Footer from './Components/Footer';

function App() {
  return (
    <>
     


      <Navbar />
      <div className='flex justify-center relative ' style={{minHeight: '82%'}}>
        <Manager />
      </div>
      <Footer />


    </>
  );
}

export default App;
