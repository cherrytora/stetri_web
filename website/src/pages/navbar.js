import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
	// const { ethereum } = window;
	// const [isConnected, setConnected] = useState(false);
	// const [isLogged, setLogged] = useState(false);
	// const [accounts, setAccounts] = useState();
    
	// const connectWallet = async () => {
	// 	// to detect whether the wallet is installed
	// 	if (isConnected === false){
	// 	  if (window.ethereum) {
	// 		const accounts = await window.ethereum.request({ 
	// 		  method: 'eth_requestAccounts',
	// 		});
	// 		setAccounts(accounts); 
	// 		setConnected(true);
	// 		setLogged(true);
	// 	  }
	// 	//   alert("Successfully Logged in!")
	// 	}
	// 	console.log(isLogged);
	//   }
  return (
    <>
      <ul class="nav justify-content-center" id="page-top">
		<li class="nav-item fs-4">
			<a class="nav-link active" aria-current="page" href="/">Home</a>
		</li>
		<li class="nav-item fs-4">
			<a class="nav-link active" aria-current="page" href="/token">Stetri Coin</a>
		</li>
		<li class="nav-item fs-4">
          	<a class="nav-link" href="/nft">Stetri NFT</a>
        </li>
        <li class="nav-item fs-4">
          	<a class="nav-link" href="/shop">NFT Shop</a>
        </li>
		<li class="nav-item fs-4">
			<a class="nav-link" href="/us">About Us</a>
		</li>
		
			{/* {!accounts &&
			<li class="nav-item fs-5 align-self-center">
			<Button className='btn-rounded connect-button' onClick={() => connectWallet()}>
			Connect Wallet
			</Button></li>}
			{accounts &&
			<li class="nav-item fs-9 align-self-end">
				<p>{accounts}</p></li>
			} */}
		
	</ul>
    </>
  );
};
  
export default Navbar;