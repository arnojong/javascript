"use strict";var typeList=document.querySelector(".car-type__list"),form=document.querySelector(".car-search"),typeExist=!1,cars=[{type:"tesla",doors:5,color:"green"},{type:"ferrari",doors:3,color:"red"},{type:"hummer",doors:5,color:"black"},{type:"skoda",doors:5,color:"white"}];console.log(cars);for(var _i=0;_i<cars.length;_i++){var _car=cars[_i],li=document.createElement("li");li.textContent=_car.type,typeList.appendChild(li)}form.addEventListener("submit",function(e){e.preventDefault(),document.querySelector(".car-search__type").value===car.type?alert("Is aanwezig"):alert("Hebben we niet pik")});