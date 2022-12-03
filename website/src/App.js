import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Token from './pages/token';
import Nft from './pages/nft';
import Us from './pages/us';
import Shop from './pages/shop';
import Navbar from './pages/navbar';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home/>}/>
		<Route path='/token' element={<Token/>} />
		<Route path='/nft' element={<Nft/>} />
		<Route path='/us' element={<Us/>} />
		<Route path='/shop' element={<Shop/>} />
	</Routes>
	</Router>
);}
export default App;