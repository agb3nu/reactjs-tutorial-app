import { useState } from 'react';

const Home = () => {

	const handleClick = () =>{
		console.log('click demo');
	}

	const handleClickAgain = (name) => {
		console.log('hello ' + name );
	}

	const handleClickAgainWithEvent = (name,e) => {
		console.log('hello ' + name , e.target);
	}

	const handleClickWithEvent = (e) =>{
		console.log('click demo',e);
	}


	const handleClickToShowHooks= (e) =>{
		console.log('Calvin');
		setName('Calvin');
		setAge(90);
	}


	const [ name , setName ] = useState("John");
	const [ age , setAge ] = useState(4);

	return (
			<div className="home">
				<h2>home page</h2>
				<button onClick={handleClick}>Click me</button>
				<hr/>

				<button onClick={()=>{
					handleClickAgain("Tony")
				}}>Click me again</button>
				<hr/>

				<button onClick={(e)=>{
					handleClickAgainWithEvent("Tony",e)
				}}>Click me again with event</button>
				<hr/>

				<button onClick={handleClickWithEvent}>Click with event</button>
			
				<hr/>

				<button onClick={handleClickToShowHooks}>Click to show hooks</button>

				<p>Details are reactive: {name } is { age } </p>
			</div>
		);
}


export default Home;