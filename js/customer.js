
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
//        AND UPDATES DELETE LIST BY CALLING DELETE LIST FUNCTION
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
				   if(object.id==itemName[n] && i!=21) {
				   //alert(itemName[n]+"---"+itemName[i]+"---"+i);
				   getObject(itemName[i]).style.left=itemX[n];
				   getObject(itemName[i]).style.top=itemY[n];
// START C				   
				   itemName[n]=itemName[i];
				   itemName[i]=object.id;
// START D
				   getObject(itemName[n]).style.color="#000000";
				   getObject(itemName[n]).style.borderColor="#cccccc";
// START E				   
				   deleteItem = document.forms.info.deleteItem;
				   if (deleteItem.options.length>0) {
				   for (q=eval(deleteItem.options.length); q>=0; q--) {
					   if (IEDOM) {
						deleteItem.options.remove(q);
						}else if (W3CDOM) {
						deleteItem.options[q]=null;
						}
					}
					}
				   //for (r=0; r<itemName.length; r++){
					//var addOp = document.createElement("OPTION");
					//addOp.value = r;
					//addOp.text = ""+itemName[r]+"";
					//	addItem.options.add(addOp);			
					//}
					
					setDelMenu();
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
	
var itemGrave = new Array();
	
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

var itemOther = new Array();
	itemOther[0] = "1";
	itemOther[1] = "2";
	itemOther[2] = "3";
	itemOther[3] = "4";
	itemOther[4] = "5";
	itemOther[5] = "6";

function itemGod (judgement,n,idItem) { 
	if (judgement == "death") {
		eval(itemName[n]).outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="Other'+idItem+'Item">Available Space # '+idItem+'</div>';
	} else if (judgement == "forgive") {
	
		switch(idItem) {
			case"WOItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">WO# <input name="WO" type="text" size="7"></div>';
				break
			case"CurdateItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'"><input name="Curdate" type="text" value="11/11/05" size="8" maxlength="8" readonly="true"></div>';
				break
			case"FNameItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">FName <input name="FName" type="text" size="10"></div>';
				break
			case"LNameItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">LName <input name="LName" type="text" size="10"></div>';
				break
			case"AddressItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Address <input name="Address" type="text" size="14"></div>';
				break
			case"PhoneItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Phone <input name="Phone" type="text" size="13" maxlength="20"></div>';
				break
			case"CityItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">City <input name="City" type="text" size="10"></div>';
				break
			case"StateItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">State <select name="State"></select></div>';
				break
			case"ZipItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Zip <input name="Zip" type="text" size="6" maxlength="5"></div>';
				break
			case"VYearItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Year <select name="VYear"></select></div>';
				break
			case"VMakeItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Make <input name="VMake" type="text" size="15" maxlength="15"></div>';
				break
			case"VModelItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Model <input name="VModel" type="text" size="15" maxlength="15"></div>';
				break
			case"VColorItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Color <input name="VColor" type="text" size="10" maxlength="10"></div>';
				break
			case"VEngineItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Engine <input name="VEngine" type="text" size="5" maxlength="4"></div>';
				break
			case"VVinItem":
				eval("Other"+itemOther[itemOther.length-1]+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Vin <input name="VVin" type="text" size="18" maxlength="17"></div>';
				break
			default:
				itemAngel(itemOther[itemOther.length-1],n,idItem);						
		}
		
		
			arrayShuffle('itemGrave',idItem);
			
			loop1:
			for (i=0; i<itemName.length; i++) {
				if (itemName[i].indexOf('Other'+itemOther.length,0) >= 0) {
				itemName[i]=idItem;
				itemOther.pop();
				break loop1;
				}
			}			
			setDelMenu();
	}else if (judgement == "reborn") {
	var OtherN = itemGod.arguments[3];
		switch(idItem) {
			case"WOItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">WO# <input name="WO" type="text" size="7"></div>';
				break
			case"CurdateItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'"><input name="Curdate" type="text" value="11/11/05" size="8" maxlength="8" readonly="true"></div>';
				break
			case"FNameItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">FName <input name="FName" type="text" size="10"></div>';
				break
			case"LNameItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">LName <input name="LName" type="text" size="10"></div>';
				break
			case"AddressItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Address <input name="Address" type="text" size="14"></div>';
				break
			case"PhoneItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Phone <input name="Phone" type="text" size="13" maxlength="20"></div>';
				break
			case"CityItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">City <input name="City" type="text" size="10"></div>';
				break
			case"StateItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">State <select name="State"></select></div>';
				break
			case"ZipItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Zip <input name="Zip" type="text" size="6" maxlength="5"></div>';
				break
			case"VYearItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Year <select name="VYear"></select></div>';
				break
			case"VMakeItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Make <input name="VMake" type="text" size="15" maxlength="15"></div>';
				break
			case"VModelItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Model <input name="VModel" type="text" size="15" maxlength="15"></div>';
				break
			case"VColorItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Color <input name="VColor" type="text" size="10" maxlength="10"></div>';
				break
			case"VEngineItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Engine <input name="VEngine" type="text" size="5" maxlength="4"></div>';
				break
			case"VVinItem":
				eval("Other"+OtherN+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'">Vin <input name="VVin" type="text" size="18" maxlength="17"></div>';
				break
			default:
				itemAngel(OtherN,n,idItem);		
		}
		
		
			arrayShuffle('itemGrave',idItem);
			
			loop2:
			for (i=0; i<itemName.length; i++) {
				if (itemName[i].indexOf('Other'+OtherN,0) >= 0) {
				itemName[i]=idItem;
				itemOther.pop();
				break loop2;
				}
			}	
			setAddMenu();
			setDelMenu();
			//arrayShuffle('itemOther',OtherN);
			setAddEl();
			//for (i=0; i<itemOther.length; i++) {
			//	eval('Other'+itemOther[i]+'Item').outerHTML='<div style="position:absolute; left:'+itemX[i]+'; top:'+itemY[i]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="Other'+itemOther[i]+'Item">Available Space #'+itemOther[i]+'</div>';
			//}				
	}else if (judgement == "beget") {
		var inputNum = itemGod.arguments[4];
		var idItemData = itemGod.arguments[3];
		var deadOther = itemGod.arguments[5];

		eval(itemName[n]).outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+idItem+'Item">'+idItem+' <input name="'+idItem+'" type="text" value="'+idItemData+'" size="'+inputNum+'" maxlength="'+inputNum+'"></div>';
		
		loop4:
			for (i=0; i<itemGrave.length; i++) {
				if (itemGrave[i].indexOf(idItem,0) >= 0) {
				arrayShuffle('itemGrave',idItem);
				break loop4;
				}
			}
		
			
			loop3:
			for (i=0; i<itemName.length; i++) {
				if (itemName[i].indexOf('Other'+deadOther,0) >= 0) {
				itemName[i]=idItem+'Item';
				itemOther.pop();
				break loop3;
				}
			}	
			setAddMenu();
			setDelMenu();
			setAddEl();
	}
}

function itemAngel(being,n,idItem) {
var bLen = new String(idItem);
var inputMax = eval(16-bLen.length);
var soul = "";

	if (bLen.indexOf("Item",0) >= 0) {
		start = bLen.charAt(0);
		end = bLen.indexOf("Item",start);
		var soul = bLen.substring(start,end);
	} else soul=idItem;

eval("Other"+being+"Item").outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="'+soul+'Item">'+soul+' <input name="'+soul+'" type="text" size="'+inputMax+'" maxlength="'+inputMax+'"></div>';
}

function arrayShuffle(A,val) {
	if (eval(A)[0]!=val) {
	var start = eval(A)[0];
	
	eval(A).shift();
	
	eval(A).push(start);
	arrayShuffle(A,val);
	//alert(eval(A));
	} else if (eval(A)[0]==val) {
	eval(A).shift();
	//alert(eval(A)+" ---equal");
	}
}

function removeOP(F,I) {
var O = eval('document.forms.'+F+'.'+I);

for (q=eval(O.options.length); q>=0; q--) {
	   if (IEDOM) {
		O.options.remove(q);
		}else if (W3CDOM) {
		O.options[q]=null;
		}
	}
}

/**************************************************************/

function setDelMenu() {
		dItem=document.forms.info.deleteItem;
		
		if (dItem.options.length>0) {
				   removeOP('info','deleteItem');
				}		
		
		for (i=0; i<itemName.length; i++){
		var itemVal = itemName[i];
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
					DelOp.value = itemVal;
					//DelOp.index = i;
					DelOp.text = ""+dataVal+"";
					dItem.options.add(DelOp);
				} else {
					dataVal = dataVal;
					
					var DelOp = document.createElement("OPTION");
					DelOp.value = itemVal;
					//DelOp.index = i;
					DelOp.text = ""+dataVal+"";
					dItem.options.add(DelOp);
				}					
		}
}

function killItem(deadItem) {
var nDex = "";
var newVal = "";
	for (n=0; n<itemName.length; n++) {
		if (itemName[n].indexOf(deadItem,0) >= 0) {
		newVal = itemName[n];
			//eval(itemName[n]).outerHTML='<div style="position:absolute; left:'+itemX[n]+'; top:'+itemY[n]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="OtherItem'+itemOther+'">'+itemOther+'</div>';
			
			var insertOther = eval(itemOther.length+1);
			itemGod('death',n,insertOther);
			itemOther.push(insertOther);
			itemName[n]="Other"+itemOther[itemOther.length-1]+"Item";
			
			
			itemGrave.push(deadItem);
			setAddMenu();
		
			var grave = eval(itemGrave.length-1);
			var testOp = document.createElement("OPTION");
				testOp.value = newVal;
				//testOp.value = itemGrave[grave];
				//DelOp.index = i;
				testOp.text = ""+itemGrave[grave]+"";
				testMen.options.add(testOp);
							
		
				if (testMen2.options.length>0) {
				   for (q=eval(testMen2.options.length); q>=0; q--) {
					   if (IEDOM) {
						testMen2.options.remove(q);
						}else if (W3CDOM) {
						testMen2.options[q]=null;
						}
					}
				}					
					for (i=0; i<itemName.length; i++) {
					var testOp2 = document.createElement("OPTION");
						testOp2.value = itemName[i];
						//DelOp.index = i;
						testOp2.text = ""+itemName[i]+"";
						testMen2.options.add(testOp2);
					}
		} 
	}					
}


function setDelBut () {
	if (document.forms.info.deleteItem.options.length==0) {
	alert("There's nothing else to delete!");
	}else {
		for (i=0; i<document.forms.info.deleteItem.options.length; i++) {
		//alert(document.forms.info.deleteItem.options[i].selected);
			if (document.forms.info.deleteItem.options[i].selected != false) {
			killItem(document.forms.info.deleteItem.value);
			if (IEDOM) document.forms.info.deleteItem.options.remove(document.forms.info.deleteItem.options.selectedIndex);
			else if (W3CDOM) document.forms.info.deleteItem.options[document.forms.info.deleteItem.options.selectedIndex] = null;
			
			}
		}
	}
}

function setDelAllBut () {
var dItem = document.forms.info.deleteItem;
	if (dItem.options.length==0) {
	alert("There's nothing else to delete!");
	} else {
		var i=0;
		while ( i<dItem.options.length) {
		killItem(dItem.options[i].value);
		i++;
		}
		removeOP('info','deleteItem');
	}
}


function updateTest() {
//var grave = eval(itemGrave.length-1);
//			var testOp = document.createElement("OPTION");
//				testOp.value = itemGrave[grave];
//				//DelOp.index = i;
//				testOp.text = ""+itemGrave[grave]+"";
//				testMen.options.add(testOp);
				
				
				if (testMen.options.length>0) {
				   for (q=eval(testMen.options.length); q>=0; q--) {
					   if (IEDOM) {
						testMen.options.remove(q);
						}else if (W3CDOM) {
						testMen.options[q]=null;
						}
					}
				}//else {					
					for (i=0; i<itemGrave.length; i++) {
					var testOp = document.createElement("OPTION");
				testOp.value = itemGrave[i];
				//DelOp.index = i;
				testOp.text = ""+itemGrave[i]+"";
				testMen.options.add(testOp);
					}
							
		
				if (testMen2.options.length>0) {
				   for (q=eval(testMen2.options.length); q>=0; q--) {
					   if (IEDOM) {
						testMen2.options.remove(q);
						}else if (W3CDOM) {
						testMen2.options[q]=null;
						}
					}
				}//else {					
					for (i=0; i<itemName.length; i++) {
					var testOp2 = document.createElement("OPTION");
						testOp2.value = itemName[i];
						//DelOp.index = i;
						testOp2.text = ""+itemName[i]+"";
						testMen2.options.add(testOp2);
					}
					

				if (otherTest.options.length>0) {
				   for (q=eval(otherTest.options.length); q>=0; q--) {
					   if (IEDOM) {
						otherTest.options.remove(q);
						}else if (W3CDOM) {
						otherTest.options[q]=null;
						}
					}
				}//else {					
					for (i=0; i<itemOther.length; i++) {
					var otherOp = document.createElement("OPTION");
						otherOp.value = itemOther[i];
						//DelOp.index = i;
						otherOp.text = "Other"+itemOther[i]+"Item";
						otherTest.options.add(otherOp);
					}				
}


/**************************************************************/


function setAddBut(but){
/*
var addItem = document.forms.info.addItem;
	if (addItem.options.length>0) {
	   for (q=eval(addItem.options.length); q>=0; q--) {
		   if (IEDOM) {
			addItem.options.remove(q);
			}else if (W3CDOM) {
			addItem.options[q]=null;
			}
		}
	}	document.forms.info.addItem.options[document.forms.info.addItem.selectedIndex].value				
		for (i=0; i<itemGrave.length; i++) {
		var addOp = document.createElement("OPTION");
		addOp.value = itemGrave[i];
		//DelOp.index = i;
		addOp.text = ""+itemGrave[i]+"";
		addItem.options.add(addOp);
		}*/
	if (but=="addSel") {
		if (document.forms.info.addItem.options.length==0) {
		alert("There's nothing to add!");
		}else if (document.forms.info.addItem.value!="") {
			getObject("addCusBox").className="hideIt";
			getObject("addBox").className="hideIt";
			getObject("addRanOpBox").className="addToBox";
			//getObject("itemToAdd").innerHTML=" "+document.forms.info.addItem.text+" ";
		}else {
		alert("You must make a selection!");
		}
	}else if (but=="addCus"){
	getObject("addRanOpBox").className="hideIt";
	getObject("addBox").className="hideIt";
	getObject("addCusBox").className="addToBox";
	setAddEl('Cust');
	}
}

function setAddMenu() {
var addItem = document.forms.info.addItem;

	if (addItem.options.length>0) {
	   /*for (q=eval(addItem.options.length); q>=0; q--) {
		   if (IEDOM) {
			addItem.options.remove(q);
			}else if (W3CDOM) {
			addItem.options[q]=null;
			}
		}*/
		removeOP('info','addItem');
	}			
		
		for (i=0; i<itemGrave.length; i++){
		var itemVal = itemGrave[i];
			start = itemGrave[i].charAt(0);
			end = itemGrave[i].indexOf("I",start);
			var dataVal = itemGrave[i].substring(start,end);
		
				if (!dataVal.indexOf("Other",start)) {
					dataVal = "";
				} else if (dataVal.charAt(0) == "V") {
					start2 = itemGrave[i].indexOf("V");
					end2 = itemGrave[i].indexOf("I",start2);
					dataVal = itemGrave[i].substr(1,end2-1);
					
					var addOp = document.createElement("OPTION");
					addOp.value = itemVal;
					//DelOp.index = i;
					addOp.text = ""+dataVal+"";
					addItem.options.add(addOp);
				} else {
					dataVal = dataVal;
					
					var AddOp = document.createElement("OPTION");
					AddOp.value = itemVal;
					//DelOp.index = i;
					AddOp.text = ""+dataVal+"";
					addItem.options.add(AddOp);
				}					
		}
}

//+itemOther[itemOther.length-1]
function reviveItem(val) {
	arrayShuffle('itemGrave',val);
	for (i=0; i<itemName.length; i++) {
		if (itemName[i].indexOf('Other',0) >= 0) {
		itemName[i]=val;
		itemOther.pop();
		}
	}
	setDelMenu();
}

function randomLoc(ans) {
	if (ans=="yes") {
	getObject("addRanOpBox").className="hideIt";
	getObject("addBox").className="hideIt";
	getObject("addCusBox").className="hideIt";
		for (i=0; i<document.forms.info.addItem.options.length; i++) {
		//alert(document.forms.info.deleteItem.options[i].selected);
			if (document.forms.info.addItem.options[i].selected != false) {
			var coordNum="";
				for (n=0; n<itemName.length; n++) {
					if (itemName[n]=="Other"+itemOther.length+"Item") coordNum = n;
					//alert(itemName[n]+"---"+n+"----"+"Other"+itemOther.length+"Item");
				}			
			
			itemGod('forgive',coordNum,document.forms.info.addItem.value);
			if (IEDOM) document.forms.info.addItem.options.remove(document.forms.info.addItem.options.selectedIndex);
			else if (W3CDOM) document.forms.info.addItem.options[document.forms.info.addItem.options.selectedIndex] = null;
			
			}
		}
	}else if (ans=="no") {
	getObject("addRanOpBox").className="hideIt";
	getObject("addCusBox").className="hideIt";
	getObject("addBox").className="addToBox";
	setAddEl();
	}
}

function setAddEl(sect) {
var C = "";
if (sect=='Cust') C = sect;

var F = eval("document.forms.addToEl"+C+".addToBox"+C)

if (F.options.length>0) removeOP('addToEl'+C,'addToBox'+C);

	for (i=0; i<itemOther.length; i++) {
		var boxOp = document.createElement("OPTION");
			boxOp.value = itemOther[i];
			boxOp.text = " "+itemOther[i]+" ";
			F.options.add(boxOp);
	}
}

var custOk2 = "no";
function doAddEl(sect) {
var C = "";
if (sect=='Cust') C = sect;

var eF = eval("document.forms.addToEl"+C);
var iF = eval("document.forms.info");
var elVal = eval("eF.addToBox"+C+".value");
var itemVal = iF.addItem.value;
var place = "";
var cdn = "ok";
var cd = "ok";
var goOk = "no";

	if (sect=='Cust') {
	
var DescLen = new String(eF.custDescName.value);
var DataLen = new String(eF.custData.value);
var inputLen =eval(DescLen.length+DataLen.length);	
	
		if (eF.custDescName.value=="(ie.) Make" || eF.custDescName.value=="") cdn='no';
		if (eF.custData.value=="(ie.) Toyota" || eF.custData.value=="") cd='no';
		//if (descLen.indexOf(' ',0)>=0 || eF.custDescName.value=="") cdn='no';
		//if (eF.custData.value=="(ie.) Toyota" || eF.custData.value=="") cd='no';
		if (cdn=='ok' && cd=='ok') goOk="yes";
		if (inputLen>16) alert('You have '+eval(inputLen-16)+' character(s) too many. MAX=16');
		
		for (i=0; i<itemName.length; i++) {
				if (itemName[i]==DescLen+'Item') {
				alert('YOU CANNOT ADD AN EXISTING ITEM!!');
				goOk = "no";
				}
			}
			
		for (i=0; i<itemGrave.length; i++) {
				if (itemGrave[i]==DescLen+'Item') {
				alert('YOU CANNOT ADD AN EXISTING ITEM!! Add item from list');
				goOk = "no";
				}
			}
		
		if (inputLen<=16 && goOk=="yes") {
			var maxLen = eval(16-DescLen.length);
			var newItem = eF.custDescName.value;
			var newItemData = eF.custData.value;

			for (i=0; i<itemName.length; i++) {
				if (!itemName[i].indexOf('Other'+elVal,0)) {
				place=i;
				}
			}
			itemGod ('beget',place,newItem,newItemData,maxLen,elVal);
			
			fixOtherItem();
			setAddEl(sect);
		}
	}else {
	//arrayShuffle('itemGrave',itemVal);
	//itemOther.pop();
		for (i=0; i<itemName.length; i++) {
			if (!itemName[i].indexOf('Other'+elVal,0)) {
			//itemName[i]=itemVal;
			place=i;
			//alert(itemName[i]);
			}
		}
	//itemGod (judgement,n,idItem);
	itemGod ('reborn',place,itemVal,elVal);
	fixOtherItem();
	setAddEl(sect);	
	}
}

var Onum = 0;
function fixOtherItem() {
	for (i=0; i<itemName.length; i++) {
		if (!itemName[i].indexOf('Other',0)) {
		//alert(itemOther[Onum]);
			itemGod('death',i,itemOther[Onum]+'x');
			//itemName[i]='Other'+itemOther[Onum]+'Item';
			Onum++;			
		}
	}Onum=0;
	for (i=0; i<itemName.length; i++) {
		if (!itemName[i].indexOf('Other',0)) {
			eval('Other'+itemOther[Onum]+'xItem').outerHTML='<div style="position:absolute; left:'+itemX[i]+'; top:'+itemY[i]+'; visibility:visible; overflow: hidden; display:inline; border: 2px solid #CCCCCC; width:188px; height:32px; font-family: Geneva, Arial, Helvetica, san-serif; font-size: 14px; color: #000000; background-color: #CCCCCC; z-index:155" id="Other'+itemOther[Onum]+'Item">Available Space # '+itemOther[Onum]+'</div>';
			itemName[i]='Other'+itemOther[Onum]+'Item';
			Onum++;			
		}
	}Onum=0;
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
		//alert(eval(Pdata[i].style=new Boolean()));
		var BooIn = (Pdata[i]) ? true:false;
		if(BooIn==true) Pdata[i].style.cssText="visibility:"+v;
		
		
		//var o = eval("document.forms.info."+object+".name");
		//alert(o);
		//o.style.visibility=v;
		
			if (v == "visible") {
			if(BooIn==true) Pdata[i].style.cssText="cursor:text";
			getObject(itemName[i]).style.cursor="default";
			}
		}
	//
}