function makeRed(){
	var x=document.getElementById('green')
	if(x.style.color=="green"){
     x.style.color="red"
}
else {
	x.style.color="green"
}
}

function makeBigger(){
     var x=document.getElementById('small')
        if(x.style.fontSize=="1em"){
        	x.style.fontSize=="2em"
        }
        else{
        	x.style.fontSize=="1em"
        }
}

function makeItalic(){

	var x=document.getElementById('italic')
	if(x.style.fontWeight=="normal"){
		x.style.fontWeight=="italic"
	}
}
function makeBold(){

	var x=document.getElementById('bold')
	if(x.style.fontWeight=="normal"){
		x.style.fontWeight=="bold"
	}
}