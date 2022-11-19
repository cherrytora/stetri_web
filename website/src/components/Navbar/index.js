import React from 'react'
import {Link} from 'react-router-dom'
	
function NavBar(){
	
	return(
		<div class="container-{breakpoint}">
			<div class="p-3 mb-2 bg-warning">
				<div class="shadow p-3 mb-2 bg-body rounded">
					<nav id="sidebar-wrapper">
						<ul ul class="nav nav-pills nav-fill">
							<li class="nav-item"><h5><Link to="/index">Home</Link></h5></li>
							<li class="nav-item"><h5><Link to="/token">Token</Link></h5></li>
							<li class="nav-item"><h5><Link to="/nft">NTF</Link></h5></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default NavBar;

