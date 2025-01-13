// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello world from React!"
//     );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// {/* <div id="parent">
//     <div id="child">
//     <h1>I'm an h1 tag</h1>
//     <h2>I'm a child</h2>
//     </div>
// </div> 
// react element ek object hai bhai => HTML(Browser understand)
// */}

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")]

        ),
        React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")]

        )
    );
    //jsx
    
    console.log(parent); //object
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
   

