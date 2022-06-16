const firstName = "hello";
const lastName = "siapa kek";

console.log(firstName + " " + lastName);
arr = [
    1,
    function() {console.log("hi!");}
];
arr[1]();


////////////////

const obj = {};
obj.firstName = "lele";
obj.lastName = "kelelep";
obj.greet = function() {
    console.log("blub blub blub");
};

///////////////////
const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: "key"
    }
};
const o2 = o;
const o3 = Object.assign({}, o);

o2.obj.key = 'NEW VALUE';
o.a = "new value";

console.log(o2.a);
console.log(o3.a);

console.log(o.obj.key);
console.log(o2.obj.key);
console.log(o3.obj.key);