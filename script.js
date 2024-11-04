//method 1, where you don't have an 'onSubmit' function
document.getElementById('craftingForm').addEventListener('submit', 
    function(event) {
        event.preventDefault();
        document.getElementById("projectName").innerHTML = `My project is called ${event.target.name.value}`;
        document.getElementById("craftType").innerHTML = `I will be ${event.target.medium.value} this project`;

});

//method 2, where you have a function attached to 'onSubmit'
// const submitFunction = (event) => {
//     event.preventDefault();
//     document.getElementById("projectName").innerHTML = `My name is ${event.target.name.value}`;
//     console.log(event.target.name.value);
// }


