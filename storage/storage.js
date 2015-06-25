(function(){

	// var buttonsave = document.getElementById('save');
	var buttonclear = document.getElementById('clear');

	var nameInput = document.getElementById('name')
	var emailInput = document.getElementById('email')
	var messageTexarea = document.getElementById('message')

	// buttonsave.onclick = function(){
	// 	save('contact', getContact());
	// }

	nameInput.onchange = changeHandler;
	emailInput.onchange = changeHandler;
	messageTexarea.onchange = changeHandler;

	buttonclear.onclick = function(){
		clear();
	}

	function changeHandler(){
		save('contact', getContact());
	}

	function getContact(){
		return{
			name: nameInput.value,
			email: emailInput.value,
			message: messageTexarea.value
		};
	}

	function save(key, value){
		// localStorage.name = name.value;
		localStorage[key] = JSON.stringify(value);
	};

	function clear(){
		
		nameInput.value = '';
		emailInput.value = '';
		messageTexarea.value = '';

		localStorage.clear();
	};

	function populate(contact){
		nameInput.value = contact.name;
		emailInput.value = contact.email;
		messageTexarea.value = contact.message;
	}

	function checkLocalStorage(){
		if(localStorage.length){
			populate(JSON.parse(localStorage.contact));
		};
	}

	checkLocalStorage();

})();