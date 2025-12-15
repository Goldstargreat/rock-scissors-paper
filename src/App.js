import {useState} from 'react';
import './App.css';
import Box from "./component/Box";
import Rock from "./imgs/Rocks.jpg";
import Scissors from "./imgs/Scissor.png";
import Paper from "./imgs/Paper.png";

// 1. 박스 2개가 필요하다. (Title, Picture, Result)
// 2. 가위, 바위, 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 됨
// 5. 3번, 4번의 결과를 갖고 누가 이겼는지 승패를 가른다
// 6. 승패의 결과에 따라 테두리 색이 바뀜(이기면 초록, 지면 빨강, 비기면 검정)
const choice = {
    rock: {
        name: "Rock",
        img: Rock
    },
    scissors: {
        name: "Scissors",
        img: Scissors
    },
    paper: {
        name: "Paper",
        img: Paper
    }
}
function App() {
    const [userSelect, setUserSelect] = useState(null)
    const [computerSelect, setComputerSelect ] = useState("")
    const [result, setResult] = useState("")
    const play = (userChoice) => {
        setUserSelect(choice[userChoice])
        let computerChoice = randomChoice();
        setComputerSelect(computerChoice);
        setResult(judgement(choice[userChoice], computerChoice))
    };

    const randomChoice = () => {
        let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 Array로 만들어주는 함수
        console.log("itemArray: ", itemArray);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    }

    const judgement = (user, computer) => {
        console.log("user", user, "computer", computer);

        // user == computer이면 tie
        // user == rock, computer == scissors이면 user win
        // user == rock, computer == paper이면 user lose
        // user == scissors, computer == paper이면 user win
        // user == scissors, computer == rock이면 user lose
        // user == paper, computer == rock이면 user win
        // user == paper, computer == scissors이면 user lose
        if(user.name == computer.name){
            return "tie";
        } else if(user.name == "Rock") return computer.name == "Scissors" ? "win": "lose";
          else if(user.name == "Scissors") return computer.name == "Paper" ? "win": "lose";
          else if(user.name == "Paper") return computer.name == "Rock" ? "win": "lose";
    };

  return (
      <div>
          <div className="main">
              <Box title="Player" item={userSelect} result ={result} />
              <Box title="Computer" item={computerSelect} result ={result}/>
          </div>
          <div className="main">
              <button onClick={()=>play("scissors")}>가위</button>
              <button onClick={()=>play("rock")}>바위</button>
              <button onClick={()=>play("paper")}>보</button>
          </div>
      </div>
  );
}

export default App;
