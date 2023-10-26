
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

	var but = {1: 'images/closeXButOver.gif', 2: 'images/yesButOver.gif', 3: 'images/noButOver.gif', 4: 'images/cancelButOver.gif'};		
	var size = {1: '21,19', 2: '100,28', 3: '100,28', 4: '100,28'};	
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
	note = document.getElementsByName('noteBox')[0].value; //noteBox.value;
	
	pageVal = opener.pageHidIn.value;

		if (printOp.checked) printEn ="ok";
		opener.eval(pageVal+'NoteValue').value = noteBox.value;
		opener.eval(pageVal+'PrintCheck').value = printEn;
		
		setTimeout('self.close()',1500);
}



function writeNote() {

pageVal = opener.getElementsByName('pageHidIn')[0].value;

	getObject('pageNote').innerHTML = opener.getElementsByName('pageHidIn')[0].value;
	getObject('pageSection').innerHTML = opener.getElementsByName('pageSecHidIn')[0].value;
	
	noteBox.value = opener.getElementsByName(pageVal+'NoteValue')[0].value;
		if (opener.getElementsByName(pageVal+'PrintCheck')[0].value=='ok')printOp.checked = true;
}


//* ------------------------------------------------------ *//


var gasses = {0: 'HC', 1: 'CO', 2: 'CO2', 3: 'O2', 4: 'HCV', 5: 'OCV', 6: 'K1'};	
var pages = {1: 'Idle', 2: 'Cruise', 3: 'Custom'};
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
		getObject('prev'+info+gasses[i]+Lim).innerHTML=opener.parent.frames['bottomFrame'].getElementsByName('prnt'+info+gasses[i]+L)[0].value;
		
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

	if (opener.parent.frames['bottomFrame'].getElementsByName('prnt'+P+'HC'+L)[0].value!="") {
		if (opener.parent.frames['bottomFrame'].getElementsByName('prnt'+P+'CO'+L)[0].value!="") {
			if (opener.parent.frames['bottomFrame'].getElementsByName('prnt'+P+'CO2'+L)[0].value!="") {
				if (opener.parent.frames['bottomFrame'].getElementsByName('prnt'+P+'O2'+L)[0].value!=""){
					if (opener.parent.frames['bottomFrame'].getElementsByName('prnt'+P+'A'+L)[0].value!="") showInfo = true;
				}
			}
		}
	}
	if (showInfo == true) {
	divSetting = "divShow";
	setDivPrev(P,L);
		if (opener.parent.frames['bottomFrame'].getElementsByName(p+'PrintCheck')[0].value=='ok') {
		getObject('prev'+P+'Note').innerHTML="Note: "+opener.parent.frames['bottomFrame'].getElementsByName(p+'NoteValue')[0].value;
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
