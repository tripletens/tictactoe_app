const style = {
    background: '#EEE888',
    border:'2px solid #000000',
    fontSize: "30px",
    fontWeight: "800",
    cursor: 'pointer',
    outline: 'none'
}

const Square = ({ value, onclick }) => {
    return (
        <button style={style} onClick={onclick}>
            {value}
        </button>
    );
}

export default Square;