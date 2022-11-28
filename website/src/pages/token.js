// import React from "react";
import { ethers } from "ethers";
import STTcoin from "../contracts/StetriTest.json";
import contract_address from "../contracts/contract-address.json";

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

// import Collapse from 'react-bootstrap/Collapse';
// import { Link } from "react-router-dom";


const Token = () => {
	
	const [isConnected, setConnected] = useState(false);
	const [isLogged, setLogged] = useState(false);
	const [accounts, setAccounts] = useState();
    
	const connectWallet = async () => {
		// to detect whether the wallet is installed
		if (isConnected === false){
		  if (window.ethereum) {
			const accounts = await window.ethereum.request({ 
			  method: 'eth_requestAccounts',
			});
			setAccounts(accounts); 
			setConnected(true);
			setLogged(true);
		  }
		}
		console.log(isLogged);
	  }

	const node = contract_address.url
	const provider = new ethers.providers.JsonRpcBatchProvider(node)
	const private_key = contract_address.private_key
	const wallet = new ethers.Wallet(private_key, provider)
	const tokenaddress = contract_address.StetriTest
	const sstani = STTcoin.abi
	const contract = new ethers.Contract(tokenaddress, sstani, wallet)
	const NETWORK_ID = '5'

	async function sendsst (to) {
		if (window.ethereum.networkVersion === NETWORK_ID) {
			const decimals = await contract.decimals();
			contract.transfer(to, ethers.utils.parseEther('5', decimals))
			.then(function(tx){
				console.log(tx);
				// settx(tx);
				alert("transfer seccuss! This is the transfer hash =>  "+tx.hash);
			})
		} else {
			alert("please switch to Georli testnet!")
		}	
	}

return (
	<>
	<head>
     	<link href="css/styles.css" rel="stylesheet"/>		
    </head>
	
	
    {/* 從這下面是連錢包的     */}
	<body class="masthead d-flex align-items-center">
		{!accounts &&
		<div class="container px-5 px-lg-7 text-center">
			<div class="row gx-5 gx-lg-7 justify-content-center">
				<div class="col-lg-10"> 
					<h2>Welcome to Stetri World!</h2>
					<p class="lead mb-5">Please connect to your wallet to get 5 Stetri coins.</p>
					<Button className="btn btn-warning btn-xl" onClick={() => connectWallet()}>
						Connect Wallet
					</Button>
				</div>
			</div>
		</div>

		}

		{accounts &&
		<div class="container px-4 px-lg-5 text-center">
			<div class="row gx-5 gx-lg-7 justify-content-center">
				<div class="col-lg-10"> 
				<p>
					<h2>Welcome to Stetri World!</h2>
					<p>{accounts}</p>
				</p>
				</div>
			</div>
			<p>
				<Button
					onClick={() => sendsst(String(accounts))}
					aria-controls="example-collapse-text">
					GET 5 Stetri Coin here !
				</Button>
			</p>
		</div>
		}
	</body> 

	</>


);};

export default Token;





// const Token = () => {
// 	const [open, setOpen] = useState(false);

// return (
// 	<>
// 	<head>
//     	<link href="css/styles.css" rel="stylesheet" />		
//   </head>

// 	<body class="callout px-5 px-lg-7 text-center">
// 		<p>
// 		<Button
// 			onClick={() => setOpen(!open)}
// 			aria-controls="example-collapse-text"
// 			aria-expanded={open}
// 		>
// 			click
// 		</Button>
// 		</p>

// 		<Collapse in={open}>
// 			<div id="example-collapse-text">
// 			<div class="card card-body">
// 			Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
// 			terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
// 			labore wes anderson cred nesciunt sapiente ea proident.
// 			</div>
// 			</div>
// 		</Collapse>
	
// 	</body>
// 	</>


// );};

// export default Token;
