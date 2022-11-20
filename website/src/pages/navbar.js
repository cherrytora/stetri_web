import React from "react";

const Navbar = () => {
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
          	<a class="nav-link" href="/shop">NTF Shop</a>
        </li>
		<li class="nav-item fs-4">
			<a class="nav-link" href="/us">About Us</a>
		</li>
	</ul>
    </>
  );
};
  
export default Navbar;