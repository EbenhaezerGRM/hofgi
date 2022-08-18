import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingpage.css";
import Intro from './components/Intro';
import Chara from './components/Chara';
import Weapon from './components/Weapon';

function App() {
  return (
    <div>
      {/* intro */}
      <div className="MyBg">
      <NavigationBar />
      <Intro />
      </div>
      {/* end of intro */}
      <div className='Chara'> 
      <Chara /> 
      </div>
      <div className='Weapon'>
      <Weapon />
      </div>
    </div>
  );
}

export default App;
