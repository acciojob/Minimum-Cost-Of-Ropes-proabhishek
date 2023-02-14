function findMinCost(e) {
	//alert(e);
	e.preventDefault();
	const arr = document.querySelector('input').value.split(',');
	arr.sort(function(a,b) {return a-b});
	var cost = 0;
	//alert(cost);
	while(arr.length > 1) {
		var first = arr.shift();
		var second = arr.shift();
		var res = Number(first) + Number(second);
		arr.push(res);
		cost += res;
		arr.sort(function (a,b) { return a-b; });
	}
    //alert(cost);
	document.querySelector('#result').textContent = cost;
}

document.getELe