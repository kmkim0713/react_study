import logo from './logo.svg';
import './App.css';

function App() {

  // tag에 클래스를 줄 때는 class가 아니라 className으로 줘야함

  // 변수 넣을 때는 중괄호(데이터 바인딩)
  let post = '강남 우동 맛집';
  let h4Id = 'aaa';

  // style을 줄 때는 무조건 중괄호를 열고 객체로 전달해줘야한다
  // style에서 "-" 기호는 사용할 수 없고 카멜케이스로 작성

  return (
    <div className="App"> 
      <div className="black-nav">
        <h4 id={h4Id} style={{color:'red'}}>블로그</h4>
      </div>
      <div className='list'>
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
