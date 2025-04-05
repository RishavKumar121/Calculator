
let sound2 = new Audio("button.mp3")
let buttons = document.getElementsByTagName("span")

for(let i=0; i<buttons.length;i++){
    buttons[i].onclick = (e)=>{
        sound2.play()
    if(e.target.value == "="){

        if(input1.value ){

            value=input1.value 
            value = eval(value)
            input1.value = value
        }
    }else{
        
        if(e.target.value == "AC"){
            value = input1.value
            value = value.slice(0,-1)
            input1.value = value

        }else{

            if(e.target.value == "DEL"){
                input1.value = ""

            }else{

                
                console.log(e,e.target)
                input1.value += e.target.value
            }
        }
    }
    }


}