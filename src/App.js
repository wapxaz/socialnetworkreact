import './App.css';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import Profile from './components/Profile.jsx';

function App() {
  return (
    <div className="App grid">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
