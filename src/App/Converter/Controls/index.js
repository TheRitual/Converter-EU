import "./style.css";

const Controls = ({ isDisabled, inputValue, inputOnChange, selectValue, selectOnChange, list }) => {

    return (
        <>
            <input disabled={isDisabled} onChange={inputOnChange} step="any" type="number" value={inputValue} min="0" className="controls__field" />
            <select className="controls__select" value={selectValue} onChange={selectOnChange}>{
                list.map((item, index) => {
                    return (
                        <option key={index} value={item.code}>
                            {item.code}
                        </option>
                    )
                })
            }</select>
        </>
    )
}

export default Controls;