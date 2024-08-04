const mainPic = document.getElementById("mainPic") ;
const scrollingPics = document.querySelector(".scrollingPics ul") ;
const picTitle = document.getElementById("title") ;
const picDescription = document.getElementById("description") ;

function showPics() {
    var mainList = "" ;
    fetch("./../cities.json")
    .then((res) => res.json())
    .then((data) => {
        
        mainPic.src = `${data[0].info[0].src}` ;
        picTitle.innerText = data[0].info[0].name ;
        picDescription.innerText = data[0].info[0].description ;
        
        for (let i = 0; i < data[0].info.length; i++) {
            mainList += `
            <li>
            <img src="${data[0].info[i].src}" alt="">
            </li>
            `
        }
        scrollingPics.innerHTML = mainList ;

        const picList = document.querySelectorAll(".scrollingPics ul li")
        picList.forEach((value , index) => {
            value.addEventListener("click" , ()=> {
                mainPic.src = `${data[0].info[index].src}` ;
                picTitle.innerText = data[0].info[index].name ;
                picDescription.innerText = data[0].info[index].description ;
            })
        })
    })
}

showPics() ;