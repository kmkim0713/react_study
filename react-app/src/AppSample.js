import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // tag에 클래스를 줄 때는 class가 아니라 className으로 줘야함

  // 변수 넣을 때는 중괄호(데이터 바인딩)
  let post = "강남 우동 맛집";
  let h4Id = "aaa";

  // 자료를 저장하려면 state를 사용
  // a는 값, b는 state 변경을 도와주는 함수
  // 아래는 Destructuring 문법
  // let [a,b] = useState('남자코트추천');
  let [title, setTitle] = useState([
    "남자코트추천",
    "강남 맛집",
    "신도림 맛집",
  ]);

  let [like, setLike] = useState(0);

  // 왜 state를 사용해야하는가?
  // 그냥 변수를 사용하게되면 데이터가 바뀌었을 때, 자동으로 바뀌도록 작업을 해야함
  // state를 사용하게되면 html이 자동 재렌더링된다
  // 자주 변경될 것 같은 데이터를 state로 관리해야하는게 핵심
  // state를 변경할 때는 무조건 set으로 변경해야 재렌더링시 반영된다

  // Destructuring 문법
  let num = [1, 2];
  let aa = num[0];
  let bb = num[1];

  let [qq, ww] = [1, 2];

  // style을 줄 때는 무조건 중괄호를 열고 객체로 전달해줘야한다
  // style에서 "-" 기호는 사용할 수 없고 카멜케이스로 작성
  // return 태그안에는 하나의 태그로 시작해서 하나의 태그로 끝나야한다
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={h4Id} style={{ color: "red" }}>
          블로그
        </h4>
      </div>

      <button
        onClick={() => {
          // setTitle('여자코트추천'); // 배열대신 String만 들어감
          // setTitle(['여자코트추천', '강남 맛집', '신도림 맛집']);
          // let copy = title; // 대괄호와 ...을 붙여줘야함
          let copy = [...title];
          copy[0] = "여자코트추천";

          // state 변경함수는 기존state와 신규state가 같으면 변경하지 않는다
          // array와 obj는 주소만 참조
          // "..."은 괄호를 벗겨주는 문법, []는 대괄호를 다시 씌워주겠다는 의미
          // 이를 통해 완전한 사본을 얻는다
          setTitle(copy);
        }}
      >
        변경버튼
      </button>

      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}
      >
        정렬하기
      </button>

      <div className="list">
        <h4>
          {title[0]} <span onClick={() => setLike(like + 1)}>👍</span> {like}{" "}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]} </h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
    </div>
  );
}

// 컴포넌트 만들기
// 1. function 만들기. 바깥에다가 만들기. 컴포넌트 이름은 대문자로 시작해야함
// 2. return()안에 html 담기
// 3. <함수명></함수명> 쓰기
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
