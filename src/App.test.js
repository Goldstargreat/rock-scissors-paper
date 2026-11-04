import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// 각 테스트가 끝나면 Math.random을 원래대로 돌려놓는다
afterEach(() => {
  jest.restoreAllMocks();
});

test('Player, Computer 카드와 가위바위보 버튼이 보인다', () => {
  render(<App />);

  expect(screen.getByText('Player')).toBeInTheDocument();
  expect(screen.getByText('Computer')).toBeInTheDocument();

  expect(screen.getByText('가위')).toBeInTheDocument();
  expect(screen.getByText('바위')).toBeInTheDocument();
  expect(screen.getByText('보')).toBeInTheDocument();
});

test('가위 버튼을 누르면 Player 카드에 Scissors가 표시된다', () => {
  render(<App />);

  fireEvent.click(screen.getByText('가위'));

  // data-testid="item-name" 인 h2가 2개 (0번: Player, 1번: Computer)
  const itemNames = screen.getAllByTestId('item-name');
  expect(itemNames[0]).toHaveTextContent('Scissors');
});

test('보를 내고 컴퓨터가 바위를 내면 Player는 win, Computer는 lose', () => {
  // Math.random()이 항상 0을 돌려주게 만든다
  // → itemArray ["rock", "scissors", "paper"]의 0번째 = rock
  jest.spyOn(Math, 'random').mockReturnValue(0);

  render(<App />);
  fireEvent.click(screen.getByText('보'));

  const itemNames = screen.getAllByTestId('item-name');
  expect(itemNames[0]).toHaveTextContent('Paper');
  expect(itemNames[1]).toHaveTextContent('Rock');

  expect(screen.getByText('win')).toBeInTheDocument();
  expect(screen.getByText('lose')).toBeInTheDocument();
});