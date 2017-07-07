import $ from 'jquery';
import './style.scss'
// var img1 = document.createElement("img");
let img1 = require("./adBanner.jpg")
//console.log(img1)

function component() {
  var element = document.createElement('div');
// Lodash, now imported by this script
  element.innerHTML = 'hello world'
  return element;
}
function insertImg(img){
  let $img = $(`<img src= ${img}> `).appendTo($('body'))
  return function (){
    console.log('insert')
  }
  
}

document.body.appendChild(component());
insertImg(img1);