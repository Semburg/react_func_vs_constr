import React from 'react';
import { useState } from "react";


function Comp2() {
    const [count, setCount] = useState(0);
    const [comment, setComment] = useState([]);


    let myRef = React.createRef();

    let plusOne = () => {
        let currentCount = count;
        currentCount++;
        setCount(currentCount);
    }
    let minusOne = () => {
        let currentCount = count;
        currentCount--;
        setCount(currentCount);
    }

    let resetNum = () => {
        let currentCount = count;
        currentCount = 0;
        setCount(currentCount);
    }

    let addComment = () => {
        let commentValue = myRef.current.value;
        let comments = [...comment, commentValue];
        setComment(comments);
        myRef.current.value = '';
    }

    return (
        <>
            <h1>Function way:</h1>
            <div>
                <button onClick={plusOne}>+1</button>

                <span id="result_counter">{count}</span>

                <button onClick={minusOne}>-1</button>

            </div>
            <div>
                <button onClick={resetNum}>reset</button>
            </div>
            <div>
                {count % 2 === 0 ? "even" : "odd"}
            </div>

            <div className="messagges">
                <textarea ref={myRef}></textarea>
            </div>
            <div>
                <button onClick={addComment}>add comment</button>
            </div>
            <div>
                <ul>
                    {comment.map((item, index) => <li key={index.toString()}>{item}</li>)}
                </ul>
            </div>
        </>
    );
}

export default Comp2;