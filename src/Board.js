
import Square from './Square';


const style = {
    border: '2px solid #000000',
    borderRadius: "10px",
    width: '350px',
    height: '350px',
    margin: '0 auto',
    display: "grid",
    gridTemplate : "repeat(3,1fr) / repeat(3,1fr)"
}


const Board = ({ squares, onclick }) => {
    return (
        <div style={style}>
            {squares.map((square,i) => (
                <Square key={i} value={square} onclick={() => onclick(i)} />
            ))}
        </div>
    );
}

export default Board;