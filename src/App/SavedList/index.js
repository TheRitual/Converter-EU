import NumCode from "../NumCode";
import "./style.css"

const SavedList = ({ savedList, setSavedList }) => {
    const removeItem = (id) => {
        setSavedList(savedList => savedList.filter(item => item.id !== id));
    }

    const clearList = () => {
        setSavedList([]);
    }

    return (
        <>
            <button className="savedList__clearButton" onClick={clearList}>Clear List</button>
            <ul className="savedList__list">
                {
                    savedList.map(item =>
                        <li className="savedList__item" key={item.id}>
                            <NumCode number={item.sourceValue} code={item.source} small />
                            <div> ➤ </div>
                            <NumCode number={item.targetValue} code={item.target} small />
                            <button className="savedList__removeButton" onClick={() => removeItem(item.id)}>&#10006;</button>
                        </li>
                    )
                }
            </ul>
        </>
    );
}

export default SavedList;