

import './App.css';
import Card from './components/Card';
import Table from './components/Table';
import data from './data/data.json';
function App() {
  return (
    
    <div className='App'>
    <Table/>
    {data.map((data)=>
     < Card  key ={data.id} english={data.english} transcription={data.transcription} translation ={data.russian}/>)}
   
    </div>
  );
}

export default App;
