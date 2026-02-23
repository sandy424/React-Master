import { useEffect, useState } from "react";


function UseEffect() {
    // useEffect는 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 하는 Hook입니다.
    // - 마운트가 될 때만, 실행하고 싶을 때
    // useEffect에서 실행한 함수를 컴포넌트가 화면에 맨 처음 렌더링 될 때만 실행하고,
    // 업데이트 될 때는 실행하지 않으려면, 함수에 두 번째 파라미터로 빈 배열을 넣어주면 된다.

    // - 특정 값이 업데이트 될 떄만 실행하고 싶을 때
    // 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 된다.

    const [name, setName] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");

    const nameChange = (e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const nicknameChange = (e:React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value);
    
    // 딱 한 번만 실행하고 싶을 때
    useEffect(() => {
        console.log("렌더링이 완료되었습니다.");
        console.log("name: ", name);
        console.log("nickname: ", nickname);
    }, []);

    useEffect(() => {
        console.log("name이 변할 경우에만 실행");
        console.log("name: ", name);
        console.log("nickname: ", nickname);
    }, [name]);

    return( 
        <div>
            <input type="text" value={name} onChange={nameChange} />
            <input type="text" value={nickname} onChange={nicknameChange} />

            <div>
                <b>이름: {name}</b>
                <b>닉네임: {nickname}</b>
            </div>
        </div>
    )
}
export default UseEffect;