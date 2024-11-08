let projectObject = {};

//method 1, where you don't have an 'onSubmit' function
document.getElementById('craftingForm').addEventListener('submit', 
    function(event) {
        event.preventDefault();
        projectObject.projectName = event.target.name.value
        projectObject.projectMedium = event.target.medium.value
        document.getElementById("projectName").innerHTML = `My project is called ${projectObject.projectName}`;
        document.getElementById("craftType").innerHTML = `I will be ${projectObject.projectMedium} this project`;

});

//method 2, where you have a function attached to 'onSubmit'
// const submitFunction = (event) => {
//     event.preventDefault();
//     document.getElementById("projectName").innerHTML = `My name is ${event.target.name.value}`;
//     console.log(event.target.name.value);
// }

