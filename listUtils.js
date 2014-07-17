///////////////////////////////////////////////
function formatList(listA, nextLine) {
var listAout = "";
for(var i = 0;i < listA.length;i++){
	listAout = listAout + listA[i];
	if ( i != listA.length-1) {
		listAout = listAout + nextLine;
	}
}
return listAout;
}



///////////////////////////////////////////////
function addPrefixL(listA, prefix) {

for(var i = 0; i < listA.length;i++){
	listA[i] = prefix + listA[i];
}
return listA;
}

///////////////////////////////////////////////
function addSuffixL(listA, suffix) {

for(var i = 0; i < listA.length;i++){
	listA[i] = listA[i] + suffix;
}
return listA;
}

///////////////////////////////////////////////
function addPrefixSuffixL(listA, prefix, suffix) {

for(var i = 0; i < listA.length;i++){
	listA[i] = prefix + listA[i] + suffix;
}
return listA;
}

///////////////////////////////////////////////
function listIntersect(listAs, listBs){

var linesA = listAs.split('\n');
var linesB = listBs.split('\n');
var linesAintersectB ="";

////////////////// A intersect B ////////////////////
for(var i = 0;i < linesB.length;i++){
for(var j = 0;j < linesA.length;j++){
    if (linesB[i] == linesA[j]){
		linesAintersectB = linesAintersectB + linesB[i]+'\n';
	}
}//End for A
}//End for B

return linesAintersectB;
}

///////////////////////////////////////////////
function listUnion(listA, listB){

}
///////////////////////////////////////////////
function listMinus(listA, listB){

}
///////////////////////////////////////////////

///////////////////////////////////////////////
