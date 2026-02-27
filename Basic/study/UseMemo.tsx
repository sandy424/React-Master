import { useCallback, useMemo, useState } from "react";

const getAverage = (numbers: number[]) =>{
    console.log("평균값 계산 중...");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, cur) => acc + cur);
    return sum / numbers.length;
};

function UseMemo() {

    // useCallback - 함수 자체를 반환
    // 주로 렌더링 성능을 최적화해야 하는 상황에서 사용됨.
    // 이 훅을 사용하면 만들어 놓았던 함수를 재사용할 수 있다.

    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>("");

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(() => {
        // concat: Array 인스턴스의 concat 함수는 두 개 이상의 배열을 병합하는 데 사용된다.
        // 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환한다.
        const newList = list.concat(parseInt(number));
        setList(newList);
        setNumber("");
    }, [list, number]);
    
    const onReset = () => {
        setList([]);
    }

    // useMemo은 특정 값이 변경될 때만 함수를 실행하도록 하는 Hook입니다.
    const average = useMemo(() => getAverage(list), [list]);

    return(
        <div>
            <input type="text" value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <button onClick={onReset}>초기화</button>

            <ul>
                {list.map((item: number, index: number) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>

            <div>
                <b>평균 값: {average}</b>
            </div>
        </div>
    )
}
export default UseMemo;