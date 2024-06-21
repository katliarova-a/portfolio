let jn = document.getElementsByClassName('jn')
let skills = document.getElementsByClassName('skills_list')
let i = 0

for(let i=0; i<jn.length; i++){
    jn[i].addEventListener("click", showBox)
    
}

function showBox(){
    this.parentNode.children[1].classList.toggle('active')    
}

let count=0 
function right(){
    
    if(count<=55){
        document.getElementById('muimg').style.opacity = '100%'
        count+=16.5
        document.getElementById('slider').style.transform ='translate(-'+count+'%)';
    }
    if(count>55){
        document.getElementById('muimg').style.opacity = '4%'
        count=0
        document.getElementById('slider').style.transform ='translate(-'+count+'%)';

    }
    console.log(count)
}
 
function left(){
    if(count>0){
        count-= 16.5
        document.getElementById('slider').style.transform ='translate(-'+count+'%)'
    }
    
}


let options ={
    root: null,
    rootMargin:  '10px',
    threshold:0.1  //видемость 10% происходит anim
}
let callback = function(enteries){
    enteries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('yes')
        }
    })
}
let observer =new IntersectionObserver(callback,options);
let target =document.querySelectorAll('.sect');
let normal =document.querySelectorAll('.web_sait');
let buttons =document.querySelectorAll('.about_button');


buttons.forEach(trg =>{
    observer.observe(trg);
})

normal.forEach(trg =>{
    observer.observe(trg);
})

target.forEach(trg =>{
    observer.observe(trg);
})