import './App.css';
import {HomePage} from './Component/Home'
import {PersistentDrawerLeft} from './Component/Navigation'
function App() {
  return (
    <div className="App">
     <h1>this is yt pro app</h1>
     <HomePage/>
     <PersistentDrawerLeft/>
    </div>
  );
}

export default App;
