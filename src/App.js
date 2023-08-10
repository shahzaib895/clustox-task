import { createContext, useState } from 'react';
import './App.css';
import TryUseEffect from './components/TryUseEffect';
import TryUseLayout from './components/TryUseLayout';
import TryUseReducer from './components/TryUseReducer';
import TryUseRef from './components/TryUseRef';
import TryUseState from './components/TryUseState';

export const AppContext = createContext(null) 
function App() {

  const [value, setVal] = useState('')

  return (
    <AppContext.Provider value={{value,setVal}}>
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
      --------------------------------------------
      <TryUseLayout></TryUseLayout>
    </div>
    </AppContext.Provider>
  );
}

export default App;
