const questions=[
{
	question:"Full form of HTML",
	optionA:"high text mail lang",
	optionB:"hyper text mail lang",
	optionC:"hyper text makeup lang",
	optionD:"hyper text markup lang",
	correct:"d"
	},
{
	question:"Full form of JS",
	optionA:"javasome",
	optionB:"judyscript",
	optionC:"jumpyscript",
	optionD:"javascript",
	correct:"d"
	},
{
	question:"Which side scripting lang is JS",
	optionA:"server",
	optionB:"client",
	optionC:"both",
	optionD:"not a scripting lang",
	correct:"c"
	},

]

const question=document.getElementById("question")
const ul=document.getElementById('options')
const optionA=document.getElementById("option_a")
const optionB=document.getElementById("option_b")
const optionC=document.getElementById("option_c")
const optionD=document.getElementById("option_d")
var curr_question=0;
var sum=0

const loadQuiz=()=>{
		question.innerHTML=questions[curr_question].question
		optionA.innerHTML=questions[curr_question].optionA
		optionB.innerHTML=questions[curr_question].optionB
		optionC.innerHTML=questions[curr_question].optionC
		optionD.innerHTML=questions[curr_question].optionD
	}

loadQuiz()

const display_score=(sum)=>{
		const score=document.getElementById('score')
		question.innerHTML="test is over.. your score is"
		options.style.display="none"
		score.innerHTML=sum+" / 3"
	}
const submit=()=>{
		var checkRadio = document.querySelector( 'input[name="option"]:checked');
		const selected_ans=document.getElementById("selected_ans");
		if(checkRadio.value==questions[curr_question].correct){
				sum=sum+1;
			}
		//console.log(sum)
		checkRadio.checked=false
		curr_question++
		if(curr_question<=2){
		loadQuiz()}
		else{
				display_score(sum)
		}
	}
