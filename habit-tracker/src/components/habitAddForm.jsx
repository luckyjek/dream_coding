import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();
    onSubmit = (event) => {
        //기본적으로 Submit이 발생하게되면 페이지가 리프레쉬 되거나 다른 페이지로 가는 걸 예상하고있다.
        //따라서 preventDefault(); 라는 브라우저의 기본 기능을 취소해준다.
        event.preventDefault();
        const name = this.inputRef.current.value; //현재 있는 요소의 value를 읽어온다.
        name && this.props.onAdd(name);
        // this.inputRef.current.value = "";
        this.formRef.current.reset();
    };
    render() {
        console.log("habitsAddForm");
        return (
            //form에서는 button이 눌려지면, submit이라는 이벤트가 발생.
            //form이 다 완료가 돼서 사용자가 버튼을 누르면 onSubmit이라는 함수를 호출
            <form
                ref={this.formRef}
                className="add-form"
                onSubmit={this.onSubmit}
            >
                <input
                    ref={this.inputRef}
                    type="text"
                    className="add-input"
                    placeholder="Habit"
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
