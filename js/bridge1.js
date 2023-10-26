
var IEDOM = (document.all) ? true:false;
var W3CDOM = (document.getElementById) ? true:false;


function getObject(id) {
	if (IEDOM) ref=id;
	else if (W3CDOM) ref="document.getElementById('"+id+"')";
	var object=eval(ref);
	return object;
}

var note = "";
var printEn = "";
var pageVal = "lambda";

function makeNote() {
	note = noteBox.value;
	
	pageVal = opener.pageHidIn.value;

		if (printOp.checked) printEn ="ok";
		opener.eval(pageVal+'NoteValue').value = noteBox.value;
		opener.eval(pageVal+'PrintCheck').value = printEn;
		
		setTimeout('self.close()',1500);
}



function writeNote() {

pageVal = opener.pageHidIn.value;

	getObject('pageNote').innerHTML = opener.pageHidIn.value;
	getObject('pageSection').innerHTML = opener.pageSecHidIn.value;
	
	noteBox.value = opener.eval(pageVal+'NoteValue').value;
		if (opener.eval(pageVal+'PrintCheck').value=='ok')printOp.checked = true;
}


//* ------------------------------------------------------ *//


var gasses = new Array();
	gasses[0] = "HC";
	gasses[1] = "CO";
	gasses[2] = "CO2";
	gasses[3] = "O2";
	gasses[4] = "HCV";
	gasses[5] = "OCV";
	gasses[6] = "K1";
	
var pages = new Array();
	pages[0] = "Idle";
	pages[1] = "Cruise";
	pages[2] = "Custom";

var ThisPage = "";
var divSetting = "";

function checkCust() {

}

function setGasPrev(info,L){

}

function setDivPrev(info,L){
var Lim = "";
var sect ="";

if (L == 'Limit') { 
Lim = L;
sect = 'L';
}
else sect = 'E';

getObject(info+'Info').className=divSetting;
	if (divSetting == "divShow") {
		for (i=0; i<=6; i++) {
		getObject(info+sect).className='gasShow';
		getObject('prev'+info+gasses[i]+Lim).innerHTML=opener.parent.frames['bottomFrame'].eval('prnt'+info+gasses[i]+L).value;
		
		}
	}
	else if (divSetting == "divHide") {
		for (i=0; i<=6; i++) {
		getObject(info+sect).className='gasHide';
		getObject('prev'+info+gasses[i]+Lim).className='gasHide';
		
		}
	}
}

function doGasses() {
	for (i=0; i<7; i++) {
	return new String(gasses[i]);
	}
}

function doPages() {
	for (i=0; i<=2; i++) {
	//alert(new String(pages[i]));
	 var p = new Array();
	 p = pages[i];
	 return new String(p);
	}
}

function checkInput(L) {
var showInfo = "";

	for (i=0; i<3; i++) {
	//if (opener.parent.frames['bottomFrame'].eval('prnt'+pages[i]+'HC'+L).value=="") showInfo = false;
	//if (opener.parent.frames['bottomFrame'].eval('prnt'+pages[i]+'CO'+L).value=="") showInfo = false;
	//if (opener.parent.frames['bottomFrame'].eval('prnt'+pages[i]+'CO2'+L).value=="") showInfo = false;
	//if (opener.parent.frames['bottomFrame'].eval('prnt'+pages[i]+'O2'+L).value=="") showInfo = false;
	if (opener.parent.frames['bottomFrame'].eval('prnt'+pages[i]+'A'+L).value=="") showInfo = false;
	else if (opener.parent.frames['bottomFrame'].eval('prnt'+pages[i]+'A'+L).value!="") showInfo = true;
	alert(opener.parent.frames['bottomFrame'].eval('prnt'+pages[i]+'A'+L).value+'--'+showInfo+'--'+pages[i]);
	
	//* PUT CHECK AFR HERE !!!!!!!!!!!!! *//
		if (showInfo == true) { 
			ThisPage = pages[i];
			divSetting = "divShow";
			setDivPrev(ThisPage,L);
			}
	/*else if (showInfo == false) { 
		ThisPage = pages[i];
		divSetting = "divHide";
		setDivPrev(ThisPage,L);
		}*/
			
	}

}


function prevPrnt() {
	/*if (checkInput('Lambda','')==true) {
	setGasPrev('Lambda','');
	getObject('lambdaInfo').style.ClassName='show';
	}
	alert(checkInput(''));
	if (checkInput('')==true || checkInput('Limit')==true) {
	divSetting = "divShow";
		if (checkInput('')==true) setDivPrev(ThisPage,'');
		if (checkInput('Limit')==true) setDivPrev(ThisPage,'Limit');
	}
	else if (checkInput('')!=true || checkInput('Limit')!=true) {
	divSetting = "divHide";
		if (checkInput('')!=true) setDivPrev(ThisPage,'');
		if (checkInput('Limit')!=true) setDivPrev(ThisPage,'Limit');
	}*/
	checkInput('');
	checkInput('Limit');
	
}