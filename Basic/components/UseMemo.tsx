import { useState } from "react";

const getAverage = (numbers: number[]) =>{
    console.log("평균값 계산 중...");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, cur) => acc + cur);
    return sum / numbers.length;
};

function UseMemo() {

    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>("");

    const onInsert = () => {
        // concat: Array 인스턴스의 concat 함수는 두 개 이상의 배열을 병합하는 데 사용된다.
        // 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환한다.
        const newList = list.concat(parseInt(number));
        setList(newList);
        setNumber("");
    };
    
    const onReset = () => {
        setList([]);
    }

    return(
        <div>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={onInsert}>등록</button>
            <button onClick={onReset}>초기화</button>

            <ul>
                {list.map((item: number, index: number) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>

            <div>
                <b>평균 값: {getAverage(list)}</b>
            </div>
        </div>
    )
}
export default UseMemo;