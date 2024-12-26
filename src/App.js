import './index.css'
import Navbar from './Components/Navbar';
import Manager from './Components/Manager';

function App() {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(67,232,7,0.3),rgba(0,255,36,0.1))]"></div>


      <Navbar />
      <div className='flex justify-center py-6'>
        <Manager />
      </div>


    </>
  );
}

export default App;
