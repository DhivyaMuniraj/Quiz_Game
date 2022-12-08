window.onload=function(){
  document.getElementById("my_audio").play();
}
 let quiz_array=[
  {
    Question:" Solve 3 + 6 *( 5 + 4) ÷ 3 - 7",
    A:"11",
    B:"16",
    C:"14",
    D:"15",
    Answer:"c"
  },
  {
    Question:"27 is a perfect cube. If true then what is the perfect cube of 27?",
    A:"9",
    B:"6",
    C:"3",
    D:"not perfect cube",
    Answer:"c"
  },
  {
    Question:" What is the sum of 130+125+191?",
    A:"335",
    B:"469",
    C:"447",
    D:"446",
    Answer:"d"
  },
  {
    Question:"110 divided by 10 is",
    A:"11",
    B:"10",
    C:"5",
    D:"none of these",
    Answer:"a"
  }
 ]
 let message=["You really need to do better","Keep trying","Great job"];
 let result_gif=["sad_pikachu.gif","normal.gif","beer.gif"];


  let quiz_div=document.getElementById("quiz");
  let quiz_head=document.getElementById("head");
  let element_cls=document.querySelectorAll(".answer")
  let option_A=document.getElementById("option_a");
  let option_B=document.getElementById("option_b");
  let option_C=document.getElementById("option_c");
  let option_D=document.getElementById("option_d");

let score=0;
let current_quiz=0;

show_quiz();//function calling
//function declaration
function show_quiz(){
  deselected()
  let current_quiz_data=quiz_array[current_quiz];
  quiz_head.innerText=current_quiz_data.Question;
  option_A.innerText=current_quiz_data.A;
  option_B.innerText=current_quiz_data.B;
  option_C.innerText=current_quiz_data.C;
  option_D.innerText=current_quiz_data.D;
}
function deselected(){
  element_cls.forEach((element)=>element.checked=false);
}
//for selected ans
function selected_ans(){
  let ans;
  element_cls.forEach((element)=>{
   if(element.checked){
      ans=element.id;
      }
     })
 
 return ans
}
//check for the correct answer and increase the score
function submit(){
 
  const answer=selected_ans();
 
   if(answer==quiz_array[current_quiz].Answer){
    score++;
    }
    return score;
  }
//function calls when user gives submit button
function final_submit(){
  submit();
  document.getElementById("my_audio").pause();
  display_result();
   
}
//Going to next question
function next_question(){
  submit();
      current_quiz++;
     if(current_quiz<quiz_array.length){
        show_quiz();
      }
     else{
      document.getElementById("my_audio").pause();
      display_result(score);
       }
  }
//displaying the final result
  function display_result(){
    let range;
    if(score===0){
      range=0;
    }
    else if(score==1 || score===2 || score==3){
      range=1;
    }
    else{
      range=2;
    }
    
     document.getElementById("quiz").style.display="none"
     document.getElementById("after_submit").style.display="block"
     document.getElementById("messages").innerText=message[range];
     document.getElementById("number_correct").innerText=`You answered ${score}/${quiz_array.length} questions correctly`
     document.getElementById("picture").src=result_gif[range];
  }
//count_down
let start_minute=1;
let time=(start_minute*60)-1;
const count_down=document.getElementById("quiz_timer");
setInterval(timer_count,1000);
function timer_count(){
    const minutes=Math.floor(time/60);
     let seconds=time%60;
     if(minutes==0 && seconds==0){
      document.getElementById("my_audio").pause();
       display_result(score);
     }
     seconds=seconds<10?'0'+seconds:seconds
     count_down.innerHTML=`${minutes}:${seconds}`;
     time--;
 }
