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
			<div class="container px-5 px-lg-7 text-center">
				<div class="row gx-5 gx-lg-7 justify-content-center">
					<div class="col-lg-10"> 
						<h2>We Are Team Stetri</h2>
					</div>
				
					<div class="card-group">
						<div class="card">
							<img src="../assets/img/pecu.jpg" class="card-img-top" ></img>
							<div class="card-body">
							<h5 class="card-title">Pecu</h5>
							<p class="card-text">pecu@ntnu.edu.tw</p>
							<p class="card-text">https://pecu.github.io/peculab/</p>
							</div>
						</div>
						<div class="card">
							<img src="../assets/img/emma.jpg" class="card-img-top"></img>
							<div class="card-body">
							<h5 class="card-title">Emma</h5>
							<p class="card-text">masterthesis.aug@gmail.com</p>
							<p class="card-text">https://github.com/cherrytora</p>
							</div>
						</div>
						<div class="card">
							<img src="../assets/img/yvonne.jpg" class="card-img-top"></img>
							<div class="card-body">
							<h5 class="card-title">Yvonne</h5>
							<p class="card-text">yvonne2015feng@gmail.com</p>
							<p class="card-text">https://github.com/0yfeng</p>
							</div>
						</div>
						<div class="card">
							<img src="../assets/img/kenny.jpg" class="card-img-top"></img>
							<div class="card-body">
							<h5 class="card-title">Kenny</h5>
							<p class="card-text">kennywang2003@gmail.com</p>
							<p class="card-text">https://github.com/kennywang112</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header >
	</>



);};

export default Nft;
