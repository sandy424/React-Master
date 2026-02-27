import React, { useState } from "react";

function UseState(){

    const [value, setValue] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    
    const increment = () => setValue(value+1);
    const decrement = () => setValue(value-1);

    const nameChange = (e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const nicknameChange = (e:React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value);
    
    return(
        <div>
            <p>
                현재 카운터: {value}
            </p>
            <button onClick={increment}>1 증가</button>
            <button onClick={decrement}>1 감소</button>
        
            <div>
                <input type="text" value={name} onChange={nameChange} />
                <input type="text" value={nickname} onChange={nicknameChange} />
            </div>
            <div>
                <b>이름 : {name}</b>
                <b>닉네임 : {nickname}</b>
            </div>
        </div>
    )
}
export default UseState;