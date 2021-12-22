import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
    // 멤버변수
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    handleAdd = (name) => {
        this.props.onAdd(name);
    };

    render() {
        console.log("habits");
        return (
            <div className="habits">
                <HabitAddForm onAdd={this.handleAdd} />
                <ul>
                    {
                        //JavaScript 사용시 code블럭 {} 사용
                        this.props.habits.map((habit) => (
                            //각각의 습관들을 Habit컴포넌트로 전달을한다.
                            <Habit
                                key={habit.id}
                                habit={habit}
                                //콜백함수로 전달한다.-> handleIncrement변수는 함수를 가르키고있다.
                                //함수는 Object의 일종이다. 그래서 handleIncrement라는 변수는 오른쪽 함수를 가르키기 있기 때문에
                                //아래와같이 함수의 이름을 인자로 전달해주면 함수를 가르키고있는 참조값을 전달 하는 것이므로 함수를 바로
                                //호출하는 것이 아니라 함수를 가르키고있는 참조값만 onIncrement라는 prop으로 전달해주게 된다.
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            />
                        ))
                    }
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>
                    Reset All
                </button>
            </div>
        );
    }
}

export default Habits;
