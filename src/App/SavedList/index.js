import "./style.css"

const SavedList = (props) => {

    return (
        <section className="savedList">
            <h2 className="savedList__header">Saved Positions</h2>
            <button className="savedList__clearButton">Clear List</button>
            <ul className="savedList__list">
                <li className="savedList__item">
                    <div>
                        <span className="savedList__value">1</span>&nbsp;
                        <span className="savedList__code">PLN</span>&nbsp;
                    </div>
                    <div> ➤ </div>
                    <div>
                        <span className="savedList__value">21.37</span>&nbsp;
                        <span className="savedList__code">EUR</span>&nbsp;
                    </div>
                    <div>
                        <button className="savedList__removeButton">&#10006;</button>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default SavedList;