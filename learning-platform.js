let page_1 = document.getElementById("page1")
let freeCourseSection = document.getElementById("freeCourses");
let paidCourseSection = document.getElementById("PaidCourses");
let F_btn = document.getElementById("F_btn");
let P_btn = document.getElementById("P_btn");
let moda1_p = document.getElementById("modal")
// let btn_card = document.getElementsByClassName("btn-card");

let freeCourses = document.getElementsByClassName("card-free-courses")
let PaidCourses = document.getElementsByClassName("card-paid-courses")


let filteredFreeCourses;
let filteredPaidCourses;

freeCourseSection.style.display = "none";
paidCourseSection.style.display = "none";
moda1_p.style.display = "none";




function showP() {
    moda1_p.style.display = "none";

    paidCourseSection.style.display = "";
    freeCourseSection.style.display = "none";
    page_1.style.display = "none";
}

function showF() {
    moda1_p.style.display = "none";

    freeCourseSection.style.display = "";
    paidCourseSection.style.display = "none";
    page_1.style.display = "none";
}
function modalShow() {
    moda1_p.style.display = "";
    paidCourseSection.style.display = "none";
    freeCourseSection.style.display = "none";



}


function back_1() {
    moda1_p.style.display = "none";
    paidCourseSection.style.display = "none";
    freeCourseSection.style.display = "none";
    page_1.style.display = "";


}

F_btn.oninput = function () {
    let value = this.value.toLowerCase();
    filteredFreeCourses = Array.from(freeCourses).filter((f) => {
        f.dataset.duration.toLowerCase().includes(value) ||
            f.dataset.price.toLowerCase().includes(value) ||
            f.dataset.name.title.toLowerCase().includes(value);
    })
    if (filteredFreeCourses.length == 0) {
        filteredFreeCourses = Array.from(freeCourses);
        filteredFreeCourses.style.display = "";

    }
    filteredFreeCourses.style.display = "";

}
P_btn.oninput = function () {
    let value = this.value.toLowerCase();
    filteredPaidCourses = Array.from(PaidCourses).filter((F) => {
        F.dataset.duration.toLowerCase().includes(value) ||
            F.dataset.price.toLowerCase().includes(value) ||
            F.dataset.name.title.toLowerCase().includes(value);
    })
    if (filteredPaidCourses.length == 0) {
        filteredPaidCourses = Array.from(PaidCourses);
        filteredPaidCourses.style.display = "";

    }
    filteredPaidCourses.style.display = "";

}
