// Creates a component called Pet
// This component creates a div with 3 children that we pass in as arrays. These children are a 1 h1 element and 2 h2 elements
const Pet = () =>{
  return React.createElement("div", {},[
    React.createElement("h1", null, "Jasper"),
    React.createElement("h2", null, "Dog"),
    React.createElement("h2", null, "Medium")
    ]);
};

// Upgrading the Pet function now and making PetPlus.
// PetPlus can take in arguments and not just have hard coded values in there. These are called Props(Properties)
// Props are objects that we can pass into the component.
const PetPlus = (props) =>{
  return React.createElement("div", null, [
    React.createElement("h1", null, props.name),
    React.createElement("h2", null, props.animal),
    React.createElement("h2", null, props.size)
  ]);
};

// Creates a component called App
// The functionality of the function is to return a parent div with a child h1 element that has some text in it
const App = () =>{
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(PetPlus, {
    //passing parameters to props object.
      name: "Luna",
      animal: "Cat",
      size: "Medium"}),
    React.createElement(PetPlus, {
      name: "Harry",
      animal: "Parrot",
      size: "Small"}),
    React.createElement(PetPlus, {
      name: "Jonathan",
      animal: "Elephant",
      size: "Quite Gigantic"}),  
    React.createElement(Pet)
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));