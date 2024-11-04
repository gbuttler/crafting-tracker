let projectArray = []
let mediumArray = []

//method 1, where you don't have an 'onSubmit' function
document.getElementById('craftingForm').addEventListener('submit', 
    function(event) {
        event.preventDefault();
        projectArray.push(event.target.name.value)
        mediumArray.push(event.target.medium.value)
        console.log(projectArray)
        console.log(mediumArray)
        document.getElementById("projectName").innerHTML = `My list of projects are: ${projectArray}`;
        document.getElementById("craftType").innerHTML = `I will be using these mediums: ${mediumArray} `;

});

//method 2, where you have a function attached to 'onSubmit'
// const submitFunction = (event) => {
//     event.preventDefault();
//     document.getElementById("projectName").innerHTML = `My name is ${event.target.name.value}`;
//     console.log(event.target.name.value);
// }


