// import fun from './module.js'


let a = 1;
console.log(a);

const b = 'can not changed';


let [f, e, c, d] = [1, 2, 3, 4];

console.log(f);

let { name } = {
    name: 'name'
}

let content = `${b}dadsaa  dasdsad          



dasdas`

console.log(content)

console.log(name);

// let fn = ()=>{
//     console.log(this)
// }

let fn = function () {
    console.log(this)
}

fn();
function Person() {

}
var p = new Person();


fn.call(p);

n => n * n



function fn1({ host }) {
    console.log(host);
}
fn1({ host: 'host' });

let fn2 = function (...args) {
    console.log(args);
}

fn2([1, 2, 3, 4])

arr1 = [1, 2, 3, 4];
arr2 = [1, 2, 3, 4];

console.log([...arr1, ...arr2])

let s1 = Symbol(1234);
let s2 = Symbol(1234);
console.log(s1 == s2)

// for(let v of arr1){
//     console.log(v)
// }
let gen1 = function () {
    console.log(1)
    return 1
}


let gen2 = function (param) {
    console.log(param)
    console.log(typeof param)
}
function* gen() {
    let t1 = yield gen1();
    yield gen2(2);

}

// let iterator = gen();
// iterator.next();
// iterator.next();
// iterator.next();

for (let v of gen()) {
    console.log(v)
}


const promise = new Promise((resolve, reject) => {
    if (1 === 1) {
        throw 'throw'
        reject(2);
        
    } else {
        resolve(1);
    }
}).then(value => {
    if (value === 1) {
      throw 'throw error'
    }
    else {
       throw 'throw error' 
    }
}).then(value => {
    console.log('success');
}).catch(reason=>{
    console.log(reason+'22222');
})

let se = new Set();
se.add(1);
se.size;

let ma = new Map();
ma.set('k','v');
console.log(ma.get('k'))
ma.clear();
console.log(ma)

class Phone{
    static name;
    a;
    b;
    constructor(){
        // this.a = a 
        // this.b=b
    }
    call(){
        console.log(this.a,this.b)
    }
    get a(){
        return a
    };

    set a(v){
       this.a = v;
    } 

    get b(){
        return b
    };

    set b(v){
       this.b = v;
    } 
}

let ph = new Phone()
ph.a=12
ph.b=12
ph.call()
// ph.getA();

const pro = new Promise((resolve, reject) => {
    if (1 === 1) {
        // throw 'throw'
        resolve(111111); 
        console.log('test')
    } else {
        reject(2);
    }
})


async function fun(){
    try{
       let data =  await pro;
       console.log(data)
    }catch(e){
        console.log(e +"await")
    }
}



// fun();