const c = ["Chittoor","Jalgaon","Tirupur","Shimoga","Uttarakhand","Sangli","Nellore","Thrissur","Mangalore","Mandya","Hissar","Imphal","Manipal","Vijaywada","Gurgaon","Wayanad","Kurnool",
"Trivandrum","Durgapur","Nadiad","Belgaum","Goa","Miraj","Kanpur","Amravati","Rajkot","Bikaner","Faridabad","Mysore","Jamnagar","Udupi","SRINAGAR ","Erode ","Jamshedpur","Indore",
"Udaipur","Tiruvalla","Mumbai","Bhavnagar","Pondicherry","Mohali","Kakinada","Kannur","Midnapore","Berhampur","Alaphuzha","Thiruelveli","Trichy","Nagpur","Patiala","Patan","Shimla",
"Asansol","Nanded","Hubli","Shri Ganganagar","Vadodara","Agartala","Jodhpur","Salem","Meerut","Tanjur","Jaipur","Surat ","Kottayam","Dibrugarh","Silinguri","Dhanbad","Karimnagar",
"Warangal","Bokaro","Tuticorin ","Bhopal ","Delhi","Nagarcoil","Ludhiana","Gwalior ","Pathanamthitta","Jabalpur","Rohtak","Bhubaneshwar","Agra","Bareilly","Kolhapur","Haldwani","Palakkad",
"Cuttack","Ranchi","Ongole","Chennai","Varanasi","Nashik","Pune ","Bhatinda","Solapur","Kota","Anand","Banglore","Patna","Ramanathapuram","Bellary","Noida","Bhimavaram","Hyderabad",
"Malappuram","Jammu","Gulbarga","Akola","Aurangabad","Cuddapah","Amritsar","Panchkula","Kollam","Tirupati","Kozhikode","Guwahati","Guntur","Govindpur","Raipur","Lucknow",
"Rajahmundry","Ghaziabad","Kolkata","Cochin","Allahabad","Ahmedabad","Chandigarh","Coimbatore","Gorakhpur","Vishakapatnam","Davangere","Jalandhar","Phagwara","Madurai",]

export const S = (city) => {	 
	const regexp =  new RegExp(city,"g")

	let a = [];
	let s=""

	for(let i=0;i<c.length;i++){
		s = c[i].match(regexp)
		if( s != null){
			a.push(c[i])
		}
	}	
	
	return(a);
}
