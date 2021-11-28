var studentObject = [
    {   
        name: "Camila Lordelo",
        color: "#fd1087"
    },
    {   
        name: "Carlos Eduardo",
        color: "#ffc107"
    },
    {   
        name: "Diego Rodrigo",
        color: "#0d68f0"
    }
]

var student = document.getElementById("students");

for (var i2 = 0; i2 <= studentObject.length; i2++) {
    student.innerHTML += 
    `<div class="d-flex align-items-center justify-content-center">
        <div class=""> 
            <div style="background-color: ${studentObject[i2].color};" class="circle d-flex align-items-center justify-content-center"> <i style="color: white;" class="bi bi-person-fill"></i> </div> 
        </div>
        <div class="ms-3">
            <h5 class="fw-light mt-2"> ${studentObject[i2].name} </h5>
        </div>
    </div>
`};



