# ✂️ 가위바위보 게임 (React)

React로 만든 간단한 가위바위보 게임입니다.
버튼으로 가위·바위·보 중 하나를 고르면 컴퓨터가 무작위로 하나를 고르고, 승패에 따라 카드 테두리 색이 바뀝니다.

## 주요 기능

- **가위 / 바위 / 보** 버튼으로 플레이어의 선택을 정함
- 컴퓨터는 `Math.random()`으로 무작위 선택
- 플레이어와 컴퓨터 카드에 각각 선택한 아이템의 이름과 이미지를 표시
- 승패 결과에 따라 카드 테두리 색 변경

| 결과 | 테두리 / 글자 색 |
| :--: | :--: |
| win  | 🟩 초록 |
| lose | 🟥 빨강 |
| tie  | ⬛ 검정 |

- 컴퓨터 카드는 플레이어 결과를 반대로 보여줌 (플레이어 `win` → 컴퓨터 `lose`)
- 게임 시작 전에는 물음표 이미지(`initialImage`)를 표시
- 화면 폭 768px 이하에서는 카드가 세로로 쌓이는 반응형 레이아웃

## 기술 스택

- React (Create React App)
- JavaScript (ES6+)
- CSS

## 프로젝트 구조

```
src/
├── App.js              # 게임 로직 (선택, 랜덤 선택, 승패 판정)
├── App.css             # 카드·버튼 레이아웃, 승패 색상, 반응형 스타일
├── App.test.js         # 테스트 파일 (CRA 기본)
├── index.js            # 앱 진입점
├── index.css           # 전역 스타일
├── reportWebVitals.js  # 성능 측정 (CRA 기본)
├── setupTests.js       # 테스트 설정 (CRA 기본)
├── logo.svg
├── component/
│   └── Box.jsx         # 플레이어·컴퓨터 카드 컴포넌트
└── imgs/
    ├── initialImage.jpg  # 시작 화면 물음표 이미지
    ├── Rocks.jpg         # 바위
    ├── Scissor.png       # 가위
    └── Paper.png         # 보
```

## 동작 방식

### 1. 선택지 정의 (`App.js`)

```js
const choice = {
    rock:     { name: "Rock",     img: Rock },
    scissors: { name: "Scissors", img: Scissors },
    paper:    { name: "Paper",    img: Paper }
}
```

### 2. 게임 진행 — `play(userChoice)`

1. 플레이어가 고른 아이템을 `userSelect`에 저장
2. `randomChoice()`로 컴퓨터 아이템을 뽑아 `computerSelect`에 저장
3. `judgement()`로 승패를 판정해 `result`에 저장

### 3. 컴퓨터 선택 — `randomChoice()`

`Object.keys(choice)`로 `["rock", "scissors", "paper"]` 배열을 만들고, 그중 하나를 무작위로 골라 돌려줍니다.

### 4. 승패 판정 — `judgement(user, computer)`

| 플레이어 | 컴퓨터 | 결과 |
| :--: | :--: | :--: |
| 같음 | 같음 | tie |
| Rock | Scissors | win |
| Rock | Paper | lose |
| Scissors | Paper | win |
| Scissors | Rock | lose |
| Paper | Rock | win |
| Paper | Scissors | lose |

### 5. 카드 표시 — `Box.jsx`

- `props`로 `title`, `item`, `result`를 받음
- `title`이 `"Computer"`이고 결과가 `tie`나 빈 값이 아니면 결과를 반대로 바꿈
- 결과 값(`win` / `lose` / `tie`)을 그대로 CSS 클래스로 붙여 테두리 색을 바꿈

```jsx
<div className={`box ${result}`}>
```

## 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm start
```
