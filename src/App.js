import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Form from './components/Form';
import Array from './components/ArrayState';

function App() {
  return (
    <div className='App'>
      <Header />
      <Form />
      <Array />
      <GlobalStyle />
    </div>
  );
}

export default App;
