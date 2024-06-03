import { useState, useEffect } from 'react';
import { Button, Container, Header } from 'semantic-ui-react'

interface OwnProps {
    firstMove: boolean;
    displayNumber?: number;
    rowIndex: number;
    colIndex: number;
    lastMove: LastMove;
    onClick: () => void;
}

export interface LastMove {
    row: number;
    col: number;
}

function GameSquare(props: OwnProps) {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 900px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 900px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    var disabled = true;
    if (props.firstMove) {
        disabled = false;
    }
    else {
        // horizontal same row
        if (props.lastMove.row == props.rowIndex && props.lastMove.col + 3 == props.colIndex) {
            disabled = false;
        }
        else if (props.lastMove.row == props.rowIndex && props.lastMove.col - 3 == props.colIndex) {
            disabled = false;
        }
        // vertical same column
        else if (props.lastMove.row + 3 == props.rowIndex && props.lastMove.col == props.colIndex) {
            disabled = false;
        }
        else if (props.lastMove.row - 3 == props.rowIndex && props.lastMove.col == props.colIndex) {
            disabled = false;
        }
        // up and left
        else if (props.lastMove.row - 2 == props.rowIndex && props.lastMove.col + 2 == props.colIndex) {
            disabled = false;
        }
        // up and right
        else if (props.lastMove.row + 2 == props.rowIndex && props.lastMove.col + 2 == props.colIndex) {
            disabled = false;
        }
        // down and right
        else if (props.lastMove.row + 2 == props.rowIndex && props.lastMove.col - 2 == props.colIndex) {
            disabled = false;
        }
        // down and left
        else if (props.lastMove.row - 2 == props.rowIndex && props.lastMove.col - 2 == props.colIndex) {
            disabled = false;
        }
    }

    return (
        <>
            {
                props.displayNumber != -1 ?
                    <Button primary disabled style={matches ? { margin: "0", padding: "11px 14px" } : { margin: "0", padding: "6px 9px" }}>{props.displayNumber}</Button> :
                    <Button icon='question' onClick={props.onClick} disabled={disabled} style={matches ? { margin: "0" } : { margin: "0rem", padding: "6px" }} />
            }
        </>
    );
}



export default GameSquare;
