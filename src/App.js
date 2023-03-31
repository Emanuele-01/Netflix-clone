import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';
import MyNav from './components/MyNav';

function App() {
  return (
    <div>
      <header>
        <MyNav/>
      </header>
      <main>
      <MyMain/>
      </main>
      <footer>
        <MyFooter/>
      </footer>
    </div>
  );
}

export default App;
