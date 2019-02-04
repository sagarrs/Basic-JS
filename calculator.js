function myclick(a){
    myform.display.value += a;
}

function ac(){
    myform.display.value = 0;
    del();
}

function del(){
    let preval = myform.display.value;
    myform.display.value = preval.substr(0, preval.length-1);
}

function trig(x){
    if(x == "sin"){
        myform.display.value = Math.sin(myform.display.value);
    }
    else if(x == "cos"){
        myform.display.value = Math.cos(myform.display.value);
    }
    else if(x == "tan"){
        myform.display.value = Math.tan(myform.display.value);
    }
    else if(x == "pow"){
        myform.display.value = Math.pow(myform.display.value,2);		
    }
    else if(x == "sqrt"){
        let q = myform.display.value
        myform.display.value = Math.sqrt(q);				
    }
    else if(x == "evalTo"){
        myform.display.value = eval(myform.display.value);
    }																	
}