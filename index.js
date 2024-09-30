document.getElementById("demoForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const skill = document.getElementById("skill").value;

    if (name && skill) {
        alert(`Hello ${name}, your selected skill is ${skill}.`);

        // Ubah warna header dan footer
        document.getElementById("pageHeader").style.backgroundColor = "#1E90FF"; 
        document.getElementById("pageFooter").style.backgroundColor = "#1E90FF";    
    } else {
        alert("Please enter your name and select a skill.");
    }
});