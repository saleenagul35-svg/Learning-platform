let page_1 = document.getElementById("page1")
let freeCourseSection = document.getElementById("freeCourses");
let paidCourseSection = document.getElementById("PaidCourses");
let F_btn = document.getElementById("F_btn");
let P_btn = document.getElementById("P_btn");
let moda1_p = document.getElementById("modal")
let CheckOut = document.getElementById("CheckOut");


let freeCourses = document.getElementsByClassName("card-free-courses")
let PaidCourses = document.getElementsByClassName("card-paid-courses")


let filteredFreeCourses = Array.from(freeCourses);
let filteredPaidCourses = Array.from(PaidCourses);

// freeCourseSection.style.display = "none";
// paidCourseSection.style.display = "none";

filteredFreeCourses.forEach(q =>
    q.style.display = "none"
)
filteredPaidCourses.forEach(a =>
    a.style.display = "none"
)

F_btn.style.display = "none";
P_btn.style.display = "none";

moda1_p.style.display = "none";




function showP() {
    moda1_p.style.display = "none";

    // paidCourseSection.style.display = "";
    // freeCourseSection.style.display = "none";
    filteredFreeCourses.forEach(q =>
        q.style.display = "none"
    )
    filteredPaidCourses.forEach(a =>
        a.style.display = ""
    )
    F_btn.style.display = "none";
    P_btn.style.display = "";




    page_1.style.display = "none";
}

function showF() {
    moda1_p.style.display = "none";

    // freeCourseSection.style.display = "";

    P_btn.style.display = "none";
    F_btn.style.display = "";
    filteredFreeCourses.forEach(q =>
        q.style.display = ""
    )
    filteredPaidCourses.forEach(a =>
        a.style.display = "none"
    )




    // paidCourseSection.style.display = "none";
    page_1.style.display = "none";
}
function modalShow() {
    moda1_p.style.display = "";
    // paidCourseSection.style.display = "none";
    // freeCourseSection.style.display = "none";
    filteredFreeCourses.forEach(q =>
        q.style.display = "none"
    )
    filteredPaidCourses.forEach(a =>
        a.style.display = "none"
    )

    F_btn.style.display = "none";
    P_btn.style.display = "none";
    function modalContent() {
        let item = this.closest(".card-paid-courses");
        document.querySelector(".modal-title").textContent = item.dataset.title;
        document.getElementById("Modal_instructor").textContent = item.dataset.instructor;
        document.getElementById("Modal_duration").textContent = item.dataset.duration;
        document.getElementById("Modal_price").textContent = item.dataset.price;
    }
    modalContent();


}




function back_1() {
    moda1_p.style.display = "none";
    // paidCourseSection.style.display = "none";
    // freeCourseSection.style.display = "none";
    filteredFreeCourses.forEach(q =>
        q.style.display = "none"
    )
    filteredPaidCourses.forEach(a =>
        a.style.display = "none"
    )
    F_btn.style.display = "none";
    P_btn.style.display = "none";
    page_1.style.display = "";


}
let filtered_1

F_btn.oninput = function () {
    let value = this.value.toLowerCase();
    filteredFreeCourses.forEach(q =>
        q.style.display = "none"
    )
    filtered_1 = Array.from(freeCourses).filter(f =>
        f.dataset.duration.toLowerCase().includes(value) ||
        f.dataset.price.toLowerCase().includes(value) ||
        f.dataset.title.toLowerCase().includes(value)
    )
    if (filtered_1.length == 0) {
        filteredFreeCourses = Array.from(freeCourses);
        filteredFreeCourses.forEach(q =>
            q.style.display = ""
        )


    }
    filtered_1.forEach(q =>
        q.style.display = ""
    )



}
let filtered_2
P_btn.oninput = function () {
    let value = this.value.toLowerCase();
    filteredPaidCourses.forEach(a =>
        a.style.display = "none"
    )
    filtered_2 = Array.from(PaidCourses).filter(F =>
        F.dataset.duration.toLowerCase().includes(value) ||
        F.dataset.price.toLowerCase().includes(value) ||
        F.dataset.title.toLowerCase().includes(value)
    )
    if (filtered_2.length == 0) {
        filteredPaidCourses = Array.from(PaidCourses);
        filteredPaidCourses.forEach(a =>
            a.style.display = ""
        )

    }
    filtered_2.forEach(a =>
        a.style.display = ""
    )

}
let item

document.querySelectorAll(".btn-card").forEach(btn =>
    btn.onclick = function () {


        item = this.closest("#card-m");
        document.querySelector(".modal-title").textContent = item.dataset.title;
        document.getElementById("Modal_instructor").textContent = "Instructor Name: " + item.dataset.name;
        document.getElementById("Modal_duration").textContent = "Course Duration: " + item.dataset.duration;
        document.getElementById("Modal_price").textContent = "Course Fee: Rs." + item.dataset.price;

        moda1_p.style.display = "";
        // paidCourseSection.style.display = "none";
        // freeCourseSection.style.display = "none";
        filteredFreeCourses.forEach(q =>
            q.style.display = "none"
        )
        filteredPaidCourses.forEach(a =>
            a.style.display = "none"
        )

        F_btn.style.display = "none";
        P_btn.style.display = "none";


    })
    CheckOut.onclick = function() {
        

    let section = document.createElement("section");
    section.classList.add("contact");

    let form = document.createElement("form");
    form.classList.add("contact-Form");
    form.setAttribute("action", "#");
    form.setAttribute("method", "post");

    let label1 = document.createElement("label");
    label1.textContent = "Name";
    let input1 = document.createElement("input");
    input1.classList.add("contact-Form-input");
    input1.setAttribute("placeholder", "your Name")
    input1.setAttribute("type", "text");
    input1.setAttribute("required", "");

    let label2 = document.createElement("label");
    label2.textContent = "Surname";
    let input2 = document.createElement("input");
    input2.classList.add("contact-Form-input");
    input2.setAttribute("placeholder", "your surname")
    input2.setAttribute("type", "text");
    input2.setAttribute("required", "");

    let label3 = document.createElement("label");
    label3.textContent = "Email";
    let input3 = document.createElement("input");
    input3.classList.add("contact-Form-input");
    input3.setAttribute("placeholder", "your email address")
    input3.setAttribute("type", "email");
    input3.setAttribute("required", "");

    let label4 = document.createElement("label");
    label4.textContent = "Contact Number";
    let input4 = document.createElement("input");
    input4.classList.add("contact-Form-input");
    input4.setAttribute("placeholder", "123-45-678")
    input4.setAttribute("type", "tel");
    input4.setAttribute("required", "");

    let btn_sub = document.createElement("button");
    btn_sub.classList.add("submit-btn")
    btn_sub.setAttribute("type", "submit");
    btn_sub.textContent = "Submit";


    section.appendChild(form);
    form.appendChild(label1);
    form.appendChild(input1);
    form.appendChild(label2);
    form.appendChild(input2);
    form.appendChild(label3);
    form.appendChild(input3);
    form.appendChild(label4);
    form.appendChild(input4);
    form.appendChild(btn_sub);
    document.body.appendChild(section);

    moda1_p.style.display = "none";
 


}



