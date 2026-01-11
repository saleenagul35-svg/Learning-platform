let page_1 = document.getElementById("page1")
let freeCourseSection = document.getElementById("freeCourses");
let paidCourseSection = document.getElementById("PaidCourses");
let F_btn = document.getElementById("F_btn");
let P_btn = document.getElementById("P_btn");
let moda1_p = document.getElementById("modal")
let CheckOut = document.getElementById("CheckOut");
// let billingSection = document.getElementsByClassName("billing-section");



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
// billingSection.style.display="none";




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

let btn_sub;
let section;

CheckOut.onclick = function () {


    section = document.createElement("section");
    section.classList.add("contact");
    section.id = "FCID"

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
    input4.setAttribute("placeholder", "0300-7708470")
    input4.setAttribute("type", "tel");
    input4.setAttribute("required", "");

    let label5 = document.createElement("label");
    label5.textContent = "City";
    let input5 = document.createElement("input");
    input5.classList.add("contact-Form-input");
    input5.setAttribute("placeholder", "City")
    input5.setAttribute("type", "text");
    input5.setAttribute("required", "");


    let label6 = document.createElement("label");
    label6.textContent = "Address";
    let input6 = document.createElement("input");
    input6.classList.add("contact-Form-input");
    input6.setAttribute("placeholder", "Address")
    input6.setAttribute("type", "text");
    input6.setAttribute("required", "");

    let h2 = document.createElement("h2");
    h2.textContent = "Payment";
    let p1 = document.createElement("p");
    p1.classList.add("contact-Form-input");
    p1.textContent = "Accepted Cards";

    let span1 = document.createElement("span");
    span1.textContent = "💳";
    let span2 = document.createElement("span");
    span2.textContent = "🪪";

       let label7 = document.createElement("label");
    label7.textContent = "Name on Card";
    let input7 = document.createElement("input");
    input7.classList.add("contact-Form-input");
    input7.setAttribute("placeholder", "Jack")
    input7.setAttribute("type", "text");
    input7.setAttribute("required", "");

           let label8 = document.createElement("label");
    label8.textContent = "Credit card number";
    let input8 = document.createElement("input");
    input8.classList.add("contact-Form-input");
    input8.setAttribute("placeholder", "1111-2222-3333-4444")
    input8.setAttribute("type", "text");
    input8.setAttribute("required", "");


    btn_sub = document.createElement("button");
    btn_sub.id = "ProceedToCheckOut"
    btn_sub.classList.add("submit-btn")
    btn_sub.setAttribute("type", "submit");
    btn_sub.textContent = "Proceed To Checkout";


    section.appendChild(form);
    form.appendChild(label1);
    form.appendChild(input1);
    form.appendChild(label2);
    form.appendChild(input2);
    form.appendChild(label3);
    form.appendChild(input3);
    form.appendChild(label4);
    form.appendChild(input4);
    form.appendChild(label5);
    form.appendChild(input5);
    form.appendChild(label6);
    form.appendChild(input6);
    // if(){

    // }
    form.appendChild(h2);
    form.appendChild(p1);
    form.appendChild(span1);
    form.appendChild(span2);
    form.appendChild(label7);
    form.appendChild(input7);
    form.appendChild(label8);
    form.appendChild(input8);
    form.appendChild(btn_sub);
    document.body.appendChild(section);

    moda1_p.style.display = "none";
    form.addEventListener("submit",function(event){
        event.preventDefault();
    })



}
btn_sub.onclick=function(){
   let heading = document.createElement("h1");
   heading.textContent="Congratulation! You got addmission."
   heading.classList.add("contact-Form");
   section.style.display="none";

    
}



