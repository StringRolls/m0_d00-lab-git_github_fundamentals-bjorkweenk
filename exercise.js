// This file was created live

let hacker1 = "Bjork" ;
console.log(`The drivers name is ${hacker1}`);

let hacker2 ="Marco";
console.log(`The navigators name is ${hacker2}`);

//conditionals 

if(hacker1.length>hacker2.length){
console.log('The driver has the longest name')}

else if(hacker1.length<hacker2.length){
console.log('It seems that the navigator has the longest name')}

else if(hacker1.length == hacker2.length){
console.log('Wow, you both have equally long names, Bjork ')
}

//loops 

let spacedOut = "";
for (let i = 0; i < hacker1.length; i++){ 
    spacedOut = spacedOut.concat(hacker1[i], " ");
    spacedOut.trim();
}
console.log(spacedOut.toUpperCase());

let reversed = "";
for (let i = hacker1.length -1; i >=0; i--){
    reversed += hacker1[i];
}
console.log (reversed)


if(hacker1>hacker2){
    console.log('The drivers name goes first')}
else if (hacker1<hacker2){
    console.log('Yo, the navigator goes first definitely')}
else if (hacker1 == hacker2){
    console.log('What?! You both have the same?')
}