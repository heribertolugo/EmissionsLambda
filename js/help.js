
var IEDOM = (document.all) ? true:false;
var W3CDOM = (document.getElementById) ? true:false;


function getObject(id) {
	if (IEDOM) ref=id;
	else if (W3CDOM) ref="document.getElementById('"+id+"')";
	var object=eval(ref);
	return object;
}




function onMe(Ion,Ioff) {

getObject(Ioff).className=Ioff+'Off';
getObject(Ion).className=Ion+'On';
getObject(Ion+'List').className='showMenCont';
//alert(Ion+'List');
getObject(Ioff+'List').className='hideMenCont';
getObject('HwelcomeList').className='hideMenCont';
}


var contRes = new Array();
	contRes[1] = "WhatisLambda";
	contRes[2] = "HowtouseLambdaDiagnostics";
	contRes[3] = "HowwillLambdaDiagnosticshelpme";
	contRes[4] = "HowaccurateisLambda";
	contRes[5] = "WhatareLambdacomparisons";
	contRes[6] = "WhatisLimitsectionfor";
	contRes[7] = "WhatisNotefor";
	contRes[8] = "WhatisPrintfor";
	contRes[9] = "WhatisHelpfor";
	contRes[10] = "WhatisExitfor";
	contRes[11] = "HowdoIuseNote";
	contRes[12] = "Enteringcustomerinfomation";
	contRes[13] = "WhatisLabelfor";
	contRes[14] = "WhatisHCV";
	contRes[15] = "WhatisOCV";
	contRes[16] = "WhatisK1";
	contRes[17] = "WhydoesHCsbecomeadecimalinequation";
	
var indexRes = new Array();
	indexRes[1] = "Lambda";
	indexRes[2] = "HCV";
	indexRes[3] = "OCV";
	indexRes[4] = "K1";
	indexRes[5] = "LambdaComparison";
	indexRes[6] = "LimitsSection";
	indexRes[7] = "Label";
	indexRes[8] = "NoteButton";
	indexRes[9] = "PrintButton";
	indexRes[10] = "CustomerInformation";

var helpSect = "";

function showResult(S,R) {

		for (n=eval(R-1); n>0; n--) {
		getObject(eval(S+'Res')[n]).className='hide';
		}
	
		for (n=eval(R)+eval(1); n<eval(S+'Res').length; n++) {
		getObject(eval(S+'Res')[n]).className='hide';
		}

	if (helpSect != S && helpSect != "") {
		for (n=1; n<eval(helpSect+'Res').length; n++) {
		getObject(eval(helpSect+'Res')[n]).className='hide';
		}
	}

getObject(eval(S+'Res')[R]).className='menResults';
helpSect = S;
}
