const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const submitButton = document.getElementById("submitButton")
const para = document.getElementById("ratingsp");
const card2 = document.getElementById("card2")
const card = document.getElementById("card")

btn1.addEventListener("click", change1)
function change1(){
    btn1.style.backgroundColor = "rgb(251, 116, 19)";
    if (btn1.style.backgroundColor = "rgb(251, 116, 19)"){
        btn2.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn3.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn4.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn5.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        
    
        submitButton.addEventListener("click", submit)
            function submit(){
                if (btn1.style.backgroundColor = "rgb(251, 116, 19)"){
                    card2.style.display = "block"
                    para.textContent= "You selected 1 out of 5";
                    card.style.display = "none"

            }
        }
    {
};

    }
}

btn2.addEventListener("click", change2)
function change2(){
    btn2.style.backgroundColor = "rgb(251, 116, 19)"
    if (btn2.style.backgroundColor = "rgb(251, 116, 19)"){
        btn1.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn3.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn4.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn5.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        submitButton.addEventListener("click", submit)
        function submit(){
            
            if (btn2.style.backgroundColor = "rgb(251, 116, 19)"){
                card2.style.display = "block"
                    para.textContent= "You selected 2 out of 5";
                    card.style.display = "none"

        }
    }
    }
};

btn3.addEventListener("click", change3)
function change3(){
    btn3.style.backgroundColor = "rgb(251, 116, 19)"
    if (btn3.style.backgroundColor = "rgb(251, 116, 19)"){
        btn2.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn1.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn4.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn5.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        submitButton.addEventListener("click", submit)
        function submit(){
            
            if (btn3.style.backgroundColor = "rgb(251, 116, 19)"){
                card2.style.display = "block"
                    para.textContent= "You selected 3 out of 5";
                    card.style.display = "none"
    
        }
    }
    }
};

btn4.addEventListener("click", change4)
function change4(){
    btn4.style.backgroundColor = "rgb(251, 116, 19)"
    if (btn4.style.backgroundColor = "rgb(251, 116, 19)"){
        btn2.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn3.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn1.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn5.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        submitButton.addEventListener("click", submit)
        function submit(){
            
            if (btn4.style.backgroundColor = "rgb(251, 116, 19)"){
                card2.style.display = "block"
                para.textContent= "You selected 4 out of 5";
                card.style.display = "none" 
        }
    }
    }
};

btn5.addEventListener("click", change5)
function change5(){
    btn5.style.backgroundColor = "rgb(251, 116, 19)"
    if (btn1.style.backgroundColor = "rgb(251, 116, 19)"){
        btn2.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn3.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn4.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        btn1.style.backgroundColor = "rgba(136, 136, 136, 0.26)";
        submitButton.addEventListener("click", submit, )
            function submit(){
               
                if (btn4.style.backgroundColor = "rgb(251, 116, 19)"){
                    card2.style.display = "block"
                    para.textContent= "You selected 5 out of 5";
                    card.style.display = "none" 
            }

        
    }
    }
};



