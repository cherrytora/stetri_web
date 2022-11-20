import React from 'react';
//import { NetworkErrorMessage } from "./NetworkErrorMessage";

export default function Home() {
    return (
      <>
      <head>
        <link href="css/styles.css" rel="stylesheet" />
      </head>

     
      <header class="masthead d-flex align-items-center">
        <div class="container px-4 px-lg-5 text-center">
          <h1 class="mb-1">Step Trip 踏步行</h1>
          <h3 class="mb-5"><em>享受一場現實與虛擬相融的旅程吧！</em></h3>
          <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
        </div>
      </header>

      <section class="masthead d-flex align-items-center" id="about">
        <div class="container px-4 px-lg-5 text-center">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-10">
              <p><h2>活動內容</h2></p>
              {/* <p class="lead mb-5">參加活動領取NFT</p>
              <p class="lead mb-5">走路做環保領取Token</p> */}
                
             
              <p>
                {/* <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
                &emsp; */}
                <a class="btn btn-secondary btn-xl" href="#page-top">Back to Top</a>
              </p>
            </div>
          </div>
        </div>
      </section>  
      </>
  );
}
