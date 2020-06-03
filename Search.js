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

export const gfr = (age,sc,gender,raceAF) => {
		
		let leadNum,power,bottom;
		
		if(raceAF == "Yes"){
			if(gender == "Female"){
				leadNum = 166;
				bottom = .7;
				if(sc <= .7){
					power = -.329;
				}
				else{
					power = -1.209;
				}
			}
			else{
				leadNum = 163;
				bottom = .9;
				if(sc <= .9){
					power = -.411;
				}
				else{
					power = -1.209;
				}
			}
		}
		else{
			if(gender == "Female"){
				leadNum = 144;
				bottom = .7;
				if(sc <= .7){
					power = -.329;
				}
				else{
					power = -1.209;
				}
			}
			else{
				leadNum = 141;
				bottom = .9;
				if(sc <= .9){
					power = -.411;
				}
				else{
					power = -1.209;
				}
			}	
		}
		
		
		let GFRValue = Math.round(leadNum * Math.pow((sc/bottom),power) * Math.pow(.993,age));
		
		let stage;
		if(GFRValue >= 90){
			stage = "1";
		}
		else if(GFRValue >= 60 && GFRValue <= 89){
			stage = "2";
		}
		else if(GFRValue >= 45 && GFRValue <= 59){
			stage = "3A";
		}
		else if(GFRValue >= 30 && GFRValue <= 44){
			stage = "3B";
		}
		else if(GFRValue >= 15 && GFRValue <= 29){
			stage = "4";
		}
		else if(GFRValue >= 0 && GFRValue <= 14){
			stage = "5";
		}
		const result=[GFRValue + " mL/min/1.73 m^2","Stage " + stage + " Chronic Kidney Disease"]
		
		return(result)
		
}