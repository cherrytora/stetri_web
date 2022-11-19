import React from "react";

const Token = () => {
	const containerStyle = {
		backgroundImage:
		  "url(https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg)",
		width: "600px",
		height: "600px",
	  };
	  
return (
	<>
	<head>
    	<link href="css/styles.css" rel="stylesheet" />
    </head>

	<ul class="nav justify-content-center">
		<li class="nav-item fs-4">
			<a class="nav-link active" aria-current="page" href="/index">Home</a>
		</li>
		<li class="nav-item fs-4">
			<a class="nav-link active" aria-current="page" href="/token">Stetri Coin</a>
		</li>
		<li class="nav-item fs-4">
			<a class="nav-link" href="/nft">Stetri NFT</a>
		</li>
		<li class="nav-item fs-4">
			<a class="nav-link" href="/us">About Stetri</a>
		</li>
	</ul>

	<header class="masthead d-flex align-items-center">
		<div className="container">
			<div className="row justify-content-md-center">
				<div className="col-6 p-4 text-center">
					<p>Please connect to your wallet.</p>
					<button
					className="btn btn-warning"
					type="button"
					//onClick={connectWallet}
					>
					Connect Wallet
					</button>
				</div>
			</div>
		</div>
	</header>
  	</>


);};

export default Token;
