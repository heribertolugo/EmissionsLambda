
var IEDOM = (document.all) ? true:false;
var W3CDOM = (document.getElementById) ? true:false;


function getObject(id) {
	if (IEDOM) ref=id;
	else if (W3CDOM) ref="document.getElementById('"+id+"')";
	var object=eval(ref);
	return object;
}

//* START ROLLOVER *//


function loadBut() {

	var but = new Array();
		but[1] = "images/closeXButOver.gif";
		but[2] = "images/yesButOver.gif";
		but[3] = "images/noButOver.gif";
		but[4] = "images/cancelButOver.gif";
		
	var size = new Array();
		size[1] = "21,19";
		size[2] = "100,28";
		size[3] = "100,28";
		size[4] = "100,28";
	
	var over = 1;
	while (over <9) {
		navs = new Image(size[over]);
		navs.src=but[over];
		over++;
	}
}

var B="";

function buttOver(b) {
	getObject(b).src="images/"+b+"ButO.gif";
	B=b;
}

function buttOut() {
	getObject(B).src="images/"+B+"But.gif";
	
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
	pages[1] = "Idle";
	pages[2] = "Cruise";
	pages[3] = "Custom";

var ThisPage = "";
var divSetting = "";

function checkCust() {

}


function setDivPrev(info,L){
var Lim = "";
var sect ="";

if (L == 'Limit') { 
Lim = L;
sect = 'L';
}
else if (L != 'Limit') {
Lim = "";
sect = 'E';
}
if (sect == 'E' && gasses.length<8) {

gasses.push('A','AFR','STAT');
} else if (sect == 'L' && gasses.length>8) {alert(gasses.splice(7,3));
	while ( i<=3) {
		i++;
	
	gasses.splice(7,3);
	}
}

getObject(info+'Info').className=divSetting;
	if (divSetting == "divShow") {
		for (i=0; i<gasses.length; i++) {
		getObject(info+sect).className='gasShow';
		getObject('prev'+info+gasses[i]+Lim).innerHTML=opener.parent.frames['bottomFrame'].eval('prnt'+info+gasses[i]+L).value;
		
		}
	}
	else if (divSetting == "divHide") {
		for (i=0; i<gasses.length; i++) {
		getObject(info+sect).className='gasHide';
		getObject('prev'+info+gasses[i]+Lim).className='gasHide';
		
		}
	}
}



function checkInput(P,L) {
var showInfo = false;
var p = P.toLowerCase();

	if (opener.parent.frames['bottomFrame'].eval('prnt'+P+'HC'+L).value!="") {
		if (opener.parent.frames['bottomFrame'].eval('prnt'+P+'CO'+L).value!="") {
			if (opener.parent.frames['bottomFrame'].eval('prnt'+P+'CO2'+L).value!="") {
				if (opener.parent.frames['bottomFrame'].eval('prnt'+P+'O2'+L).value!=""){
					if (opener.parent.frames['bottomFrame'].eval('prnt'+P+'A'+L).value!="") showInfo = true;
				}
			}
		}
	}
	if (showInfo == true) {
	divSetting = "divShow";
	setDivPrev(P,L);
		if (opener.parent.frames['bottomFrame'].eval(p+'PrintCheck').value=='ok') {
		getObject('prev'+P+'Note').innerHTML="Note: "+opener.parent.frames['bottomFrame'].eval(p+'NoteValue').value;
		}
	}/* else if (showInfo != true) {
	divSetting = "divHide";
	setDivPrev(P,L);
	}*/
}


function prevPrnt() {
loadBut();
checkInput('Lambda','');
var i = 0;
pagesLoop:
	while ( i<eval(pages.length-1)) {
	i++;
		checkInput(pages[i],'');			
		checkInput(pages[i],'Limit');			
	}
}