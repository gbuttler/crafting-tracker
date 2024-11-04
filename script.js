let nameValue = document.getElementById('name');
let nameCollected = nameValue.value

//method 1, where you don't have an 'onSubmit' function
document.getElementById('craftingForm').addEventListener('submit', 
    function(event) {
        // Handle the form data
        event.preventDefault();
        document.getElementById("demo").innerHTML = `My name is ${event.target.name.value}`;
});

//method 2, where you have a function attached to 'onSubmit'
// const submitFunction = (event) => {
//     event.preventDefault();
//     document.getElementById("demo").innerHTML = `My name is ${event.target.name.value}`;
//     console.log(event.target.name.value);
// }


//create simple function that alerts when submit is clicked
//create simple function to display name in demo when submit is clicked
//add in radio buttons for project type
//create simple function to display name and project type in demo
//create sql database that is linked and send data from for to there (as well as displaying most recent data)
//have a button to call the database data and see all entries, sorted most recent to oldest.
//add CSS