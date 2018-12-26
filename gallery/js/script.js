let gallery = document.querySelector(".gallery");
let slider = document.querySelector(".slider");
let currentSlide = 0;
let prevArr;
let sliderArr;



let pictureArr;
fetch('img.json').then((Response) => {
    if (Response.status != "200") {
        console.log(" file not found");
        return "error";
    }
    return Response.json();
}).then((arr) => {
    //console.log(arr);
    setPictureArr(arr);
})

function setPictureArr(arr) {
    pictureArr = arr;
    setInnerHTML(arr, gallery, "prev", "prev");
    setInnerHTML(arr, slider, "img", "slider");
    slideSelection()

    //console.log("123");
}


function setInnerHTML(arr, node, key, prefix) {

    for (let i in arr) {
        node.innerHTML += (`<img class="${prefix}_img" id="${key}${i}" src="${arr[i][key]}" alt="${prefix}">`)
        console.log(`<img class="${prefix}_img" id="${key}${i}" src="${arr[i][key]}" alt="${prefix}">`)

    }
}

function slideSelection(){
    prevArr = document.querySelectorAll(".prev_img");
    sliderArr = document.querySelectorAll(".slider_img");
    sliderArr[currentSlide].style.opacity = 1;
    for (i = 0; i < prevArr.length; i++) {
        prevArr[i].addEventListener("click", selectPrev);
        console.log(prevArr[i]) 
    }
   
}

function selectPrev(e) {
   sliderArr[currentSlide].style.opacity = 0;
   currentSlide = e.target.id.slice(-1);
   console.log(currentSlide)
   sliderArr[currentSlide].style.opacity = 1;

}