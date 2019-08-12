
function totalNumberSold(applesSoldList) {
	var total = 0;

	for (var i=0; i < applesSoldList.length; i++)
		{
			
			total += applesSoldList[i].qty;
		
		}
		return total;
	}


function totalIncome(applesSoldList) {

	var total = 0;

	for (var i=0; i < applesSoldList.length; i++)
		{
		
			total += applesSoldList[i]. price;
			
		 
		}
		
		
		return total;
	}


	
	


function totalIncomeGreenApples(applesSoldList){
var greenApple = 0;
for (var i = 0; i < applesSoldList.length; i++){
    if (applesSoldList[i].color === 'green'){
      let tempApple = applesSoldList[i].price;
      greenApple += (tempApple + 2.45);
	}
	
  }
 var green = (greenApple * 2.45)
 	return green.toFixed(2);
}


function totalProfit(applesSoldList, applePriceMap){
	return 0;
}

// -- extra functions...

function totalPerColorSold(apples, color) {
	return 0;
}

function totalIncomePerColor(apples, color) {
	return 0;
}

function totalProfitPerColor(apples, color, costMap) {
	return 0;
}

function mostProfitableColor(apples, color, costMap) {
	return 0;
}