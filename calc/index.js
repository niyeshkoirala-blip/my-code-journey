const keyboard=document.querySelector(".keyboard");
 const ques=document.querySelector(".q");
 const ans= document.querySelector(".a")

 let current;
 let total="";
 let solved; let result;


keyboard.addEventListener("click",calc);
// document.addEventListener("keydown",calc);

    
    
        
    function calc(event){

        const key=event.key;
       
   
   
   if(event.target.classList.contains("key")){

        if(event.target.textContent==="="){
            result=eval(total);
            ans.textContent= result;
            solved = "true";

        }
        else if(event.target.textContent==="C"){
            total="";
            result="="
            ques.textContent=total;
             ans.textContent=result;
               solved= "false";

        }
        else if(event.target.textContent==="⌫" ){
            total = total.slice(0, -1); 
            ques.textContent=total;
        }
        // else if("0123456789+-*/.".includes(key) ){
        //      if( solved==="true"){
        //        total=result;
        //        ques.textContent=total;
        //        solved="false";
        //      }
        //        current=event.target.textContent ;
        //        total=total+current;
        //        ques.textContent=total;
              

            
            
    // else if( "0123456789+-*/.".includes(event.target.textContent)){
        else{ 
           
            if( solved==="true"){
               total=result;
               ques.textContent=total;
               solved="false";
             }
               current=event.target.textContent ;
               total=total+current;
               ques.textContent=total;
              
    }
       
}}
      
    
