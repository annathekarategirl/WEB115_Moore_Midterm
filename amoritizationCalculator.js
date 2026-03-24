//main issue is unable to access values even with .value

const button1=document.getElementById("Button1")
const div=document.getElementById("amor")
button1.addEventListener("click",calc)
let PrincipalLoanAmount
let initialLoan
let term
let monthlyPayment
let totalInterestPaid
let totalLoanCost
function calc() {
    button1.disabled=true
    div.innerHTML+="<input id='loan'>Loan</input>"
    div.innerHTML+="<input id='down'>Down payment %</input>"
    div.innerHTML+="<input id='term'>Loan term years</input>"
    div.innerHTML+="<button id='button2'>Submit</button>"
    const button2=document.getElementById("button2") 
    button2.addEventListener("click",calcmore)
    function calcmore(){
    initialLoan=document.getElementById("loan").value
    term=Number(document.getElementById("term").value)
    //initialLoan.onchange=function(){initialLoan=initialLoan.value}
    console.log(PrincipalLoanAmount)
    PrincipalLoanAmount=Number(initialLoan)-(Number(initialLoan)*(Number(document.getElementById("down").value/100)))}
    console.log(initialLoan)
    const InterestRate=.0575
    const monthlyInterestRate = InterestRate/12
    const totalMonths=term*12
    monthlyPayment = ((monthlyInterestRate * PrincipalLoanAmount) / (1 - Math.pow(1 + monthlyInterestRate, -totalMonths))).toFixed(2);
    totalInterestPaid=(monthlyPayment*totalMonths)-PrincipalLoanAmount
    totalLoanCost=PrincipalLoanAmount+totalInterestPaid
   console.log(totalMonths)
    div.innerHTML+="<button id='button3'>Display</button>"
    document.getElementById("button3").addEventListener("click",display) 
    function display(){
 console.log(totalInterestPaid)
    console.log(term)
    console.log(monthlyInterestRate)
    }

}
