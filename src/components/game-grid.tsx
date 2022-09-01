import React, { useState } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react'
import GameRow from './game-row';
import { LastMove } from './game-square';

interface OwnProps {
  rows: number;
  cols: number;
}

function GameGrid(props: OwnProps) {
  const initialState: number[][] = [];
  for (var i = 0; i < props.rows; i++) {
    initialState.push([]);
    for (var j = 0; j < props.cols; j++) {
      initialState[i].push(-1);
    }
  }

  const initialLastMove: LastMove = {
    row: -1,
    col: -1
  }

  const [gameState, setGameState] = useState(initialState);
  const [lastMove, setLastMove] = useState(initialLastMove);
  const [currentNumber, setCurrentNumber] = useState(1);

  return (
    <Grid textAlign='center'>
      {
        gameState.map((item, index) => <Grid.Row>
          <GameRow firstMove={currentNumber == 1} lastMove={lastMove} rowNum={index} rowData={item} onClick={(rowIndex: number, colIndex: number) => {
            var newState = gameState;
            newState[rowIndex][colIndex] = currentNumber;
            setCurrentNumber(currentNumber + 1);
            setLastMove({ row: rowIndex, col: colIndex });
            setGameState(newState);
          }} />
        </Grid.Row>)
      }
    </Grid>
  );
}

export default GameGrid;
