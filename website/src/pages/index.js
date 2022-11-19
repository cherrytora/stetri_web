import React from 'react';
//import { NetworkErrorMessage } from "./NetworkErrorMessage";

export default function Home() {
 
  const containerStyle = {
		backgroundImage:
		  "url(../assets/img/home_bg.jpg)",
     backgroundSize:
      "auto",
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
        <div class="container px-4 px-lg-5 text-center">
          <h1 class="mb-1">Step Trip 踏步行</h1>
          <h3 class="mb-5"><em>A Free Bootstrap Theme by Start Bootstrap</em></h3>
        </div>
      </header>   
      </>
  );
}



// export default function ConnectWallet({ connectwallet}) {
// 	const containerStyle = {
// 		backgroundImage:
// 		  "url(https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg)",
// 		width: "600px",
// 		height: "600px",
// 	  };

// 	return (
// 		<div class="container" style={containerStyle}>
// 		<section class="content-section bg-light">
// 			<div class="container px-5 px-lg-7 text-center">
// 				<div class="row gx-5 gx-lg-7 justify-content-center">
// 					<div class="col-lg-10"> 
// 						<h2>Welcome to Stetri World!</h2>
// 						<p class="lead mb-5">
// 							Please connect to your wallet.
// 						</p>
// 						<button
// 							className="btn btn-warning"
// 							type="button"
// 							onClick={connectwallet}>
// 							Connect Wallet
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	</div>
// 	);
//   }