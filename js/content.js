

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
	L = new Image(52,20);
	L.src = "images/limitO.gif";
	SL = new Image(52,20);
	SL.src = "images/submitLimO.gif";
	RL = new Image(52,20);
	RL.src = "images/resetLimO.gif";
	B = new Image(52,20);
	B.src = "images/backO.gif";
}


function sbmtO(B,A) {

	if (A=="R") getObject(B+'But').src="images/"+B+"O.gif";
	else if (A=="T") getObject(B+'But').src="images/"+B+".gif";
}

//* RESET DATA FUNCTION *//


function resetData(P){
	resetWut = prompt('What would you like to do?    \r  A = Reset ALL Data      P = Reset THIS Page (and LIMITS!)      C = CANCEL');
		if (resetWut=='A'||resetWut=="a") parent.location.href="home.htm";
		else if (resetWut=='P'||resetWut=='p') document.location.href=P+".htm";		
		else if (resetWut=='C'||resetWut=='c') window.focus();
		else {
		alert('You Must Enter A Value');
		resetData(P);
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
	gasField[9] = "hcInLimit";
	gasField[10] = "coInLimit";
	gasField[11] = "co2InLimit";
	gasField[12] = "o2InLimit";
	gasField[13] = "hcvInLimit";
	gasField[14] = "ocvInLimit";
	gasField[15] = "k1InLimit";
	gasField[16] = "submitItLimit";

var yesL = "";
var NV = "";
var Gas = "";
function valKey(e) {
key = getKey(e);

	if (key==13 && isFinite(eval(Gas+'In'+yesL).value)==true) { 
		if (eval(Gas+'In'+yesL).value!="" && eval(Gas+'In'+yesL).value!=" ") {
		eval(gasField[eval(NV-1)]).blur();
		eval(gasField[NV]).focus();
		}
		return false;
	} else if (key==13) return false;
	if (key==9 && isFinite(eval(Gas+'In'+yesL).value)==true) { 
		if (eval(Gas+'In'+yesL).value!="" && eval(Gas+'In'+yesL).value!=" ") {
		eval(gasField[eval(NV-1)]).blur();
		eval(gasField[NV]).focus();
		}
		return false;
	} else if (key==9) return false;			
}


function nextVal(ifLimit,F,G) {
if (ifLimit == 'limit') yesL = 'Limit';
else yesL = "";
NV = eval(F+1);
Gas = G;
document.onkeydown=valKey;
}




//* START SWITCH SCREEN TO LIMITS *//
// Main or limit

innerCont = new Array();
	innerCont[1] = "pageCont";
	innerCont[2] = "gases2";
	innerCont[3] = "Tl2Bg";
	innerCont[4] = "topBckg";
	innerCont[5] = "TRcorner";
	innerCont[6] = "eq1";
	innerCont[7] = "Lbg";
	innerCont[8] = "eq2";
	innerCont[9] = "TLeq";
	innerCont[10] = "TeqTable";
	innerCont[11] = "TReq";
	innerCont[12] = "Leq";
	innerCont[13] = "eq3";
	innerCont[14] = "divide";
	innerCont[15] = "eq4";
	innerCont[16] = "Req";
	innerCont[17] = "BLeq";
	innerCont[18] = "BeqTable";
	innerCont[19] = "BReq";
	innerCont[20] = "Rbg";
	innerCont[21] = "eq5";
	innerCont[22] = "BLcorner";
	innerCont[23] = "botBckg";
	innerCont[24] = "BRcorner";
	innerCont[25] = "finalVal1";
	innerCont[26] = "finalVal";


function showIt(o) {
	for (i=1; i<27; i++) {
	getObject(innerCont[i]+o).className=innerCont[i]+"Show";
	}
	sectionOn = o;
}

function hideIt(o) {
	for (i=1; i<27; i++) {
	getObject(innerCont[i]+o).className=innerCont[i]+"Hide";
	}
	sectionOn="";	
}

var sectionOn = "Main";

function switchIt(o) {
if (sectionOn != "" && sectionOn != o) hideIt(sectionOn);

if (o != sectionOn) showIt(o);
else if (o == sectionOn) hideIt(o);

window.focus();
}