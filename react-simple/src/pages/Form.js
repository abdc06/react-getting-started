import React, {useState} from 'react';

function Form() {
    const [inputs, setInputs] = useState({
        name: "",
        password: "",
        email: ""
    });

    const changeEvent = (e) => {
        let id = e.target.id;
        let value = e.target.value;

        setInputs({
            ...inputs,
            [id]: value
        })
    }

    return (
        <div>
            <form>
                <div>
                    <label>이름</label>
                    <input type="text" id="name" value={inputs.name} onChange={changeEvent}></input>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" id="password" value={inputs.password} onChange={changeEvent}></input>
                </div>
                <div>
                    <label>이메일</label>
                    <input type="email" id="email" value={inputs.email} onChange={changeEvent}></input>
                </div>
                <p>이름: {inputs.name}</p>
                <p>비밀번호: {inputs.password}</p>
                <p>이메일: {inputs.email}</p>
            </form>
        </div>
    )
}

export default Form;