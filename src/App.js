import './index.css'
import Navbar from './Components/Navbar';
import Manager from './Components/Manager';
import Footer from './Components/Footer';

function App() {
  return (
    <>
     


      <Navbar />
      <div className='flex justify-center relative '>
        <Manager />
      </div>
      <Footer />


    </>
  );
}

export default App;
