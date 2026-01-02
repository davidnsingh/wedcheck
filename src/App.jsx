import './App.css';
import PicOne from './assets/pic1.avif';
import PicTwo from './assets/pic2.avif';

function App() {
  return (
    <div className='totalscreen'>
      <div className='navbar'>
        <div className='nav-center'>Dawinder & Avneet</div>
        <div className='nav-row'>
          <div className='nav-left'>Los Angeles, CA</div>
          <div className='nav-right'>10.10.26</div>
        </div>
      </div>
      <div className='main'>
        <div
          className='main-left'
          style={{ backgroundImage: `url(${PicOne})` }}
        />
        <div
          className='main-right'
          style={{ backgroundImage: `url(${PicTwo})` }}
        />
      </div>
      <div className='footer'>Details coming soon...</div>
    </div>
  );
}

export default App;
