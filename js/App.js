//const heading = React.createElement('h1', {}, 'Hello, React!');

const parent = React.createElement('div', {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1",{}, "child1 content"),
        React.createElement("h2", {}, "child1 content")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "Child2 content"),
        React.createElement("h2", {}, "Child2 content")
    ])
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);