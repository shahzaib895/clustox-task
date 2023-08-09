import './App.css';
import TryUseEffect from './components/TryUseEffect';
import TryUseReducer from './components/TryUseReducer';
import TryUseRef from './components/TryUseRef';
import TryUseState from './components/TryUseState';


function App() {
  return (
    <div className="App">
      <h1>Use State</h1>
      <TryUseState></TryUseState>
      <br/> <br/> <br/> <br/> <br/>
      <h1>Use Reducer</h1>
      --------------------------------------------
      <TryUseReducer></TryUseReducer>
      <br/> <br/> <br/> <br/>
      <h1>Use Effect</h1>
      --------------------------------------------
      <br/> <br/> <br/> <br/>
      <h1>Use Ref</h1>
      <TryUseEffect></TryUseEffect>
      --------------------------------------------
      <TryUseRef></TryUseRef>
    </div>
  );
}

export default App;
