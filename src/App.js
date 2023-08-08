import './App.css';


function App() {
  let companies = require('./utils/Companies.json');
  let guests = require('./utils/Guests.json');

  console.log('companies: ', JSON.stringify(companies));
  console.log('guests: ', JSON.stringify(guests));
  
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
