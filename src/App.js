import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Table from './components/Table';
import ToggleCard from './components/ToggleCard';
import Header from './components/Header';
import Page404 from './components/Page404';

function App() {
  return (
    <Router>
        <div className='App'>
            <Header></Header>   
            <Routes>
                <Route path = '/words' element = {<Table/>}></Route>
                <Route path = '/game' element = {<ToggleCard/>}></Route>
                <Route path = '/' element = {<Table/>}></Route>
                <Route path ='*' element = {<Page404/>}></Route>
           </Routes>
        </div>
    </Router>
    
  );
}

export default App;
// {data.map((data)=>
//   < Card  key ={data.id} english={data.english} transcription={data.transcription} translation ={data.russian}/>)}
