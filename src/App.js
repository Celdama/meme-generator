import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Form from './components/Form';
import Ternary from './components/Ternary';

function App() {
  return (
    <div className='App'>
      <Header />
      <Form />
      <Ternary />
      <GlobalStyle />
    </div>
  );
}

export default App;
