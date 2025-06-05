import User from './user.jsx';
function App(){

  const detail={name:"Harish Kumar",age:18,gender:"male",designation:"Software developer"};
  return (
  <div>
    <h1>Hello</h1>
    <User {...detail}/>
  </div>
  
);
}

export default App;