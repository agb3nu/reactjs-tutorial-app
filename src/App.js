import './App.css';

function App() {

  const title = "Agbenu demo";
  const num = 60;
  const pple = {name: 'Eli' , age: 8 }

  return (
    <div className="App">
      <h3>{ title }</h3>
      <p>Liked { num } times </p>
      <hr/>
      <h3>{ "Static string" }</h3>
      <p> { Math.random() * 4 } </p>
      <p> { [ 4, 8, 12, 16 , 20 ] } </p>
    </div>
  );
}

export default App;
