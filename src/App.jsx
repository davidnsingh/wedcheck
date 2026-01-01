import './App.css';

function App() {
  return (
    <div className='totalscreen'>
      <div className='navbar'>
        <div className='nav-left'>Los Angeles, CA</div>
        <div className='nav-center'>Dawinder & Avneet</div>
        <div className='nav-right'>10.10.26</div>
      </div>
      <div className='main'>
        <div className='main-left' style={{ backgroundImage: "url(/pic0.jpg)" }} />
        <div className='main-right' style={{ backgroundImage: "url(/pic1.jpg)" }} />
      </div>
      <div className='footer'>Details coming soon...</div>
    </div>
  );
}

export default App;
