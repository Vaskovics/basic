import { useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import HelloWorld from './components/HelloWorld';
import ItemsList from './components/ItemsList';

const items = ['apple', 'pineapple', 'bananas', 'pear', 'plum', 'mango'];

function App() {
  const [list, setList] = useState(items);
  return (
    <div className="App">
      <HelloWorld />

      <FormComponent />

      <ItemsList list={list}/>
    </div>
  );
}

export default App;
