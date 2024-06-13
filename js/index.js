// fun();
// console.log(fun)
// function fun(){
//     console.log(1);
// }

// var a = function(){
//     console.log("a")
// }

// console.log(a)

// function Person(name){
//     // this.name= name;
//     this.__proto__.name = name
// }

// var p = new Person("name")

// console.log(p.__proto__==Person.prototype)

// console.log(p.hasOwnProperty("name"))

// var arr =new Array();

// arr[arr.length] =1;

// arr[arr.length] =2;
// console.log(arr.join(","));

// arr.forEach(function(value , index , obj){  
//   console.log(value)
//   console.log(index)
// //   console.log(obj)
// })

// var str ="121aadsasfasfasdda"

// console.log(str.match(/a{2,3}/ig))


// var s = "        	f    afa    ";   
// s = s.replace(/^\s*|\s*$/g,"");  

// console.log(s)

window.onload = function (e) {


    var btn = document.getElementById('btn');

    var root = document.getElementById('root');


    btn.onclick = function (event) {

        var rn = document.createElement('span')
        rn.innerHTML = 1111
        console.log(window.getComputedStyle(rn, null));

        this.appendChild(rn)
        console.log(event.clientX)
        console.log(event.target)
        event.cancelBubble = true
        console.log(navigator)
        console.log(history)
        location.reload()
    };

    console.log(btn.clientHeight, btn.offsetHeight, btn.offsetParent, btn.offsetLeft, btn.scrollHeight, btn.scrollWidth, btn.scrollTop, btn.scrollLeft)
    console.log(e.clientX)

    // btn.addEventListener("click",function(){  
    //     alert(1);  
    // },false); 

    btn.onmousedown = function (event) {



        return false;
        var rn = document.createElement('span')
        rn.innerHTML = 1111
        console.log(window.getComputedStyle(rn, null));

        this.appendChild(rn)
        console.log(event.clientX)
        console.log(event.target)
        event.cancelBubble = true
    };

    var num = 1;
    var timer = setInterval(function () {
        console.log(num);
        num++;
        if (num == 11) {
        
            clearInterval(timer);
        }
    }, 1000);
}
var a = {1:2,2:3}
var obj2 = '{"arr":[1,2,3]}';
var b = JSON.parse(obj2)
console.log(b)

console.log(eval("("+obj2+")"))
console.log(localStorage)
console.log(JSON.stringify(a))


