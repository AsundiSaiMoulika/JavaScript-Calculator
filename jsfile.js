window.onload = function(){
    var res = document.getElementById("result");
    var inp = document.getElementById("inputs");


    function getResult(e){
        e = event.target || event.srcElement;
        if(e.innerText == "="){
            res.innerText = eval(res.innerText);

        }

        else if(e.innerText == "C"){
            res.innerText = " ";

        }

       else if(e.innerText == "Del" && e.innerText.length > 0){
            res.innerText = res.innerText.substr(0,res.innerText.length-1);

        }
        else{
        res.innerText += e.innerText;
        }
    }  

    inp.addEventListener("click",getResult);
}