function Winner({ winner, isSpinning }) {
  return (
    <>
      {(winner || isSpinning) && (
        <div className="result">
          {isSpinning ? (
            <span className="spinning-text">
              Close your eyes <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span> 👀
            </span>
          ) : (
            <span className="winner-text">
              The Winner is: <strong>{winner} ✨</strong>
            </span>
          )}
        </div>
      )}
    </>
  );
}

export default Winner;
