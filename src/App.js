import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {


  let [a,b] = useState('남자 코트 추천');
  let [d,f] = useState('여자 코트 추천');
  let [e,k] = useState('혼성 코트 추천');
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red',fontSize:'55px'}}>블로그 타이틀</h4>
      </div>
      <div className="list">
        <h4>{a}</h4>
        <p>10월 9일 발행</p>
      </div>
      <div className="list">
        <h4>{d}</h4>
        <p>10월 9일 발행</p>
      </div>
      <div className="list">
        <h4>{e}</h4>
        <p>10월 9일 발행</p>
      </div>
    </div>
  );
}

export default App;
