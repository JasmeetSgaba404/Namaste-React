const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// creating a div within a div in react or aka nested elements

const parent = React.createElement("div", { id: "parent" },
[
    React.createElement("div", { id: "child" },
    [
        React.createElement("h1", { class: "blue" }, "Hello from 2 divs"),
        React.createElement("h2", {}, "Pehle bhi main")
    ]),
    React.createElement("div", { id: "child2" },
    [
        React.createElement("h1", { class: "blue" }, "Hello from 4 divs"),
        React.createElement("h2", {}, "Tumse mila hoon")
    ])
])

const root2 = ReactDOM.createRoot(document.getElementById("parent"));
root2.render(parent);