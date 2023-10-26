

var IEDOM = (document.all) ? true:false;
var W3CDOM = (document.getElementById) ? true:false;


function getObject(id) {
	if (W3CDOM) ref="document.getElementById('"+id+"')";
	else if (IEDOM) ref=id;
	var object=eval(ref);
	return object;
}


//* START ROLLOVER FOR NAVIGATION *//


function loadIt() {

	var but = {
		1: 'images/lamButOver.gif', 
		2: 'images/idleButOver.gif', 
		3: 'images/cruiseButOver.gif', 
		4: 'images/cusButOver.gif', 
		5: 'images/noteButOver.gif', 
		6: 'images/prntButOver.gif', 
		7: 'images/helpButOver.gif', 
		8: 'images/exitButOver.gif'
	};
		
	var size = {
		1: '94,36', 
		2: '94,36', 
		3: '94,36', 
		4: '94,36', 
		5: '151,44', 
		6: '125,44', 
		7: '182,46', 
		8: '94,46'
	};
	
	var over = 1;
	while (over <9) {
		navs = new Image(size[over]);
		navs.src=but[over];
		over++;
	}
}

var B="";

function navOver(b) {
	getObject(b).src="images/"+b+"ButOver.gif";
	B=b;
}

function navOut() {
	getObject(B).src="images/"+B+"But.gif";
	
}

//* GLOBAL VARIABLES FOR NOTES *//

//* END GLOBAL VARIABLES *//
//****************************//


//* SET NAVIGATION DESTINATION *//


function goTo(p) {

	viewing = {lambda: '100%,0,0,0', idle: '0,100%,0,0', cruise: '0,0,100%,0', custom: '0,0,0,100%'};
	
	if (IEDOM) parent.pagesFrm.cols=viewing[p];
	else if (W3CDOM) parent.document.getElementById('pagesFrm').cols=viewing[p];
	getObject(p+'L').blur();
	parent.frames['bottomFrame'].document.getElementsByName('pageHidIn')[0].value = p;
	//pageHidIn.value=p;
}


//* SET RIGHT SIDE BUTTONS *//


function doBut(but) {
if (but=='xit') 
exitIt();
else if (but=='help') helpMe();
else if (but=='note') openNote();
else if (but=='prnt') openPrnt();
getObject(but+'L').blur();
}


//* SET EXIT BUTTON *//

function exitIt() {
top.window.close();
}


//****************************************************//

function winWidth() {
	if (window.innerWidth) return window.innerWidth;
	else if (document.documentElement) {
	return document.documentElement.offsetWidth;
	}else if (document.body.clientWidth) {
	return document.body.clientWidth;
	}
}

//****************************************************//


//* HELP BUTTON *//


function helpMe() {
var W = parseInt(winWidth());
var xPos = eval(W-350)-50;

helpWin = window.open("help.htm","HELP","dependant=yes, directories=no, location=no, menubar=no, resizable=no, scrollbars=no, status=no, toolbar=no, top=5, left="+xPos+", height=460, width=360");
	

if (!helpWin.closed) helpWin.focus();
	
}


//* NOTE BUTTON *//


function openNote() {
var W = parseInt(winWidth());
var xPos = eval(W-350)-50;

noteWin = window.open("note.htm","NOTE","dependant=yes, directories=no, location=no, menubar=no, resizable=no, scrollbars=no, status=no, toolbar=no, top=5, left="+xPos+", height=460, width=360");

}


//* PRINT BUTTON *//


function openPrnt() {
var W = parseInt(winWidth());
var xPos = eval(W-350)-50;

prntWin = window.open("prnt.htm","NOTE","dependant=yes, directories=no, location=no, menubar=no, resizable=no, scrollbars=no, status=no, toolbar=no, top=5, left="+xPos+", height=460, width=500");

}

