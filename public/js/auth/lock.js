var firebaseConfig = {
	apiKey: "AIzaSyCu_nRoURohiSg1EiPq0-j688c7h8huVb0",
	authDomain: "darkweb-cx.firebaseapp.com",
	projectId: "darkweb-cx",
	storageBucket: "darkweb-cx.appspot.com",
	messagingSenderId: "1055160986860",
	appId: "1:1055160986860:web:c6111daab14ed88c6449c9",
	measurementId: "G-RHT9YVDQEG"
};
firebase.initializeApp(firebaseConfig);

const jinaHolder = document.getElementById('is-there');

const auth = firebase.auth();

if(localStorage.getItem('received-funds')) {
	window.location.assign('invoice');
}
auth.onAuthStateChanged(user => {
	if (!user) {
		window.location.assign('index');
	}
    if(!localStorage.getItem('cx-out')) {
        window.history.back();
    }
    var cxOut = document.getElementById('cx-out');
    cxOut.addEventListener('click', removeIt);
    function removeIt() {
        localStorage.removeItem('cx-out');
        window.history.back();
    }

	if(user.email) {
		var themail = user.email;
		var theaddress = themail.substring(0, themail.indexOf('@'));
		
		if (user.displayName && user.email) {
			jinaHolder.innerText = user.displayName;
		} else if (!user.displayName && user.email) {
			jinaHolder.innerHTML = theaddress;
		} 
	} else if(user.phoneNumber) {
		jinaHolder.innerHTML = user.phoneNumber;
	} else if(user.isAnonymous) {
		window.location.assign('home')
	} 
});



document.getElementById("thebodyz").oncontextmenu = function() {
	return false
};
if(!window.location.href.includes('5502')) {
	document.addEventListener("keydown", function (event) {
		if (event.ctrlKey) {
			event.preventDefault();
		}   
	});
}

