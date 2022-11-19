import React from 'react';

const Nft = () => {
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
		<div class="container">
			<section class="content-section bg-light">
				<div class="container px-5 px-lg-7 text-center">
					<div class="row gx-5 gx-lg-7 justify-content-center">
						<div class="col-lg-10"> 
							<h2>Welcome to Stetri World!</h2>
							<p class="lead mb-5">
								Please connect to your wallet.
							</p>
							<a class="btn btn-warning btn-xl" href="#services">Connect Wallet</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	</header>
	</>



);};

export default Nft;
