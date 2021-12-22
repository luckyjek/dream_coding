import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
    state = {
        habits: [
            { id: 1, name: "Reading", count: 0 },
            { id: 2, name: "Running", count: 0 },
            { id: 3, name: "Coding", count: 0 },
        ],
    };

    handleIncrement = (habit) => {
        // console.log(habit);
        // console.log(`handleIncrement ${habit.name}`);
        //...연산자-> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        const habits = this.state.habits.map((item) => {
            if (item.id === habit.id) {
                return { ...habit, count: habit.count + 1 };
            }
            return item;
        });
        this.setState({ habits }); //value에서 쓰인것은 로컬에있는 habits!
    };

    handleDecrement = (habit) => {
        const habits = this.state.habits.map((item) => {
            if (item.id === habit.id) {
                const count = habit.count - 1;
                return { ...habit, count: count < 0 ? 0 : count };
            }
            return item;
        });
        this.setState({ habits });
    };

    handleDelete = (habit) => {
        const habits = this.state.habits.filter((item) => item.id !== habit.id);
        this.setState({ habits });
    };

    handleAdd = (name) => {
        const habits = [
            ...this.state.habits,
            { id: Date.now(), name, count: 0 },
        ];
        this.setState({ habits });
    };

    handleReset = () => {
        //habits를 빙글빙글 돌며 새롭게 데이터를 만들거기 때문에
        //map을 이용해야한다.
        const habits = this.state.habits.map((habit) => {
            if (habit.count !== 0) {
                return { ...habit, count: 0 };
            }
            return habit;
        });
        this.setState({ habits });
    };

    render() {
        return (
            <>
                <Navbar
                    totalCount={
                        this.state.habits.filter((item) => item.count > 0)
                            .length
                    }
                />
                <Habits
                    habits={this.state.habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                    onReset={this.handleReset}
                />
            </>
        );
    }
}

export default App;
