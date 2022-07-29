function Excuse() {
	
	var myDog = ['perro', 'alce', 'abuela'];
	var ate = ['comió', 'fumó', 'robó'];
	var myHomework = ['deberes', 'zapatos', 'altavoces'];
	
	var who = myDog[Math.round(Math.random()*(myDog.length-1))];
	var did = ate[Math.round(Math.random()*(ate.length-1))];
	var what = myHomework[Math.round(Math.random()*(myHomework.length-1))];
	
	document.getElementById('excuses').innerHTML = '<div>Mi ' + who + ' se ' + did + ' mis ' + what + '.</div>'
	
}