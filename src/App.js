import './App.css';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';

function App() {
  return (
    <div className="App grid">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Dialogs />
       </div>
      {/*<Profile />*/}     
    </div>
  );
}

export default App;
