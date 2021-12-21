import React, { Component } from "react";

//하나의 습관을 보여줄 수 있는 가장 작은 단위의 컴포넌트를 만들어 놓았다.
//부모 컴포넌트로부터 props로 props로 전달받은 '습관의 데이터를 보여주기'만 하는 컴포넌트이기 때문에

class Habit extends Component {
    // 멤버변수
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };
    render() {
        //외부로부터 받아온 데이터는 props라는 클래스안에 있는 데이터에 저장되어진다.
        // console.log(this.props.habitArray);
        //const habitName = this.props.habitArray
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button
                    className="habit-button habit-increase"
                    onClick={this.handleIncrement}
                >
                    <i className="fas fa-plus-square"></i>
                </button>
                <button
                    className="habit-button habit-decrease"
                    onClick={this.handleDecrement}
                >
                    <i className="fas fa-minus-square"></i>
                </button>
                <button
                    className="habit-button habit-delete"
                    onClick={this.handleDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;
