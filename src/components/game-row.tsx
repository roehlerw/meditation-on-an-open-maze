import { Container, Grid, Header } from 'semantic-ui-react'
import GameSquare, { LastMove } from './game-square';

interface OwnProps {
    firstMove: boolean;
    lastMove: LastMove;
    rowNum: number;
    rowData: number[];
    onClick: (rowIndex: number, colIndex: number) => void;
}

function GameRow(props: OwnProps) {
    return (
        <>
            {
                props.rowData.map((item, index) => <Grid.Column>
                    <GameSquare firstMove={props.firstMove} lastMove={props.lastMove} rowIndex={props.rowNum} colIndex={index} displayNumber={item} onClick={() => {
                        props.onClick(props.rowNum, index)
                    }} />
                </Grid.Column>)
            }
        </>
    );
}

export default GameRow;
