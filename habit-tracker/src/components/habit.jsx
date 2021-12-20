import React, { Component } from "react";

//하나의 습관을 보여줄 수 있는 가장 작은 단위의 컴포넌트를 만들어 놓았다.
//부모 컴포넌트로부터 props로 props로 전달받은 '습관의 데이터를 보여주기'만 하는 컴포넌트이기 때문에

class Habit extends Component {
    // 멤버변수
    handleIncrement = () => {
        //handleIncrement는 state오브젝트 안에 있는 count를증가 한뒤 state를 업데이트 한다.
        // this.state.count += 1; <-그냥 이렇게 오브젝트 안에있는 데이터를 하게되면 리액트는
        //업체이트가 됐는지 안됐는지 모른다.
        //그래서 꼭! state를 update할때는 리엑트에서 제공하는 이 setState라는 함수를 호출해줘야한다.
        //따라서 부분적으로 데이터를 업데이트 할 수 없고,
        //이렇게 전체적인 state를 업데이트 해줘야 '리엑트가 state가 변경이 되었구나! render함수를 다시 호출하자! 라고 알 수 있다.'
        // console.log(this.props);
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
        const { name, count } = this.props.habitArray;
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
