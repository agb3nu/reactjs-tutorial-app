const Navbar = () => {
	return (
		<nav className="navbar">
			<h2>agbenu navbar demo</h2>
				<div className="links">
					<a href="/">Home</a>
					<a href="/create" style={ {
						color: "white",
						backgroundColor: "#f1356d",
						borderRadius: "8px"
					} } >New post</a>	
				</div>
		</nav>
	 );
}

export default Navbar;