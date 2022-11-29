import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import contract_address from "../contracts/contract-address.json";
import STlogo from "../contracts/STlogo.json";
import { ethers } from "ethers";


const Nft = () => {
	
	const [isConnected, setConnected] = useState(false);
	const [isLogged, setLogged] = useState(false);
	const [accounts, setAccounts] = useState();
	const [isLoading, setLoading] = useState(false);
	const [finish, setfinish] = useState(false);
	const [txlink, settx] = useState();

    
	const connectWallet = async () => {
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
	  const tokenaddress = contract_address.STlogo
	  const stlogoabi = STlogo.abi
	  const contract = new ethers.Contract(tokenaddress, stlogoabi, wallet)
	  const NETWORK_ID = '5'
	  const hxlink = "https://goerli.etherscan.io/tx/"
  
	  async function sendstlogo (to) {
			setLoading(true);
		  if (window.ethereum.networkVersion === NETWORK_ID) {
			  contract.safeMint(to)
			  .then(function(tx){
				  console.log(tx);
				//   alert("transfer seccuss! This is the transfer hash =>  "+tx.hash);
				  setfinish(true);
				  settx(hxlink + tx.hash);
			  })
		  } else {
			alert("please switch to Georli testnet!")
		  }  
	  }

return (
	<>
	<head>
		<link href="css/styles.css" rel="stylesheet" />
    </head>

	<body class="masthead d-flex align-items-center">
		{!accounts &&
		<div class="container px-5 px-lg-7 text-center">
			<div class="row gx-5 gx-lg-7 justify-content-center">
				<div class="col-lg-10"> 
					<h2>Welcome to Stetri World!</h2>
					<p class="lead mb-5">Please connect to your wallet to get Stetri Logo NFT.</p>
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
					<h3>Your wallet address is</h3>
					<p class="lead mb-7">{accounts}</p>
				</p>
				</div>
			</div>
			<p>
			{!isLoading && 
				<Button
					onClick={() => {setLoading(true);
									sendstlogo(String(accounts));		
					}}
					aria-controls="example-collapse-text">
					GET Stetri Logo NFT here !
				</Button>
				}
			{isLoading &&
				<p>
					{!finish &&
					<p>Please wait a second...
					<Spinner animation="grow" />
					</p> 
					}
					{finish &&
					<p>You can check transaction
					<a href={String(txlink)}> Here </a>
					</p>
					}
				</p>
			}
			</p>
		</div>
		}
	</body> 
	</>

);};

export default Nft;
