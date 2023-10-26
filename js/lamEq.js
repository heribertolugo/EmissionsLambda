

var IEDOM = (document.all) ? true:false;
var W3CDOM = (document.getElementById) ? true:false;


function getObject(id) {
	if (IEDOM) ref=id;
	else if (W3CDOM) ref="document.getElementById('"+id+"')";
	var object=eval(ref);
	return object;
}

function getInput(name) {
	return document.getElementsByName(name)[0];
}



//**********************************************************************//
//!!!!!!!!!!!!!!!!!!!!!      IMPORTANT     !!!!!!!!!!!!!!!!!!!!!!!!!!!!//
// GVD (GAS VALUE DATABASE) THESE ARRAYS HOLD ALL THE VALUES          //
// FOR THE GASSES UNTIL SITE IS CLOSED                               //



lambdaGas = new Array();
	lambdaGas['hc'] = "";
	lambdaGas['co'] = "";
	lambdaGas['co2'] = "";
	lambdaGas['o2'] = "";
	lambdaGas['hcv'] = "1.8";
	lambdaGas['ocv'] = "0.017";
	lambdaGas['k1'] = "6.0";
	
	
idleGas = new Array();
	idleGas['hc'] = "";
	idleGas['co'] = "";
	idleGas['co2'] = "";
	idleGas['o2'] = "";
	idleGas['hcv'] = "1.8";
	idleGas['ocv'] = "0.017";
	idleGas['k1'] = "6.0";
	
	idleGasLimit = new Array();
	idleGasLimit['hc'] = "";
	idleGasLimit['co'] = "";
	idleGasLimit['co2'] = "0";
	idleGasLimit['o2'] = "0";
	idleGasLimit['hcv'] = "1.8";
	idleGasLimit['ocv'] = "0.017";
	idleGasLimit['k1'] = "6.0";
	
	
cruiseGas = new Array();
	cruiseGas['hc'] = "";
	cruiseGas['co'] = "";
	cruiseGas['co2'] = "";
	cruiseGas['o2'] = "";
	cruiseGas['hcv'] = "1.8";
	cruiseGas['ocv'] = "0.017";
	cruiseGas['k1'] = "6.0";
	
	cruiseGasLimit = new Array();
	cruiseGasLimit['hc'] = "";
	cruiseGasLimit['co'] = "";
	cruiseGasLimit['co2'] = "0";
	cruiseGasLimit['o2'] = "0";
	cruiseGasLimit['hcv'] = "1.8";
	cruiseGasLimit['ocv'] = "0.017";
	cruiseGasLimit['k1'] = "6.0";
	
	
customGas = new Array();
	customGas['hc'] = "";
	customGas['co'] = "";
	customGas['co2'] = "";
	customGas['o2'] = "";
	customGas['hcv'] = "1.8";
	customGas['ocv'] = "0.017";
	customGas['k1'] = "6.0";
	
	customGasLimit = new Array();
	customGasLimit['hc'] = "";
	customGasLimit['co'] = "";
	customGasLimit['co2'] = "0";
	customGasLimit['o2'] = "0";
	customGasLimit['hcv'] = "1.8";
	customGasLimit['ocv'] = "0.017";
	customGasLimit['k1'] = "6.0";


 
// ********************* END GVD *****************************************************//
 
 
function setPrntVal(Pp1,Pg1,Pl) {
Pp1 = new String(Pp1);
Pg1 = new String(Pg1);
	var prntG = Pg1.toUpperCase();
	var endAt = Pp1.lastIndexOf("G");
	var startL = Pp1.slice('0','1');
	var Pag = Pp1.substring('1',endAt);
	gPage = startL.toUpperCase()+Pag;
	
parent.frames['bottomFrame'].eval('prnt'+gPage+prntG+Pl).value = eval(Pp1+Pl)[Pg1];
}

function setPrntVal2(Pp2,Pg2,num) {
Pp2 = new String(Pp2);
Pg2 = new String(Pg2);
	var prntG = Pg2.toUpperCase();
	var endAt = Pp2.lastIndexOf("G");
	var startL = Pp2.slice('0','1');
	var Pag = Pp2.substring('1',endAt);
	gPage = startL.toUpperCase()+Pag;
parent.frames['bottomFrame'].eval('prnt'+gPage+prntG).value = num;
}

function setPrntVal3(Pp3) {
Pp3 = new String(Pp3);
	var endAt = Pp3.lastIndexOf("G");
	var startL = Pp3.slice('0','1');
	var Pag = Pp3.substring('1',endAt);
	gPage = startL.toUpperCase()+Pag;
parent.frames['bottomFrame'].eval('prnt'+gPage+'ALimit').value = 1;
}

 
var L = "";
 
function getVal(ifLimit,P,G) {
	if (ifLimit == 'limit') L = 'Limit';
	else L = "";

	
		if (isFinite(getInput(G+'In'+L).value)!=true) {
			alert("Illegal character \rYou must enter a numerical value(Decimals ok)");
			getInput(G+'In'+L).select();
		}else if (getInput(G+'In'+L).value=="" || getInput(G+'In'+L).value==" ") {
		//valQuit = confirm('You must enter a numerical value. \r Press OK to go back to entering a value');
			//if (valQuit == true) {			
			//eval(G+'In').focus();			
			//} else 
			window.focus();
//* CO & CO2 VALUE CHANGE *//
		}else { if (G=="co" || G=="co2"){		
				eval(P+L)[G]=getInput(G+'In'+L).value;				
				getObject(G+'_E1'+L).innerHTML = eval(P+L)[G];
				getObject(G+'_E2'+L).innerHTML = eval(P+L)[G];
				getObject(G+'_E3'+L).innerHTML = eval(P+L)[G];
				getObject(G+'_E4'+L).innerHTML = eval(P+L)[G];
				}else if (G=="hcv" || G=="ocv"){
//* HCV VALUE CHANGE *//
					if (G=="hcv" && getInput(G+'In'+L).value!="1.8") {
					changeVal = confirm('Are you sure you want to change this value?');
						if (changeVal == true) {						
						okChangeValue = prompt('Enter new value','Only numerical values accepted');
						
						if(okChangeValue==null) {
						okChangeValue="1.8";
						eval(P+L)[G]="1.8";
						}
						var noAlpha = (isFinite(okChangeValue)) ? true:false;
							if (noAlpha==true){
								if (okChangeValue!="" && okChangeValue!=" ") {
									if (okChangeValue<=999){
									eval(P+L)[G]=okChangeValue;
									getObject('ocvIn'+L).focus();
									getInput(G+'In'+L).value=okChangeValue;
									getObject(G+'_E1'+L).innerHTML = okChangeValue;
									getObject(G+'_E2'+L).innerHTML = okChangeValue;
									}else {
									alert('Please enter a proper value'); 
									eval(P+L)[G]="1.8";
									getInput(G+'In'+L).value="1.8";
									getObject(G+'_E1'+L).innerHTML = "1.8";
									getObject(G+'_E2'+L).innerHTML = "1.8";
									}
								}else if(okChangeValue=="" || okChangeValue==" "){
								alert("NUMBERS ONLY!");
								eval(P+L)[G]="1.8";
								getInput(G+'In'+L).value="1.8";
								getObject(G+'_E1'+L).innerHTML = "1.8";
								getObject(G+'_E2'+L).innerHTML = "1.8";
								}
							}else if (noAlpha==false){
							alert("NUMBERS ONLY!");
							eval(P+L)[G]="1.8";
							getInput(G+'In'+L).value="1.8";
							getObject(G+'_E1'+L).innerHTML = "1.8";
							getObject(G+'_E2'+L).innerHTML = "1.8";
							}
							
						}else if (changeVal == false) {
						eval(P+L)[G]="1.8";
						getObject('ocvIn'+L).focus();
						getInput(G+'In'+L).value="1.8";
						getObject(G+'_E1'+L).innerHTML = eval(P+L)[G];
						getObject(G+'_E2'+L).innerHTML = eval(P+L)[G];
						}
						
					}else if (G=="hcv" && getInput(G+'In'+L).value=="1.8") {
					eval(P+L)[G]="1.8";
					getObject(G+'_E1'+L).innerHTML = eval(P+L)[G];
					getObject(G+'_E2'+L).innerHTML = eval(P+L)[G];
//* OCV VALUE CHANGE *//
					}if (G=="ocv" && getInput(G+'In'+L).value!="0.017") {
					changeVal = confirm('Are you sure you want to change this value?');
						if (changeVal == true) {						
						okChangeValue = prompt('Enter new value','Only numerical values accepted');
						if(okChangeValue==null) {
						okChangeValue="0.017";
						eval(P+L)[G]="0.017";
						}
						var noAlpha = (isFinite(okChangeValue)) ? true:false;
							if (noAlpha==true){
								if (okChangeValue!="" && okChangeValue!=" ") {
									if (okChangeValue<=999){
									eval(P+L)[G]=okChangeValue;
									getObject('k1In'+L).focus();
									getInput(G+'In'+L).value=okChangeValue;
									getObject(G+'_E1'+L).innerHTML = okChangeValue;
									getObject(G+'_E2'+L).innerHTML = okChangeValue;
									}else {
									alert('Please enter a proper value'); 
									eval(P+L)[G]="0.017";
									getInput(G+'In'+L).value="0.017";
									getObject(G+'_E1'+L).innerHTML = "0.017";
									getObject(G+'_E2'+L).innerHTML = "0.017";
									}
								}else if(okChangeValue=="" || okChangeValue==" "){
								alert("NUMBERS ONLY!");
								eval(P+L)[G]="0.017";
								getInput(G+'In'+L).value="0.017";
								getObject(G+'_E1'+L).innerHTML = "0.017";
								getObject(G+'_E2'+L).innerHTML = "0.017";
								}
							}else if (noAlpha==false){
							alert("NUMBERS ONLY!");
							eval(P+L)[G]="0.017";
							getInput(G+'In'+L).value="0.017";
							getObject(G+'_E1'+L).innerHTML = "0.017";
							getObject(G+'_E2'+L).innerHTML = "0.017";
							}
							
						}else if (changeVal == false) {
						eval(P+L)[G]="0.017";
						getObject('k1In'+L).focus();
						getInput(G+'In'+L).value="0.017";
						getObject(G+'_E1'+L).innerHTML = eval(P+L)[G];
						getObject(G+'_E2'+L).innerHTML = eval(P+L)[G];
						}
						
					}else if (G=="ocv" && getInput(G+'In'+L).value=="0.017") {
					eval(P+L)[G]="0.017";
					getObject(G+'_E1'+L).innerHTML = eval(P+L)[G];
					getObject(G+'_E2'+L).innerHTML = eval(P+L)[G];
//* K1 VALUE CHANGE *//
					}
				}else if (G=="k1" && getInput(G+'In'+L).value!="6.0") {
				changeVal = confirm('Are you sure you want to change this value?');
					if (changeVal == true) {						
						okChangeValue = prompt('Enter new value','Only numerical values accepted');
						if(okChangeValue==null) {
						okChangeValue="6.0";
						eval(P+L)[G]="6.0";
						}
						var noAlpha = (isFinite(okChangeValue)) ? true:false;
							if (noAlpha==true){
								if (okChangeValue!="" && okChangeValue!=" ") {
									if (okChangeValue<=999){
									eval(P+L)[G]=okChangeValue;
									getObject('submitIt').focus();
									getInput(G+'In'+L).value=okChangeValue;
									getObject(G+'_E'+L).innerHTML = okChangeValue;
									}else {
									alert('Please enter a proper value'); 
									eval(P+L)[G]="6.0";
									getInput(G+'In'+L).value="6.0";
									getObject(G+'_E'+L).innerHTML = "6.0";
									}
								}else if(okChangeValue=="" || okChangeValue==" "){
								alert("NUMBERS ONLY!");
								eval(P+L)[G]="6.0";
								getInput(G+'In'+L).value="6.0";
								getObject(G+'_E'+L).innerHTML = "6.0";
								}
							}else if (noAlpha==false){
							alert("NUMBERS ONLY!");
							eval(P+L)[G]="6.0";
							getInput(G+'In'+L).value="6.0";
							getObject(G+'_E'+L).innerHTML = "6.0";
							}
							
						}else if (changeVal == false) {
						eval(P+L)[G]="6.0";
						getObject('submitIt'+L).focus();
						getInput(G+'In'+L).value="6.0";
						getObject(G+'_E'+L).innerHTML = eval(P+L)[G];
						}
						
			}else if (G=="k1" && getInput(G+'In'+L).value=="6.0") {
			eval(P+L)[G]="6.0";
			getObject(G+'_E'+L).innerHTML = eval(P+L)[G];
			}
//* HC VALUE CHANGE (CHANGE FROM PPM TO %) *//				
			else if (G=="hc"){
			eval(P+L)[G]=getInput(G+'In'+L).value*0.001*0.1;
			getObject(G+'_E'+L).innerHTML = eval(P+L)[G];
			}
//* OTHERS VALUE CHANGE *//			
			else {
			eval(P+L)[G]=getInput(G+'In'+L).value;
			getObject(G+'_E'+L).innerHTML = eval(P+L)[G];
			}			
//* CALL FUNCTION TO SET VALUES USED IN FINAL PRINT *//
		setPrntVal(P,G,L);
		
	}
}




//* SET UP EQUATION CALCULATIONS *//

var cL = "";
var noVal = "";
var testVal = true;

function checkIn(P) {
testVal = true;

	if (eval(P)['hc'] == "" || eval(P)['hc'] == "") {
	noVal='HYDROCARBONS';
	testVal = false;
	}
	if (eval(P)['co'] == "" || eval(P)['co'] == " ") {
	noVal='CARBON MONOXIDE';
	testVal = false;
	}
	if (eval(P)['co2'] == "" || eval(P)['co2'] == " ") {
	noVal='CARBON DIOXIDE';
	testVal = false;
	}
	if (eval(P)['o2'] == "" || eval(P)['o2'] == " ") {
	noVal='OXYGEN';
	testVal = false;
	}
	if (eval(P)['hcv'] == "" || eval(P)['hcv'] == " ") {
	noVal='ATOMIC RATIO OF HYDROGEN TO CARBON IN FUEL (HCV)';
	testVal = false;
	}
	if (eval(P)['ocv'] == "" || eval(P)['ocv'] == " ") {
	noVal='ATOMIC RATIO OF OXYGEN TO CARBON IN FUEL (OCV)';
	testVal = false;
	}
	if (eval(P)['k1'] == "" || eval(P)['k1'] == " ") {
	noVal='CONVERSION FACTOR FROM FID TO NDIR (K1)';
	testVal = false;
	}	
}


function est(n) {
n = eval(n);
n = Math.round(n*1000)/1000;

return (n == Math.round(n)) ? n += ".000" :
		(n*100 == Math.round(n*100)) ? n += "0" :
		n;
}


function calcIt(cLim,P) {
	if (cLim == 'limit') {
		P+='Limit';
		cL = 'Limit';
	}
	else {
		cL = "";
		P = P;
	}
checkIn(P);

getObject('hcv_E1'+cL).innerHTML = eval(P)['hcv'];
getObject('hcv_E2'+cL).innerHTML = eval(P)['hcv'];
getObject('ocv_E1'+cL).innerHTML = eval(P)['ocv'];
getObject('ocv_E2'+cL).innerHTML = eval(P)['ocv'];
getObject('k1_E'+cL).innerHTML = eval(P)['k1'];

	if (testVal==false) alert('YOU MUST ENTER A VALUE FOR '+noVal+'!');
	else if (testVal==true) {
	
//* LEFT OF PARENTHESES (TOP) *//
	var calc1 = est(eval(P)['co']/2);
	var calc2 = est(eval(eval(P)['co2'])+eval(calc1)+eval(eval(P)['o2']));
	
//* FIRST IN PARENTHESES (TOP) *//	
	var calc3 = est(eval(P)['hcv'] / 4);
	var calc4 = est(eval(P)['co'] / eval(P)['co2']);
	var calc5 = est(eval(3.5) + eval(calc4));
	var calc6 = est(3.5 / calc5);
	var calc7 = est(calc3 * calc6);
	
//* SECOND IN PARENTHESES (TOP) *//
	var calc8 = est(eval(P)['ocv'] / 2);
	
//* THIRD IN PARENTHESES (TOP) *//
	var calc9 = est(eval(eval(P)['co2']) + eval(eval(P)['co']));
	
//* TOP LINE *//
	var calc10 = est(eval(calc7) - eval(calc8));
	var calc11 = est(calc10 * calc9);
	var calc12 = est(eval(calc11) + eval(calc2));
	
	

//* LEFT PARENTHESES SET (BOTTOM) *//
	var calc13 = est(eval(P)['hcv']/4);
	var calc14 = est(eval(P)['ocv']/2);
	var calc15 = est(eval(1) + eval(calc13) - eval(calc14));
	
//* RIGHT (LAST) PARENTHESES SET (INSIDE CLUSTER)*//
	var calc16 = est(eval(P)['k1']*eval(P)['hc']);
	
//* SECOND PARENTHESES SET (RIGHT CLUSTER) *//
	var calc17 = est(eval(eval(P)['co']) + eval(eval(P)['co2']) + eval(eval(calc16)));
	
//* BOTTOM LINE *//
	var calc18 = est(calc15*calc17);
	
	
	
//* LAMBDA EQUATION RESULTS *//
	var lamResult = est(calc12 / calc18);
	if (isFinite(lamResult) == false) alert("YOU MUST HAVE VEHICLE'S ENGINE RUNNING WHEN ANALYZING GASSES");
	else { 
	document.location.href=document.location.href+"#final"+cL;
	getObject('lambdaResult'+cL).innerHTML=lamResult;
	setPrntVal2(P,'a',lamResult);
	getObject('afrResult'+cL).innerHTML=est(lamResult*14.7)+" : 1";
	setPrntVal2(P,'afr',est(lamResult*14.7));
		if (lamResult < 1) {getObject('statusResult'+cL).innerHTML="RICH"; setPrntVal2(P,'stat','RICH');}
		else if (lamResult > 1) {getObject('statusResult'+cL).innerHTML="LEAN"; setPrntVal2(P,'stat','LEAN');}
		else if (lamResult == 1) {getObject('statusResult'+cL).innerHTML="STOICHIOMETRIC"; setPrntVal2(P,'stat','STOICHIOMETRIC');}
		}
	}
}






//*******************************************************************************//
//* CALCULATE O2 AND CO2 FOR LIMITS (ALL POSIBILITIES TO OBTAIN STOICHIOMETRY) *//
//*****************************************************************************//



function estLim(n) {
n = eval(n);
n = Math.round(n*100)/100;

return (n == Math.round(n)) ? n += ".00" :
		(n*10 == Math.round(n*10)) ? n += "0" :
		n;
}


//var Xco2 = "13.69";
var result = "";
//var Xo2 = "0.01";
//var num = "0";
var o2Results = new Array();
	o2Results[0]="";

var co2Results = new Array();
	co2Results[0]="";


function calcLimit(P) {


var hcLim = hcInLimit.value*0.0001;
var coLim = coInLimit.value;
var hcvLim = hcvInLimit.value;
var ocvLim = ocvInLimit.value;
var k1Lim = k1InLimit.value;


checkIn(eval(P+'GasLimit'));

	if (testVal==false) alert('YOU MUST ENTER A VALUE FOR '+noVal+'!');
	else if (testVal==true) {


//document.write(hcLim);
//alert(getObject('hcLimit').value);
		for (Xco2=0.12;Xco2<26;Xco2+=0.12) {      //***************************************//
				for (Xo2=0.12;Xo2<26;Xo2+=0.12) {   //* NOTE: GOT IT TO WORK ON 0.05 & <100 *//
														//* TOOK APPROX 20 MIN *//
//* LEFT OF PARENTHESES (TOP) *//
	var calc1 =  est(coLim/2);
	var calc2 =  est(eval(Xco2)+eval(calc1)+eval(Xo2));
	
//* FIRST IN PARENTHESES (TOP) *//	
	var calc3 = est(hcvLim / 4); //* HCV GOES HERE *//
	var calc4 = est(coLim / Xco2);
	var calc5 = est(eval(3.5) + eval(calc4));
	var calc6 = est(3.5 / calc5);
	var calc7 = est(calc3 * calc6);
	
//* SECOND IN PARENTHESES (TOP) *//
	var calc8 = est(ocvLim / 2); //* OCV GOES HERE *//
	
//* THIRD IN PARENTHESES (TOP) *//
	var calc9 = est(eval(Xco2) + eval(coLim));
	
//* TOP LINE *//
	var calc10 = est(eval(calc7) - eval(calc8));
	var calc11 = est(calc10 * calc9);
	var calc12 = est(eval(calc11) + eval(calc2));
	
	

//* LEFT PARENTHESES SET (BOTTOM) *//
	var calc13 = est(hcvLim/4); //* HCV GOES HERE *//
	var calc14 = est(ocvLim/2); //* OCV GOES HERE *//
	var calc15 = est(eval(1) + eval(calc13) - eval(calc14));
	
//* RIGHT (LAST) PARENTHESES SET (INSIDE CLUSTER)*//
	var calc16 = est(hcLim*k1Lim); //* K1 GOES HERE *//
	
//* SECOND PARENTHESES SET (RIGHT CLUSTER) *//
	var calc17 = est(eval(coLim) + eval(Xco2) + eval(calc16));
	
//* BOTTOM LINE *//
	var calc18 = est(calc15*calc17);

//* RESULT *//
	result = est(calc12 / calc18);
	

//		     num++;                          
	
	//* END OF FOR LOOP *//
	
	
		if (result == 1 && Xo2<28) {				
				
			co2Results.push(Xco2);
			o2Results.push(Xo2);
			/*Xo2 = eval(Xo2)+eval(0.01);
			//num=eval(num)+eval(1);*/
			}
	
		}
	}
		

	//var limOp = "";
		for (i=1;i<o2Results.length;i++){
		var limOp = document.createElement("OPTION");
		limOp.value = i;
		limOp.index = i;
		limOp.text = "O2 = "+estLim(o2Results[i])+"%  if  CO2 = "+estLim(co2Results[i])+"%";
			resultMenu.options.add(limOp);
			//document.write("O2 = "+estLim(o2Results[i])+" if CO2 = "+estLim(co2Results[i])+"<br>");
			
		}
		
		
		
		//alert(eval(resultMenu.optins.lenth));
	} 
	
}



function setSelected(P) {
var gotcha = resultMenu;
var gotchaVal = resultMenu.options[resultMenu.selectedIndex].value;

co2InLimit.value=estLim(co2Results[gotchaVal]);
o2InLimit.value=estLim(o2Results[gotchaVal]);

eval(P+'Limit')['hc']=hcInLimit.value*0.0001;
eval(P+'Limit')['co']=est(coInLimit.value);
eval(P+'Limit')['co2']=estLim(co2Results[gotchaVal]);
eval(P+'Limit')['o2']=estLim(o2Results[gotchaVal]);
eval(P+'Limit')['hcv']=est(hcvInLimit.value);
eval(P+'Limit')['ocv']=est(ocvInLimit.value);
eval(P+'Limit')['k1']=est(k1InLimit.value);

setPrntVal(P,'co2','Limit');
setPrntVal(P,'o2','Limit');


calcIt('limit',P);
setPrntVal3(P);
}


function resetLim() {
			if (o2Results.length>=2) {
					for (i=1; i<o2Results.length; i++) {
						o2Results.splice(1,o2Results.length);
						co2Results.splice(1,co2Results.length);
						}
			}

						
			for (i=eval(resultMenu.options.length); i>0; i--) {
			resultMenu.options.remove(i);
			}
			
		hcInLimit.value="0";
		coInLimit.value="0";
		co2InLimit.value="0";
		o2InLimit.value="0";
		hcvInLimit.value="1.8";
		ocvInLimit.value="0.017";
		k1InLimit.value="6";
		getObject('lambdaResultLimit').innerHTML="";
		getObject('afrResultLimit').innerHTML="";
		getObject('statusResultLimit').innerHTML="";
		
}

