import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // tag에 클래스를 줄 때는 class가 아니라 className으로 줘야함

  // 변수 넣을 때는 중괄호(데이터 바인딩)
  let post = '강남 우동 맛집';
  let h4Id = 'aaa';

  // 자료를 저장하려면 state를 사용
  // a는 값, b는 state 변경을 도와주는 함수
  // 아래는 Destructuring 문법
  let [a,b] = useState('남자코트추천');
  
  // 왜 state를 사용해야하는가?
  // 그냥 변수를 사용하게되면 데이터가 바뀌었을 때, 자동으로 바뀌도록 작업을 해야함
  // state를 사용하게되면 html이 자동 재렌더링된다
  // 자주 변경될 것 같은 데이터를 state로 관리해야하는게 핵심

  let [logo, setLogo] = useState('ReactBlog');

  // Destructuring 문법
  let num = [1,2];
  let aa = num[0];
  let bb = num[1];

  let [qq,ww] = [1, 2];


  // style을 줄 때는 무조건 중괄호를 열고 객체로 전달해줘야한다
  // style에서 "-" 기호는 사용할 수 없고 카멜케이스로 작성
  // return 태그안에는 하나의 태그로 시작해서 하나의 태그로 끝나야한다
  return (
    <div className="App"> 
      <div className="black-nav">
        <h4 id={h4Id} style={{color:'red'}}>블로그</h4>
      </div>
      <div className='list'>
        <h4>{a}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
