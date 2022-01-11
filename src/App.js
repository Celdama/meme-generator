import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Form from './components/Form';
import WindowTracker from './components/WindowTracker';

function App() {
  return (
    <div className='App'>
      <Header />
      <Form />
      <WindowTracker />
      <GlobalStyle />
    </div>
  );
}

export default App;
