import { ControlInput, ControlSelect } from "./styled";

const Controls = ({ isDisabled, inputValue, inputOnChange, selectValue, selectOnChange, list }) => {

    return (
        <>
            <ControlInput disabled={isDisabled} onChange={inputOnChange} step="any" type="number" value={inputValue} min="0" />
            <ControlSelect value={selectValue} onChange={selectOnChange}>{
                list.map((item, index) => {
                    return (
                        <option key={index} value={item.code}>
                            {item.code}
                        </option>
                    )
                })
            }</ControlSelect>
        </>
    )
}

export default Controls;