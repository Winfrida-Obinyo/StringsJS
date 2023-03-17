let a = "beautiful";
console.log(b.length);
console.log(b[-4])

const food = "I was feeling hungry today";
const stringa = "eat";
console.log(food[4]);
const result = `I was ${stringa} feeling hungry today`;
console.log(result);


"the"
"brown"
const story = "The quick brown fox jumps over the lazy dog";
console.log(story.match(/the/g).length);
console.log(story.match(/brown/g).length);

const string1 = "We are now going to school";
console.log(string1.includes("now"));
const string2 = "The child was sitting on the table before it fell";
console.log(string2.includes("sitting"));


let w
= "wonderful"
console.log(w.toUpperCase());

let i = "amazing"
let e = "BEneath"
console.log(i.toLocaleLowerCase());
console.log(e.toLocaleLowerCase());

let f="A beautiful wedding";
    f=f.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
       console.log(f);