//정답과 printYes and printNo expretion을 전달해야된다.
function rendomQuiz(answer, printYes, printNo) {
    if (answer === "love you") {
        printYes();
    } else {
        printNo();
    }
}

//anonymous function
//printYes와 printNo라는 변수에 각각 함수를 할당해놓았다.
const printYes = function () {
    console.log("yes!");
};

//named function
//better debugging in debugger's stack traces
//recursions - 함수 자기자신을 스스로를 호출할때 사용(프로그램 죽음..)
const printNo = function print() {
    console.log("No!");
    // print();
};

//그래서  answer과 callback함수들을 각각 전달하게된다.
rendomQuiz("wrong", printYes, printNo);
rendomQuiz("love you", printYes, printNo);

//--------------------------------------------------------

//Arrow function
//always anonymous
const simplePrint = function () {
    console.log("simplePrint!");
};
const simplePrinta = () => console.log("simplePrint!2");
simplePrinta();

const add = (a, b) => a + b;
const add2 = function (a, b) {
    return a + b;
};

const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
};

//IIFE:Immediately Invoked Function Expression
(function hello() {
    console.log("IIFE");
});

function calculate(command, a, b) {
    switch (command) {
        case "add":
            return a + b;
        case "substract":
            return a - b;
        case "divide":
            return a / b;
        case "multiply":
            return a + b;
        case "remainder":
            return a % b;
        default:
            throw Error("unkonwn command");
    }
}
console.log(calculate("divide", 2, 3));
//----------------------------------------------------

// Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._anohter;
    }
    set age(value) {
        this._anohter = value < 0 ? 0 : value;
    }
}

const user1 = new User("Stave", "Job", -11);
console.log(user1.age);

//----------------------------------------------------

const elin = { name: "elintest", age: 4 };

// 2. Computed properties
// key should be always string
//정확하게 어떤 key가 필요한지 모를때 즉, Runtime에서 결정될때 사용.
//따라서 코딩할때는  .을써서 출력,
//실시간으로 원하는 key의 값을 받아오고 싶다면 []사용.
console.log(elin.name);
console.log(elin["name"]); //string타입 즉, 키는 ' '를 지정해서 받아와야한다.

//------------------방법1
elin.hasJob = true;
delete elin.hasJob;
console.log(elin.hasJob);

//-------------------방법2
//위와 동일하게 Computed properties 사용하여
// elin이라는 Object에 hasJob이라는 property추가
elin["hasJob"] = true;
console.log(elin.hasJob);

//--------------------사용자에게 원하는 key를 input받아서 출력해야되는 함수이다.
//그러면 이 key는 코딩하는 시점에는 개발자가 알 수 없다.
function printValue(obj, key) {
    //Object에 key라는 property가 들어있니?
    // console.log(obj.key);//아니 ? 없엉 ㅠㅠ
    //그래서 아래와 같이 Computed properties를사용한다.
    console.log(obj[key]);
}
//key는 항상 ""(string type)으로 전달해야한다.
printValue(elin, "name");
printValue(elin, "age"); //다양한 key들을 변경해서 출력할 수도있다.

//나중에 동적으로 key의 관련된 value를 받아와야될때 유용하게 쓰일 수 있다.

//-----------------------------------------------------------
//in operatoer : property existence check (key in obj)
console.log("name" in elin);
console.log("random" in elin);

console.clear();
//-----------------------------------------------------------
//for...in vs for..of
for (key in elin) {
    console.log(key);
}

//Objrect를 사용하는 것이 아닌 배열 list와같은 순차적으로 리터러블한 아이들을 사용
//array에 있는 모든 값들이 value에 할당되면서 블럭안에서 순차적으로 출력하거나
//값을 계산할 수 있다.
const array = [1, 2, 3, 4];
for (value of array) {
    console.log(value);
}

//-----------------------------------------------------------
//Fun cloning
//Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name: "elin", age: "20" };
const user2 = user;
console.log(user);

//old way --object를 복사 할 수 있는 방법이 있나요?
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

//assign의 interface를 살펴보니 여러개의 sorce를 전달할 수도있었다
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
//mixed의 color와 size는 무엇이 출력될까?
console.log(mixed.color); //blue
console.log(mixed.size); //big
//왜냐하면 뒤에 나오는 아이일수록 앞에 동일한 property가 있다면 값이 계속 덮어
//씌워지기 때문이다.
