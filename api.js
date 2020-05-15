export const fetchDose = async(Email) => {
	try{
		const response = await fetch("https://vkidneym.herokuapp.com/hasDate",{
			method : 'POST',
			cache: 'no-cache',
			credentials:'include',
			headers : {'Content-Type': 'application/json'},
			body:JSON.stringify({Email:Email}),
		})
		const result = await response.json()
		return result
	}
	catch(e){alert(e)} 
}

export const addDose = async(Email,doseData) => {
	try{
		const response = await fetch("https:vkidneym.herokuapp.com/DoseInsert",{
					method : 'POST',
					cache: 'no-cache',
					credentials:'include',
					headers : {'Content-Type': 'application/json'},
					body:JSON.stringify({Email:Email,
					dose0:`${doseData[0]}`,
					dose1:`${doseData[1]}`,
					dose2:`${doseData[2]}`,
					dose3:`${doseData[3]}`,
					abtDate:`${doseData[4]}`,}),
				})
				const result = await response.text()
				if(res == "ok"){
					this.setState({buttonState:true})
					alert(`Your dose  details has been set for notification`)
				}else{
					alert("Some thing went wrong")
				}	
	}catch(e){alert(e)}
}
export const addDosevs = async(Email,doseData,type) => {
	try{
		const response = await fetch("https:vkidneym.herokuapp.com/Pcv",{
					method : 'POST',
					cache: 'no-cache',
					credentials:'include',
					headers : {'Content-Type': 'application/json'},
					body:JSON.stringify({Email:Email,
					dose0:`${doseData[0]}`,
					dose1:`${doseData[1]}`,
					type:type,}),
				})
				const result = await response.text()
				return result
	}catch(e){alert(e)}
}
export const getDosevs  =  async(Email,type) => {
	try{
		const response = await fetch("https://vkidneym.herokuapp.com/hasPvs",{
			method : 'POST',
			cache: 'no-cache',
			credentials:'include',
			headers : {'Content-Type': 'application/json'},
			body:JSON.stringify({Email:Email,type:type}),
		})
		const result = await response.json()
		return result
		
	}catch(e){alert(e)}
}