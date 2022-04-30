

import './App.css';
import Card from './components/Card';
import Table from './components/Table';
import data from './data/data.json';
function App() {
  return (
    
    <div className='App'>
    <Table/>
    {data.map((data)=>
     < Card english={data.english} transcription={data.transcription}/>)}
   
    </div>
  );
}

export default App;
