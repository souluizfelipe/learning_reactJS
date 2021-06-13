import React, {useState} from 'react';
import Tweet from './tweet';


function App() {

  const [users, setUsers] = useState([
    {name: 'Luiz Felipe', message: 'My fist Fake Tweet o/'},
    {name: 'Thaina', message: 'Man, i Love fake tweeting'},
    {name: 'Amanda', message: 'Fake Tweet is the best'},
  ]);
  
  return (
    <div className='App'> 
      {users.map(user =>( 
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  )
}

export default App;

// const[isRed, setRed] = useState(false);
// const[count, setCount] = useState(0);

// const Increment = () => {
//   setCount(count + 1);
//   setRed(!isRed);
// }

{/* <h1 className={isRed ? 'red' : ''}>Change my Color</h1>
<button onClick={Increment}>Increment</button>
<h1>{count}</h1> */}