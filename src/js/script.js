"use strict"

const elList = document.querySelector(".wrap-cards_list");

fetch("https://6537a88fbb226bb85dd39095.mockapi.io/student/pokemon")
    .then(res => res.json())
    .then(data => getData(data))

function getData(data) {
    data.forEach(function (item, index) {



        const elItem = document.createElement("li");
        const elImg = document.createElement("img");
        const elImgDiv = document.createElement("img")
        const elSpan = document.createElement("div");
        const elNameDiv = document.createElement("div");
        const elDiv2 = document.createElement("div");
        const elDiv3 = document.createElement("div");
        const elWeightDiv = document.createElement("div");
        const elKgDiv = document.createElement("div");
        const elAgeDiv = document.createElement("div");
        

        elImg.src = item.img
        elImgDiv.src = "./src/assets/svg/heart.svg"
        elDiv2.textContent = item.name
        elDiv3.textContent = item.type
        elKgDiv.textContent = item.weight
        elAgeDiv.textContent = item.avg_spawns + " age"
      

        console.log(elImg);

        elList.append(elItem);
        elItem.append(elImg);
        elItem.append(elImgDiv)
        elItem.append(elSpan);
        elItem.append(elNameDiv);
        elNameDiv.append(elDiv2);
        elNameDiv.append(elDiv3);
        elItem.append(elWeightDiv);
        elWeightDiv.append(elKgDiv);
        elWeightDiv.append(elAgeDiv);


        elItem.classList.add("wrap-cards_item");
        elImg.classList.add("wrap-cards_img");
        elSpan.classList.add("wrap-cards-span");
        elNameDiv.classList.add("wrap-cards_box");
        elDiv2.classList.add("wrap-cards_title");
        elWeightDiv.classList.add("weight-box");
        elKgDiv.classList.add("weight-box_kg");
        elAgeDiv.classList.add("weight-box_age")
        elImgDiv.classList.add("heart")

    });
}

// SCRIPT CREATE ELEMENT



