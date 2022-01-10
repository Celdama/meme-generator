import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Form from './components/Form';
import Counter from './components/Counter';

function App() {
  return (
    <div className='App'>
      <Header />
      <Form />
      <Counter />
      <GlobalStyle />
    </div>
  );
}

export default App;
