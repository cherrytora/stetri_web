import React from 'react';

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

              <p>
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card h-100">
                    <img src="../assets/img/map.png" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">1.	跟著路線解任務！</h5>
                      <p class="card-text">選擇一條喜歡的路線，到路線中的景點解任務或打卡領NFT，集滿整條路線NFT可以去遊客中心換取小禮物喔！如果集滿同區三條路線的NFT，還可以得到小驚喜喔！</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src="../assets/img/coins.png" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">2.	賺取Stetri Coin！</h5>
                      <p class="card-text">在旅途中喝飲料、吃零食都是不可缺少的療癒過程！把旅行中產生或順手撿取的垃圾拿到合作的垃圾站丟棄就可以換Stetri Coin喔～丟越多，領越多！除了垃圾回收之外，走路走得越多，也可以領取越多Stetri Coin！有了Stetri Coin就可以在搭乘地區交通車的時候折抵車費或是到Stetri商城中購買限量的NFT喔！</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src="../assets/img/art.png" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">3.	收集Stetri NFT！</h5>
                      <p class="card-text">我們的Stetri NFT有兩種，一種是景點解任務或打卡免費領取的NFT，另一種則是在我們的NFT商城中賣的NFT，每個景點小賣店都有只能用商城NFT換取的限量商品，來尋寶看看吧！</p>
                    </div>
                  </div>
                </div>
              </div>
              </p>
                  
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
