import React, {useState} from 'react';

function Input() {
    const [textVal, setTextVal] = useState("");

    const changeText = (e) => {
        setTextVal(e.target.value);
    }
    return (
        <div>
            <input type="text" value={textVal} onChange={changeText}></input>
            <p>{textVal}</p>
        </div>
    )
}

export default Input;