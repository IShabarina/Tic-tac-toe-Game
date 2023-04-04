const Cell = ({ id, cell, setCells, go, setGo, cells, winMessage }) => {

    // add Class to Cell component's firstChild:
    const handleClick = (e) => {
        // Cell's child has any assigned Class:
        const taken = e.currentTarget.firstChild.classList.contains("circle") ||
            e.currentTarget.firstChild.classList.contains("cross")

        //if not has - add Class depends on 'go' value:
        if (!taken) {
            if (go === "circle") {
                e.currentTarget.firstChild.classList.add("circle")
                handleCellChange("circle")
                setGo("cross")
            }
            if (go === "cross") {
                e.currentTarget.firstChild.classList.add("cross")
                handleCellChange("cross")
                setGo("circle")
            }
        }
    }

    // function to do nothing:
    const NOOP = () => { };

    // fill in cell array acording to assigned name of Class:
    const handleCellChange = (className) => {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                // change value of cell if the cell's index of cells array match id of Cell component :
                return className
            } else {
                // else no change originally empty string in cell:
                return cell
            }
        })
        setCells(nextCells)
    }

    return (
        <div className="square" id={id} onClick={winMessage ? NOOP : handleClick}>
            <div className={cell}></div>
        </div>
    )
}

export default Cell