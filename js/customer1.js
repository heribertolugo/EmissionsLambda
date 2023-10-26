
var IEDOM = (document.all) ? true:false;
var W3CDOM = (document.getElementById) ? true:false;
var NS4DOM = (document.layer) ? true:false;


function getObject(id) {
	if (IEDOM) ref=id;
	else if (W3CDOM) ref="document.getElementById('"+id+"')";
	var object=eval(ref);
	return object;
}

// THIS FUNCTION MAKES THE ACTIVE ITEM FOLLOW THE MOUSE
function placeIt(object, x, y) {
   if (IEDOM || W3CDOM) {
      object.style.left=x;
      object.style.top=y;
// BELOW IS THE HIGHLIGHT AFFECT FOR THE ITEM THAT WILL
// BE SWAPPED FOR THE ACTIVE ITEM (HIGHLIGHTS RED)  
var pX2 = 601;
var pY2 = 351;
	   if (x < 200) pX2=10;
	   else if (x > 200 && x < 400) pX2=210;
	   else if (x > 400 && x < 600) pX2=410;
	   
	   if (y < 50) pY2=10;
	   else if (y > 50 && y < 100) pY2=60;
	   else if (y > 100 && y < 150) pY2=110;
	   else if (y > 150 && y < 200) pY2=160;
	   else if (y > 200 && y < 250) pY2=210;
	   else if (y > 250 && y < 300) pY2=260;
	   else if (y > 300 && y < 350) pY2=310;
	   
	   for (i=0; i<itemName.length; i++) {
	   if (object.id == itemName[i]) {
	   colorIt2(getObject(itemName[i]), "blue", "blue"); 
	   
		   }else if (object.id != itemName[i]) {
		    colorIt2(getObject(itemName[i]), "#cccccc", "#000000");
			//alert(object.id);
			   if (parseInt(getObject(itemName[i]).style.left)==pX2 && parseInt(getObject(itemName[i]).style.top)==pY2) {
			   colorIt2(getObject(itemName[i]), "red", "red");
			   }
		   }
	   }
   }
}

// THIS FUNCTION PERFORMS THE FOLLOWING
// A: GETS THE COORDINATES OF ITEM TO BE SWAPPED WITH ACTIVE
// B: SWAPS ACTIVE WITH OTHER ITEM
// C: UPDATES ITEMS ARRAY FOR OUT-PUT REASONS
// D: SETS OTHER ITEM'S RED HIGHLIGHT BACK TO NORMAL
// E: SETS LAYOUT PLACEMENT FOR PRINT ACCORDING TO ITEM ARRAY
function placeIt1(object, x, y) {
var pX = 601;
var pY = 351;
// START A
	   if (x < 200) pX=10;
	   else if (x > 200 && x < 400) pX=210;
	   else if (x > 400 && x < 600) pX=410;
	   
	   if (y < 50) pY=10;
	   else if (y > 50 && y < 100) pY=60;
	   else if (y > 100 && y < 150) pY=110;
	   else if (y > 150 && y < 200) pY=160;
	   else if (y > 200 && y < 250) pY=210;
	   else if (y > 250 && y < 300) pY=260;
	   else if (y > 300 && y < 350) pY=310;
// END A	   
	if (IEDOM || W3CDOM) {
// START B
	   for (i=0; i<itemName.length; i++) {
		   if (parseInt(getObject(itemName[i]).style.left)==pX && parseInt(getObject(itemName[i]).style.top)==pY) {
		   	   for (n=0; n<itemName.length; n++) {
				   if(object.id==itemName[n]) {
				   getObject(itemName[i]).style.left=itemX[n];
				   getObject(itemName[i]).style.top=itemY[n];
// START C				   
				   itemName[n]=itemName[i];
				   itemName[i]=object.id;
// START D
				   getObject(itemName[n]).style.color="#000000";
				   getObject(itemName[n]).style.borderColor="#cccccc";
// START E				   
				   addItem = document.forms.info.addItem;
				   if (addItem.options.length>0) {
				   for (q=eval(addItem.options.length); q>=0; q--) {
					   if (IEDOM) {
						addItem.options.remove(q);
						}else if (W3CDOM) {
						addItem.options[q]=null;
						}
					}
					}
				   for (r=0; r<itemName.length; r++){
					var addOp = document.createElement("OPTION");
					addOp.value = r;
					//addOp.index = r;
					addOp.text = ""+itemName[r]+"";
						addItem.options.add(addOp);			
					}
					
				   }
			   }
		   }
	   }
   }
// THIS FINISHES B (THE SWAP) AND PLACES ACTIVE ITEM
// IN NEW PLACE
	   object.style.left=pX;
       object.style.top=pY;   	   

}

function getXCoord(object) {
   if (IEDOM || W3CDOM) return parseInt(object.style.left);
}

function getYCoord(object) {
   if (IEDOM || W3CDOM) return parseInt(object.style.top);
}

function withinIt(x, y, object) {
   within=false;
   if (IEDOM || W3CDOM) {
      otop=parseInt(object.style.top);
      obottom=otop+parseInt(object.style.height);
      oleft=parseInt(object.style.left);
      oright=oleft+parseInt(object.style.width);
   } 
   if ((y>otop && y<obottom) && (x>oleft && x<oright)) within=true;
   return within;
}

function setZ(object, z) {
   if (IEDOM || W3CDOM) object.style.zIndex=z;
}

// colorIt IS USED TO HIGHLIGHT ITEM READY TO BE MOVED (BLUE)
var newColor = "default";

function colorIt(o, c) {
   if (IEDOM || W3CDOM) {
  // object = getObject(o);
	  if (newColor == "default") {
		  o.style.color=c;
		  o.style.borderColor=c;
		  newColor="";
	  }else if (newColor != "default") {
		  o.style.color="#000000";
		  o.style.borderColor="#cccccc";
		  newColor="default";
	  }
   }
}

// colorIt2 IS USED TO CHANGE TEXT & BORDER COLOR VARIOUSLY

function colorIt2(o, c, tc) {
   if (IEDOM || W3CDOM) {
		  o.style.color=tc;
		  o.style.borderColor=c;
   }
}

function EventPositionX(e) {
	if (IEDOM) return event.clientX;
	else if (W3CDOM) return e.clientX;
}

function EventPositionY(e) {
	if (IEDOM) return event.clientY;
	else if (W3CDOM) return e.clientY;
}

//*******************************************************//


var dragItem=null;
var diffX=0; var diffY=0;
var maxZ=51;

var itemName = new Array();
	itemName[0] = "WOItem";
	itemName[1] = "Other1Item";
	itemName[2] = "CurdateItem";
	itemName[3] = "FNameItem";
	itemName[4] = "Other2Item";
	itemName[5] = "LNameItem";
	itemName[6] = "AddressItem";
	itemName[7] = "Other3Item";
	itemName[8] = "PhoneItem";
	itemName[9] = "CityItem";
	itemName[10] = "StateItem";
	itemName[11] = "ZipItem";
	itemName[12] = "VYearItem";
	itemName[13] = "VMakeItem";
	itemName[14] = "VModelItem";
	itemName[15] = "VColorItem";
	itemName[16] = "VEngineItem";
	itemName[17] = "VVinItem";
	itemName[18] = "Other4Item";
	itemName[19] = "Other5Item";
	itemName[20] = "Other6Item";
	
var itemX = new Array();
	itemX[0] = 10;
	itemX[1] = 210;
	itemX[2] = 410;
	itemX[3] = 10;
	itemX[4] = 210;
	itemX[5] = 410;
	itemX[6] = 10;
	itemX[7] = 210;
	itemX[8] = 410;
	itemX[9] = 10;
	itemX[10] = 210;
	itemX[11] = 410;
	itemX[12] = 10;
	itemX[13] = 210;
	itemX[14] = 410;
	itemX[15] = 10;
	itemX[16] = 210;
	itemX[17] = 410;
	itemX[18] = 10;
	itemX[19] = 210;
	itemX[20] = 410;

var itemY = new Array();
	itemY[0] = 10;
	itemY[1] = 10;
	itemY[2] = 10;
	itemY[3] = 60;
	itemY[4] = 60;
	itemY[5] = 60;
	itemY[6] = 110;
	itemY[7] = 110;
	itemY[8] = 110;
	itemY[9] = 160;
	itemY[10] = 160;
	itemY[11] = 160;
	itemY[12] = 210;
	itemY[13] = 210;
	itemY[14] = 210;
	itemY[15] = 260;
	itemY[16] = 260;
	itemY[17] = 260;
	itemY[18] = 310;
	itemY[19] = 310;
	itemY[20] = 310;

function setEvents() {
var i = 0;
	while(i<itemName.length) {
	assignF(itemName[i]);
	 i++;
	}
document.onselectstart=stopSelect;
}

function stopSelect() {
	return false;
	}
	
function assignF(id) {
	object=getObject(id);
	
	if (IEDOM) {
	object.attachEvent("onmousedown", grabIt);
	object.attachEvent("onmousemove", moveIt);
	object.attachEvent("onmouseup", dropIt);
	object.attachEvent("onmouseover", showCursor);
	object.attachEvent("onmouseout", showCursor);
	
	killInput("hidden");
	}
	else if (W3CDOM) {	
	object.addEventListener("mousedown", grabIt, true);
	object.addEventListener("mousemove", moveIt, true);
	object.addEventListener("mouseup", dropIt, true);
	object.addEventListener("mouseover", showCursor, true);
	object.addEventListener("mouseout", showCursor, true);
	
	killInput("hidden");	
	}
	else if (NS4DOM) {	
	object.onmousedown=grabIt;
	object.onmousemove=moveIt;
	object.onmouseup=dropIt;
	object.onmouseover=showCursor;
	object.onmouseout=showCursor;	
	}
}

function showCursor(e) {
	if (IEDOM) hoverItem=event.srcElement;
	else if (W3CDOM) hoverItem=e.currentTarget;
	
	if (IEDOM || W3CDOM) hoverItem.style.cursor="move";
	colorIt(hoverItem,"blue");
}

function grabIt(e) {
	MouseX=EventPositionX(e);
	MouseY=EventPositionY(e);
	if (IEDOM) dragItem=event.srcElement;
	else if (W3CDOM) dragItem=e.currentTarget;
	if (dragItem !=null) {
		maxZ++;
		setZ(dragItem, maxZ);
		diffX=MouseX-getXCoord(dragItem);
		diffY=MouseY-getYCoord(dragItem);
		}
}

function moveIt(e) {

	if (dragItem != null) {
	MouseX=EventPositionX(e);
	MouseY=EventPositionY(e);
	placeIt(dragItem, MouseX-diffX, MouseY-diffY);
	
	/*var Pdata = new Array();
	for (i=0; i<itemName.length; i++) {
	start = itemName[i].charAt(0);
	end = itemName[i].indexOf("I",start);
	var dataVal = itemName[i].substring(start,end);
		Pdata[i] = eval("document.forms.info."+dataVal);
		Pdata[i].blur();
	}*/
	}
}

function dropIt(e) {
	if (dragItem != null) {
	placeIt1(dragItem, MouseX-diffX, MouseY-diffY);
	dragPosX=getXCoord(dragItem);
	dragPosY=getYCoord(dragItem);
	Grid=getObject("itemGrid");
	if (!withinIt(dragPosX, dragPosY, Grid)) snapBack();
	dragItem=null;
	}
}

function snapBack() {
var i = 0;
	while (i<itemName.length) {
		if (dragItem.id==itemName[i]) placeIt(dragItem, itemX[i], itemY[i]);
		i++;
	}
}

function hideCursor(e) {
	if (IEDOM) hoverItem=event.srcElement;
	else if (W3CDOM) hoverItem=e.currentTarget;
	
	if (IEDOM || W3CDOM) hoverItem.style.cursor="auto";
}

// THIS IS USED FOR INPUT DATA BUTTON/CANCEL MOVING ITEMS

function releaseAll() {	
var i = 0;
	while(i<itemName.length) {
	objectC = new Array();
	objectC[i] = getObject(itemName[i]);
	
		if (IEDOM) {
	objectC[i].detachEvent("onmousedown", grabIt);
	objectC[i].detachEvent("onmousemove", moveIt);
	objectC[i].detachEvent("onmouseup", dropIt);
	objectC[i].detachEvent("onmouseover", showCursor);
	objectC[i].detachEvent("onmouseout", showCursor);
	
	killInput("visible",itemName[i]);
	
	}
	 
		else if (W3CDOM) {
		objectC[i].removeEventListener("mousedown", grabIt, true);
		objectC[i].removeEventListener("mousemove", moveIt, true);
		objectC[i].removeEventListener("mouseup", dropIt, true);
		objectC[i].removeEventListener("mouseover", showCursor, true);
		objectC[i].removeEventListener("mouseout", showCursor, true);
	
		killInput("visible",itemName[i]);
		//objectC.style.cursor="default";
		}
		
		i++;
	}
}


/**************************************************************/

function setDelMenu() {

		dItem=document.forms.info.deleteItem;		
		
		for (i=0; i<itemName.length; i++){
			start = itemName[i].charAt(0);
			end = itemName[i].indexOf("I",start);
			var dataVal = itemName[i].substring(start,end);
		
				if (!dataVal.indexOf("Other",start)) {
					dataVal = "";
				} else if (dataVal.charAt(0) == "V") {
					start2 = itemName[i].indexOf("V");
					end2 = itemName[i].indexOf("I",start2);
					dataVal = itemName[i].substr(1,end2-1);
					
					var DelOp = document.createElement("OPTION");
					DelOp.value = dataVal;
					//DelOp.index = i;
					DelOp.text = ""+dataVal+"";
					dItem.options.add(DelOp);
				} else {
					dataVal = dataVal;
					
					var DelOp = document.createElement("OPTION");
					DelOp.value = dataVal;
					//DelOp.index = i;
					DelOp.text = ""+dataVal+"";
					dItem.options.add(DelOp);
				}					
		}
}


function setDelBut () {
	if (document.forms.info.deleteItem.options.length==0) {
	alert("There's nothing else to delete!");
	}else {
		for (i=0; i<document.forms.info.deleteItem.options.length; i++) {
			if (document.forms.info.deleteItem.options[i].selected != false) {
			//alert();document.forms.info.deleteItem.value
			if (IEDOM) document.forms.info.deleteItem.options.remove(document.forms.info.deleteItem.options.selectedIndex);
			else if (W3CDOM) document.forms.info.deleteItem.options[document.forms.info.deleteItem.options.selectedIndex] = null;
			}
		}
	}
}

/**************************************************************/

//var Pdata = new Array();
function getData() {

	for (i=0; i<itemName.length; i++) {
	//start = itemName[i].charAt(0);
	//end = itemName[i].indexOf("I",start);
	//var dataVal = itemName[i].substring(start,end);
	//	Pdata[i] = eval("document.forms.info."+dataVal);
		//alert (Pdata[i].value);
	}
}


function killInput(v,object) {
var Pdata = new Array();
	for (i=0; i<itemName.length; i++) {
	start = itemName[i].charAt(0);
	end = itemName[i].indexOf("I",start);
	var dataVal = itemName[i].substring(start,end);
		Pdata[i] = eval("document.forms.info."+dataVal);
		Pdata[i].style.visibility=v;
		
		
		//var o = eval("document.forms.info."+object+".name");
		//alert(o);
		//o.style.visibility=v;
		
			if (v == "visible") {
			Pdata[i].style.cursor="text";
			getObject(itemName[i]).style.cursor="default";
			}
		}
	//
}