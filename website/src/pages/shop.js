import React from 'react';

const intro = () => {

return (
	<>
	<head>
        <link href="css/styles.css" rel="stylesheet" />
    </head>
      
	{/* STRAT HERE */}

    <header class="callout">

    <div class="container px-5 px-lg-7 text-center">
		<div class="row gx-5 gx-lg-7 justify-content-center">
            <h2>新城老街</h2>
        </div>
    </div>

    <div class="container">

        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/img/1.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">新城天主堂</h5>
                    <p class="card-text">又稱新城神社，在日治時代為了紀念新城事件的殉職人員所建立的。二戰之後神社的土地被天主教會買下，興建新城天主堂，但現在仍可以看到鳥居、基座等遺跡，是很值得一訪景點喔！</p>
                    
                </div>
                <div class="card-footer">
                    <div class="d-grid justify-content-md-center">    
                        <button type="button" class="btn btn-outline-danger">BUY NOW</button>
                    </div>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card h-100">
                    <img src="../assets/img/2.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">練習曲書店</h5>
                    <p class="card-text">練習曲書店是由胡教練打造的，白天提供閱讀、飲食和講座，等小朋友放學後變成了小朋友的課輔中心，甚至成為有些外地來的孩子能夠留宿的地方，不但活化了新城老宅成為著名的觀光景點，也照顧到了這邊的小朋友們。除了練習曲書店外，還有食堂和其他的設施，到新城走走的時候不要忘記來看看這個充滿愛的地方喔！</p>
                </div>
                <div class="card-footer">
                    <div class="d-grid justify-content-md-center">
                        <button type="button" class="btn btn-outline-danger">BUY NOW</button>
                    </div>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card h-100">
                    <img src="../assets/img/3.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">新城海堤</h5>
                    <p class="card-text">新城海堤相較於其他的海岸來訪的人較少，但是風景卻非常漂亮，可以看到完美的月牙彎弧形，喜歡看日出的人可以在這邊安靜的享受日出的美景喔！</p>
                </div>
                <div class="card-footer">
                    <div class="d-grid justify-content-md-center">    
                        <button type="button" class="btn btn-outline-danger">BUY NOW</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
    </header>





	</>



);};

export default intro;
