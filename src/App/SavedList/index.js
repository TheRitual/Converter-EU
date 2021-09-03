import "./style.css"

const SavedList = ({ savedList, setSavedList }) => {
    const removeItem = (id) => {
        setSavedList(savedList => savedList.filter(item => item.id !== id));
    }

    const clearList = () => {
        setSavedList([]);
    }

    return (
        <section className="savedList">
            <h2 className="savedList__header">Saved Positions</h2>
            <button className="savedList__clearButton" onClick={clearList}>Clear List</button>
            <ul className="savedList__list">
                {
                    savedList.map(item =>
                        <li className="savedList__item" key={item.id}>
                            <div>
                                <span className="savedList__value">{item.sourceValue}</span>&nbsp;
                                <span className="savedList__code">{item.source}</span>&nbsp;
                            </div>
                            <div> ➤ </div>
                            <div>
                                <span className="savedList__value">{item.targetValue}</span>&nbsp;
                                <span className="savedList__code">{item.target}</span>&nbsp;
                            </div>
                            <div>
                                <button className="savedList__removeButton" onClick={() => removeItem(item.id)}>&#10006;</button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </section>
    );
}

export default SavedList;