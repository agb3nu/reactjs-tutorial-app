import './App.css';
import  Navbar from './Navbar';
import  Home from './Home';

function App() {

  const title = "Agbenu demo";
  const num = 60;
  const pple = {name: 'Eli' , age: 8 };
  const link = "http://www.agbenu.com";


  return (
    <div className="App">
      <Navbar />
      <div className="content">

        <Home />
        <h3>{ title }</h3>
        <p>Liked { num } times </p>
        <hr/>
        <h3>{ "Static string" }</h3>
        <p> { Math.random() * 4 } </p>
        <p> { [ 4, 8, 12, 16 , 20 ] } </p>

        <a href={link}>Agbenu page</a>

        <hr/>
        
      </div>
    </div>
  );
}

export default App;
