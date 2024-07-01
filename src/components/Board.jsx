import React from 'react';
import './Board.css';

const Board = ({ cells }) => {
    return (
        <div className='board'>
            { cells.map((cell) => (
                <div key={ cell.pos } className='cell'>
                    { cell.pos }
                </div>
            )) }
        </div>
    );
};

export default Board;
