
export  const addMonth = (numberOfMonths,date) => {
	
	// here no need to add 1 because on new Date() it return date with index 1 but on getMonth its return index with 0.
	let  d = date[0]+date[1]
	let  m = parseInt(date[3]+date[4])-1
	let  y = date[6]+date[7]+date[8]+date[9]
	
	let myDate = new Date(y,m,d);
	myDate.setMonth(myDate.getMonth()+numberOfMonths)
	let nextDate = `${myDate.getDate()}/${parseInt(myDate.getMonth())+1}/${myDate.getFullYear()}`
	return nextDate
 }

