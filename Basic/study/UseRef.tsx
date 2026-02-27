import { useRef } from "react";

function UseRef() {

    const inputElement  = useRef<HTMLInputElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        inputElement.current?.focus();
        fileInputRef.current?.click();
    }

    return(
        <div>
            <input type="text" ref={inputElement} />
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
            <button onClick={handleClick}>등록</button>
        </div> 
    )
}

export default UseRef;