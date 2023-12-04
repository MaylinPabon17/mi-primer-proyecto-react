import React, { useState } from 'react';

import './App.css';
import Home from './Home';
import { useEffect } from 'react';

function Navbar() {
	const session = localStorage.getItem('session');
	const [userSession, setUserSession] = useState(false);

	useEffect(() => {
		if (session !== null) {
			setUserSession(true);
		}
	}, [session]);

	return (
		<div className="navbar">
			<h2 className="logo">Logo</h2>
			<div className="derecha">
				<a href="Home">Home</a>
				{userSession && <a href="Login">Cerrar Sesion</a>}
				{!userSession && (
					<>
						<a href="Login">Login</a>
						<a href="">Register</a>
					</>
				)}
			</div>
		</div>
	);
}

export default Navbar;
