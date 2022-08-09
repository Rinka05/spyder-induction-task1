
let man = ["","🙂" ,"👷🏻‍♀️","🤷🏻‍♀️" ,"🚶🏻‍♂️"];
let playbtn = document.getElementById('playbtn');
/* A function that is called when the play button is clicked. */

let person1 = prompt("first person enter your name");
let person2 = prompt("second person enter your name");

//update player one and player two name by the entered user names

let p1 = document.getElementById('p1');
p1.innerHTML = person1;
let p2 = document.getElementById('p2');
p2.innerHTML = person2;

// on click  generate a random number in random cell 
playbtn.addEventListener('click' ,  function(){
let randomnum1 = (Math.floor(Math.random()*5)+1);
let randomnum2 = (Math.floor(Math.random()*5)+1);
let id1 = "p1"+randomnum1;
let id2 = "p2"+randomnum2;
let cellp1 = document.getElementById(id1).innerHTML ;
let cellp2 = document.getElementById(id2).innerHTML ;
for(let i = 0 ; i <4 ; i++){
if(cellp1 == man[i]){
    document.getElementById(id1).innerHTML= cellp1.replace(man[i],man[i+1]);

}

if(cellp2 == man[i]){
    document.getElementById(id2).innerHTML= cellp2.replace(man[i],man[i+1]);  
}
}
// scoring system😢
let ps1 = parseInt(document.getElementById('ps1').innerHTML) ;
let ps2 = parseInt(document.getElementById('ps2').innerHTML);
if (cellp1==man[3]){
      ps1+=1
      document.getElementById("ps1").textContent=ps1
      
    }
    if (cellp2==man[3]){
      ps2+=1
      document.getElementById("ps2").textContent=ps2
    }
 
if(ps1 == 5){
  alert(`${person1} won🎉`);
}
if(ps2 == 5){
  alert(`${person2} won🎉`);
}
})

// toss for a player chance


let tossbtn = document.getElementById('tossbtn');
tossbtn.addEventListener('click' , function(){
let x = (Math.floor(Math.random)*2+1) ;
if(x==1){
  alert(`it's your turn ${person1} woahh🎉`);
}
else{
  alert(`it's your turn ${person2} woahh🎉`);
}
})








