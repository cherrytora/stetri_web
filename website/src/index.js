import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import "bootstrap/dist/css/bootstrap.css";


import { createBrowserHistory } from 'history'



const root = ReactDOM.createRoot(document.getElementById('root'));

const replaceHashPath = () => {
  const history = createBrowserHistory()
  const hash = history.location.hash
  if (hash) {
    const path = hash.replace(/^#/, '')
    if (path) {
      history.replace(path)
    }
  }
}
replaceHashPath()
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// https://stackoverflow.com/questions/66326106/react-router-locations-on-aws-s3-bucket-do-not-work
// https://stackoverflow.com/questions/16267339/s3-static-website-hosting-route-all-paths-to-index-html

//http://dez.logdown.com/posts/2017/04/07/aws-ec2-deploy-nodejs-web-app
