import { Container, Grid, Header } from 'semantic-ui-react'
import GameSquare, { LastMove } from './game-square';
import { useEffect, useState } from 'react';

interface OwnProps {
    firstMove: boolean;
    lastMove: LastMove;
    rowNum: number;
    rowData: number[];
    onClick: (rowIndex: number, colIndex: number) => void;
}

function GameRow(props: OwnProps) {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 900px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 900px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <>
            {
                props.rowData.map((item, index) => <Grid.Column style={matches ? {} : { margin: "0 0px", padding: "0", width: "30px" }}>
                    <GameSquare firstMove={props.firstMove} lastMove={props.lastMove} rowIndex={props.rowNum} colIndex={index} displayNumber={item} onClick={() => {
                        props.onClick(props.rowNum, index)
                    }} />
                </Grid.Column>)
            }
        </>
    );
}

export default GameRow;
