import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Form from './components/Form';
import API from './components/APICalls';

function App() {
  return (
    <div className='App'>
      <Header />
      <Form />
      <API />
      <GlobalStyle />
    </div>
  );
}

export default App;
