
import './App.css';

import TodoTable from './components/TodoTable';
function App() {
  let todos = [
    {rowNumber:1,rowDescription:'feed puppy',rowAssigned:"aman"},
    {rowNumber:2,rowDescription:"Get hair cut",rowAssigned:"vivesh"},
    {rowNumber:3,rowDescription:"water the plant",rowAssigned:"Aditya"},
    {rowNumber:4,rowDescription:"Come FLy with Me",rowAssigned:"Shobit"},
    {rowNumber:5,rowDescription:"Get Well soon Mamu",rowAssigned:"Murli Prasad"}
  ]



  return (
    <div className='mt-5 container'>
      <div className ='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
        
            <TodoTable todos={todos} />
           
          
        </div>
      </div>
   
     
    </div>
  );
}

export default App;
