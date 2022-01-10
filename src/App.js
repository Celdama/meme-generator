import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div className='App'>
      <Header />
      <Form />
      <GlobalStyle />
    </div>
  );
}

export default App;
