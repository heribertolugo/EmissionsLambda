

var IEDOM = (document.all) ? true:false;
var W3CDOM = (document.getElementById) ? true:false;


function getObject(id) {
	if (IEDOM) ref=id;
	else if (W3CDOM) ref="document.getElementById('"+id+"')";
	var object=eval(ref);
	return object;
}


//* SUBMIT/RESET BUTTON ROLLOVER *//


function loadSubmit() {
	S = new Image(52,20);
	S.src = "images/submitO.gif";
	R = new Image(52,20);
	R.src = "images/resetO.gif";
}


function sbmtO(B,A) {

	if (A=="R") getObject(B+'But').src="images/"+B+"O.gif";
	if (A=="T") getObject(B+'But').src="images/"+B+".gif";
}

//* RESET DATA FUNCTION *//


function resetData(){
	resetWut = prompt('What would you like to do?    \r  A = Reset ALL Data      P = Reset THIS page      C = CANCEL',"");
		if (resetWut=='A'||resetWut=="a") parent.location.href="home.htm";
		else if (resetWut=='P'||resetWut=='p') alert("p");
		else if (resetWut=='C'||resetWut=='c') window.focus();
		else {
		alert('You Must Enter A Value');
		resetData();
		}
}




//* PLUG VALUES INTO EQUATION AND ASSIGN TO VAR*//


function getKey(e) {
var keyNum ="";
	if (IEDOM) {
	keyNum = event.keyCode;
	return keyNum;
	}
}

gasField = new Array();
	gasField[1] = "hcIn";
	gasField[2] = "coIn";
	gasField[3] = "co2In";
	gasField[4] = "o2In";
	gasField[5] = "hcvIn";
	gasField[6] = "ocvIn";
	gasField[7] = "k1In";
	gasField[8] = "submitIt";

var NV = "";

function valKey(e) {
key = getKey(e);
if (key==13) {
eval(gasField[NV]).focus();
return false;
}else {return true};
}


function nextVal(F) {
NV = eval(F+1);
document.onkeydown=valKey;
}



lambdaGas = new Array();
	lambdaGas['hc'] = "";
	lambdaGas['co'] = "";
	lambdaGas['co2'] = "";
	lambdaGas['o2'] = "";
	lambdaGas['hcv'] = "";
	lambdaGas['ocv'] = "";
	lambdaGas['k1'] = "";

 
function getVal(P,G) {
	if (IEDOM) {	
		if (isFinite(eval(G+'In').value)!=true) {
		alert("Illegal character \rYou must enter a numerical value(Decimals ok)");
		eval(G+'In').select();
		//CV = "";
		}else if (eval(G+'In').value=="") {
		valQuit = confirm('You must enter a numerical value. \r Press OK to go back to entering a value');
			if (valQuit == true) {
			eval(G+'In').focus();
			} else { window.focus();}
			//CV = "";
		}else { 		
		eval(P)[G]=eval(G+'In').value;
			getObject(eval(G+'_E1')).innerHTML = eval(P)[G];
			getObject(eval(G+'_E2')).innerHTML = eval(P)[G];
			getObject(eval(G+'_E3')).innerHTML = eval(P)[G];
			getObject(eval(G+'_E4')).innerHTML = eval(P)[G];
			}else if (G=="hcv" || G=="ocv"){
			getObject(eval(G+'_E1')).innerHTML = eval(P)[G];
			getObject(eval(G+'_E2')).innerHTML = eval(P)[G];
			}else { 
			getObject(eval(G+'_E')).innerHTML = eval(P)[G];
			}
		}
	}
}