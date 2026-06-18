import logo from './logo.svg';
import PageOne from './pages/page-one/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <PageOne />
      </main>
    </div>
  );
}

export default App;
