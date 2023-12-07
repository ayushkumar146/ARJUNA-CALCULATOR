let s="";
let buttons=document.querySelectorAll(".butt");
Array.from(buttons).forEach((e)=>{
    e.addEventListener('click',(val)=>{
       let input= document.querySelector("#yes");
    //    console.log(input);
    
     if(val.target.innerHTML=='='){
            s=eval(s);
            input.value=s;
        }
        
        else if(val.target.innerHTML=='C'){
            input.value=0;
            s="";
        }
        else{
            s=s+val.target.innerHTML;
            input.value=s;
        }
    })
})