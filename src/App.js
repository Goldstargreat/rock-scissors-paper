import './App.css';
import Box from "./component/Box";
import {findAllByDisplayValue} from "@testing-library/dom";

// 1. 박스 2개가 필요하다. (Title, Picture, Result)
// 2. 가위, 바위, 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 됨
// 5. 3번, 4번의 결과를 갖고 누가 이겼는지 승패를 가른다
// 6. 승패의 결과에 따라 테두리 색이 바뀜(이기면 초록, 지면 빨강, 비기면 검정)
function App() {
  return (
      <div>
          <div className="main">
              <Box title="Player"/>
              <Box title="Computer"/>
          </div>
          <div className="main">
              <button>가위</button>
              <button>바위</button>
              <button>보</button>
          </div>
      </div>
  );
}

export default App;
