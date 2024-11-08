let projectObject = {};

//method 1, where you don't have an 'onSubmit' function
document.getElementById('craftingForm').addEventListener('submit', 
    function(event) {
        event.preventDefault();
        console.log('I am submitted')
        const projectDesc = document.getElementById('projectDescription')
        para = document.createElement('p');
        para.setAttribute("class", "projectSummary");
        projectDesc.appendChild(para);
        projectObject.projectName = event.target.name.value
        projectObject.projectMedium = event.target.medium.value
        para.innerHTML = `My project is called ${projectObject.projectName} and I'm going to be ${projectObject.projectMedium} it`;
});

//method 2, where you have a function attached to 'onSubmit'
// const submitFunction = (event) => {
//     event.preventDefault();
//     document.getElementById("projectName").innerHTML = `My name is ${event.target.name.value}`;
//     console.log(event.target.name.value);
// }

