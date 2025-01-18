let Temp = "";
let Number1 = "";


let Opr = "";


function Opp(Value1)
{
    Opr = Value1;
    Number1 = Temp;
    Temp = "";


}
function Input2( Value) 
{
    Temp = Temp  + Value;
    

}

function Evaluation()
{
    let FirstNum= parseFloat(Number1);
    let SecondNum = parseFloat(Temp);
    let thirdNum =0;

    if (Opr=="*") {
        
        thirdNum = FirstNum*SecondNum;
    }
    else if(Opr=="+")
    {
        
        thirdNum =FirstNum+SecondNum;
    }
    else if(Opr=="-")
    {
        
        thirdNum =FirstNum-SecondNum;
    }
    else 
    {
        
        thirdNum =FirstNum/SecondNum;
    }
    document.getElementById("operationn").value="";
    document.getElementById("input1").value = String(thirdNum);
}

function Safai()
{
    Temp = "";
    Number1="";
}



    











    
       
       

console.log(Number1); 