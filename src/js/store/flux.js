const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			URL:"https://playground.4geeks.com/apis/fake/contact/",
		},
		actions: {
			
				createContact: async (data) => {
					try {
						const URL = "https://playground.4geeks.com/apis/fake/contact/"
						const opt = {
							method: "POST",
							headers: {
								"Content-type": "Application/json"
							},
							body: JSON.stringify(
								data
							)
						}
						const response = await fetch(URL, opt)
						console.log( "esto es la respuesta", response)
						
						if (response.ok){
							alert("Contacto creado con exito")
						} else alert("Error al crear contacto")
					} catch (error){
						console.log("hay un error", error)
					}
				},
			
				getContact : async () => {
					const store = getStore()
					try{
						const url = "https://playground.4geeks.com/apis/fake/contact/agenda/Daniela_Agenda"
						const opt = {
							method : "GET",
							headers: {
								"Content-type": "Application/json"
							 },
						}
					
			
					const response = await fetch(url, opt)
					if (response.ok){
						const body = await response.json()
						setStore({ contacts : body})
						console.log("positivo")
					} else alert ("Error al traer los contactos");
				} catch (error) {
					console.log("Hay un error del GET", error);
				}
					

			}
		
		},
	};
};


export default getState;
