import NumCode from "../NumCode";
import { FunctionalButton, RemoveButton, List, ListItem } from "./styled";

const SavedList = ({ savedList, setSavedList }) => {
    const removeItem = (id) => {
        setSavedList(savedList => savedList.filter(item => item.id !== id));
    }

    const clearList = () => {
        setSavedList([]);
    }

    return (
        <>
            <FunctionalButton onClick={clearList}>Clear List</FunctionalButton>
            <List>
                {
                    savedList.map(item =>
                        <ListItem key={item.id}>
                            <NumCode number={item.sourceValue} code={item.source} small />
                            <div> ➤ </div>
                            <NumCode number={item.targetValue} code={item.target} small />
                            <RemoveButton onClick={() => removeItem(item.id)}>&#10006;</RemoveButton>
                        </ListItem>
                    )
                }
            </List>
        </>
    );
}

export default SavedList;