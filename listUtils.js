/**
 * formatList
 * @param listA
 * @param nextLine
 * @returns {String}
 */
function formatList(listA, nextLine) {
	var listAout = "";
	for ( var i = 0; i < listA.length; i++) {
		listAout = listAout + listA[i];
		if (i != listA.length - 1) {
			listAout = listAout + nextLine;
		}
	}
	return listAout;
}

/**
 * addPrefix
 * @param listA
 * @param prefix
 * @returns
 */
function addPrefix(listA, prefix) {

	for ( var i = 0; i < listA.length; i++) {
		listA[i] = prefix + listA[i];
	}
	return listA;
}

/**
 * addSuffix
 * @param listA
 * @param suffix
 * @returns
 */
function addSuffix(listA, suffix) {

	for ( var i = 0; i < listA.length; i++) {
		listA[i] = listA[i] + suffix;
	}
	return listA;
}

/**
 * addPrefixSuffix
 * @param listA
 * @param prefix
 * @param suffix
 * @returns
 */
function addPrefixSuffix(listA, prefix, suffix) {

	for ( var i = 0; i < listA.length; i++) {
		listA[i] = prefix + listA[i] + suffix;
	}
	return listA;
}

/**
 * listIntersect
 * @param listAs
 * @param listBs
 * @returns {String}
 */
function listIntersect(listA, listB) {

	var listAintersectB = "";

	// //////////////// A intersect B ////////////////////
	for ( var i = 0; i < listB.length; i++) {
		for ( var j = 0; j < listA.length; j++) {
			if (listB[i] == listA[j]) {
				listAintersectB = listAintersectB + listB[i] +'\n' ;
			}
		}// End for A
	}// End for B
	
	var listAintersectBarr = listAintersectB.split('\n');
	return listAintersectBarr;
}

// /////////////////////////////////////////////
function listUnion(listA, listB) {
var linesAunionB = "";

for(var i = 0;i < listA.length;i++){
	linesAunionB = linesAunionB + listA[i]+'\n';
}

var linesBminusA = listMinus(listB, listA);


for(var i = 0;i < linesBminusA.length;i++){
	linesAunionB = linesAunionB + linesBminusA[i]+'\n';
}

var listAunionBarr = linesAunionB.split('\n');
	return listAunionBarr;
}

// /////////////////////////////////////////////
function listMinus(listA, listB) {

var linesAminusB = "";
var linesAintersectBs = listIntersect(listA, listB);
var found = false;

for(var i = 0;i < listA.length;i++){
	for(var j = 0;j < linesAintersectBs.length;j++){
    		if (listA[i] == linesAintersectBs[j]){
		found = true;
		break;
		}
	}//End for A
	if (found == false){
		linesAminusB = linesAminusB + listA[i]+'\n';
	}else{
		found = false;
	}//End else
}//End for B

var listAminusBarr = linesAminusB.split('\n');
return listAminusBarr;

}
// /////////////////////////////////////////////
function listSort(listA){
	for (var i = 1; i < listA.length; i++) {
        var valueToSort = listA[i];
        var j = i;
        while (j > 0 && listA[j - 1] > valueToSort) {
        	listA[j] = listA[j - 1];
            j--;
        }
        listA[j] = valueToSort;
    }
	
	return listA;
}

///////////////////////////////////////////////
function listUnique(listA){
	var tempList = "";
	for (var i = 0; i < listA.length; i++) {
		var isUnique = false;
        for (var j =0; j < i ; j++){
        	if (listA[i] == listA[j]){
        		isUnique = true;
        		break;
        	}
        }
        if ( !isUnique ){
        	tempList = tempList+listA[i]+'\n';
        }
    }
	
	var listOut = tempList.split('\n');
	
	return listOut;
}

///////////////////////////////////////////////
function listReverse(listA){
	var len = listA.length;
	
	for (var i = 0; i < listA.length/2; i++) {
		var temp = listA[i];
		listA[i] = listA[len-i-1];
		listA[len-i-1] = temp;
    }
	
	return listA;
}

///////////////////////////////////////////////

function listToCols(listA,numCols){
	var temp = "";
	for (var i = 0; i < listA.length; i++) {		
		if (i%numCols == numCols-1){
			temp = temp+listA[i]+'\n';
		}else{
			temp = temp+listA[i]+',';
		}		
    }
	
	return temp;
}

///////////////////////////////////////////////

function listTranspose(listA){
	var temp = "";
	for (var i = 0; i < listA.length; i++) {				
			temp = temp+listA[i];	
			if (i != listA.length-1){
				temp = temp+',';
			}
    }
	
	return temp;
}

///////////////////////////////////////////////

function listRandomize(listA){
	var temp = "";
	for (var i = 0; i < listA.length; i++) {				
			temp = temp+listA[i];	
			if (i != listA.length-1){
				temp = temp+',';
			}
    }
	
	return temp;
}

///////////////////////////////////////////////

function listShuffle(listA){
	var temp = "";
	var len = listA.length;
	var a = Math.floor(Math.random()*len+1);
	a = a%len;
	for (var i = 0; i < listA.length; i++) {				
			temp = listA[a];	
			listA[a] = listA[i];
			listA[i] =  temp;
    }
	
	return listA;
}

///////////////////////////////////////////////

function listSum(listA){
	var sum = 0;	
	for (var i = 0; i < listA.length; i++) {				
			sum = sum + Number(listA[i]);			
    }	
	return sum;
}

///////////////////////////////////////////////

function listAverage(listA){
	var average = listSum(listA) / listA.length;
	return average;
}
