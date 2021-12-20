import React, { Component } from "react";

class Habit extends Component {
    //첫번째 컴포넌트에 생명력 불어넣어주자!( 동적으로 만들자! )
    state = {
        count: 0,
    };

    // 멤버변수
    handleIncrement = () => {
        //handleIncrement는 state오브젝트 안에 있는 count를증가 한뒤 state를 업데이트 한다.
        // this.state.count += 1; <-그냥 이렇게 오브젝트 안에있는 데이터를 하게되면 리액트는
        //업체이트가 됐는지 안됐는지 모른다.
        //그래서 꼭! state를 update할때는 리엑트에서 제공하는 이 setState라는 함수를 호출해줘야한다.
        //따라서 부분적으로 데이터를 업데이트 할 수 없고,
        //이렇게 전체적인 state를 업데이트 해줘야 '리엑트가 state가 변경이 되었구나! render함수를 다시 호출하자! 라고 알 수 있다.'
        this.setState({ count: this.state.count + 1 });
    };
    handleDecrement = () => {
        const count = this.state.count - 1;
        this.setState({ count: count < 0 ? 0 : count });
    };
    render() {
        return (
            <li className="habit">
                <span className="habit-name">Reading</span>
                <span className="habit-count">{this.state.count}</span>
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
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;
