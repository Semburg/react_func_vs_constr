import React from 'react';

class Comp1 extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            comment: []
        }
        this.myRef = React.createRef();
    }

    plusOne = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({count: currentCount})
    }
    minusOne = () => {
        let currentCount = this.state.count;
        currentCount--;
        this.setState({count: currentCount}) 
    }
    resetNum = () => {
        let currentCount = this.state.count;
        currentCount = 0;
        this.setState({count: currentCount}) 
    }

    addComment = () => {
        let comment = this.myRef.current.value;
        let comments = this.state.comment;
        comments.push(comment);
        this.setState({
            "comments": comments
        })
        this.myRef.current.value = ""
    }

    render() {
        return (

            <>
                <h1>Classes way:</h1>
                <div>
                    <button onClick={this.plusOne}>+1</button>
                    
                    <span id="result_counter">{this.state.count}</span>

                    <button onClick={this.minusOne}>-1</button>

                </div>
                <div>
                    <button onClick={this.resetNum}>reset</button>
                </div>
                <div>
                    {this.state.count %2 ===0? "even":"odd"}
                </div>

                <div className ="messagges">
                    <textarea ref={this.myRef}></textarea>
                </div>
                <div>
                    <button onClick={this.addComment}>add comment</button>
                </div>
                <div>
                    <ul>
                        {this.state.comment.map((item, index) => <li key={index.toString()}>{item}</li>)}
                    </ul>
                </div>

            </>

        );
    }
}

export default Comp1;