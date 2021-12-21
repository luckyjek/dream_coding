import React, { Component } from "react";

class HabitAddForm extends Component {
    onSubmit = (event) => {
        //기본적으로 Submit이 발생하게되면 페이지가 리프레쉬 되거나 다른 페이지로 가는 걸 예상하고있다.
        //따라서 preventDefault(); 라는 브라우저의 기본 기능을 취소해준다.
        event.preventDefault();
        console.log("submit!!");
    };
    render() {
        return (
            //form에서는 button이 눌려지면, submit이라는 이벤트가 발생.
            //form이 다 완료가 돼서 사용자가 버튼을 누르면 onSubmit이라는 함수를 호출
            <form className="add-form" onSubmit={this.onSubmit}>
                <input type="text" className="add-input" placeholder="Habit" />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
