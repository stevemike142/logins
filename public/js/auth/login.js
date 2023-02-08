const mailField = document.getElementById('inputEmail');
const signUp = document.getElementById('signUp');

const signGoogle = document.getElementById("signGoogle");
const signYahoo = document.getElementById('signYahoo');
const signAnony = document.getElementById('signAnony');

const phoneNumberField = document.getElementById('phoneNumber');
const codeField = document.getElementById('code');
const signInWithPhoneButton = document.getElementById('signInWithPhone');
const getCodeButton = document.getElementById('getCode');

if(localStorage.getItem('darkweb-verify-cx')) {
	localStorage.removeItem('darkweb-verify-cx')
}
if(localStorage.getItem('deposit-amount')) {
	localStorage.removeItem('deposit-amount');
}
if(localStorage.getItem('cx-out')) {
	localStorage.removeItem('cx-out');
}


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

const auth = firebase.auth();

const signUpFunction = () => {
	event.preventDefault();
	const email = mailField.value;
	var actionCodeSettings = {
		url: 'https://www.darkweb.cx',
		handleCodeInApp: true,
	};

	if(email.includes('@gmail.com') || email.includes('@GMAIL.COM')) {
		const googleProvider = new firebase.auth.GoogleAuthProvider;
		auth.signInWithPopup(googleProvider).then(() => {
			auth.currentUser.sendEmailVerification()
			window.location.assign('home');
			}).catch(error => {
				var shortCutFunction = 'success';
				var msg = `${error.message}`;
				toastr.options = {
					closeButton: true,
					debug: false,
					newestOnTop: true,
					progressBar: true,
					positionClass: 'toast-top-full-width',
					preventDuplicates: true,
					onclick: null
				};
				var $toast = toastr[shortCutFunction](msg);
				$toastlast = $toast;
			});
	} else if(email.includes('@yahoo.com') || email.includes('@YAHOO.COM')) {
		const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
		auth.signInWithPopup(yahooProvider).then(() => {
			auth.currentUser.sendEmailVerification();
			window.location.assign('home');
		}).catch(error => {
			var shortCutFunction = 'success';
			var msg = `${error.message}`;
			toastr.options = {
				closeButton: true,
				debug: false,
				newestOnTop: true,
				progressBar: true,
				positionClass: 'toast-top-full-width',
				preventDuplicates: true,
				onclick: null
			};
			var $toast = toastr[shortCutFunction](msg);
			$toastlast = $toast;
		})
	} else {
		auth.sendSignInLinkToEmail(email, actionCodeSettings)
		.then(() => {
			document.getElementById('ver-email').innerHTML = `
				Verification link sent to your email <span>${email}</span>.
				<br> 
				Check the <span>spam / junk </span> folder.
			`;

			var shortCutFunction = 'success';
			var msg = `
				Verification link sent to your email: ${email}.
				<hr class="to-hr">
				Check the spam / junk folder.
			`;
			toastr.options = {
				closeButton: true,
				debug: false,
				newestOnTop: true,
				progressBar: true,
				positionClass: 'toast-top-full-width',
				preventDuplicates: true,
				onclick: null
			};
			var $toast = toastr[shortCutFunction](msg);
			$toastlast = $toast;

			window.localStorage.setItem('emailForSignIn', email);
		})
		.catch(error => {
			var shortCutFunction = 'success';
			var msg = `${error.message}`;
			toastr.options = {
				closeButton: true,
				debug: false,
				newestOnTop: true,
				progressBar: true,
				positionClass: 'toast-top-full-width',
				preventDuplicates: true,
				onclick: null
			};
			var $toast = toastr[shortCutFunction](msg);
			$toastlast = $toast;
		});
	}
}
signUp.addEventListener('click', signUpFunction);
document.getElementById('the-form').addEventListener('submit', signUpFunction);


if (auth.isSignInWithEmailLink(window.location.href)) {
	var email = window.localStorage.getItem('emailForSignIn');
	if (!email) {
		localStorage.setItem('the-email', true)
		email = window.prompt('Enter your email for confirmation');
	}
	auth.signInWithEmailLink(email, window.location.href)
		.then((result) => {
				auth.currentUser.sendEmailVerification();
				window.location.assign('home');
		})
		.catch((error) => {
			var shortCutFunction = 'success';
			var msg = `${error.message}`;
			toastr.options = {
				closeButton: true,
				debug: false,
				newestOnTop: true,
				progressBar: true,
				positionClass: 'toast-top-full-width',
				preventDuplicates: true,
				onclick: null
			};
			var $toast = toastr[shortCutFunction](msg);
			$toastlast = $toast;
		});
}

const signInWithGoogle = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider;
	auth.signInWithPopup(googleProvider).then(() => {
		auth.currentUser.sendEmailVerification();
		window.location.assign('home');
	}).catch(error => {
		var shortCutFunction = 'success';
		var msg = `${error.message}`;
		toastr.options = {
			closeButton: true,
			debug: false,
			newestOnTop: true,
			progressBar: true,
			positionClass: 'toast-top-full-width',
			preventDuplicates: true,
			onclick: null
		};
		var $toast = toastr[shortCutFunction](msg);
		$toastlast = $toast;
	});
};
signGoogle.addEventListener("click", signInWithGoogle);

const signInWithYahoo = () => {
	const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
	auth.signInWithPopup(yahooProvider).then(() => {
		auth.currentUser.sendEmailVerification();
		window.location.assign('home');
	}).catch(error => {
		var shortCutFunction = 'success';
		var msg = `${error.message}`;
		toastr.options = {
			closeButton: true,
			debug: false,
			newestOnTop: true,
			progressBar: true,
			positionClass: 'toast-top-full-width',
			preventDuplicates: true,
			onclick: null
		};
		var $toast = toastr[shortCutFunction](msg);
		$toastlast = $toast;
	});
};
signYahoo.addEventListener("click", signInWithYahoo);


const signInAnony = () => {
	auth.signInAnonymously().then(() => {
		window.location.assign('home');
	}).catch(error => {
		var shortCutFunction = 'success';
		var msg = `${error.message}`;
		toastr.options = {
			closeButton: true,
			debug: false,
			newestOnTop: true,
			progressBar: true,
			positionClass: 'toast-top-full-width',
			preventDuplicates: true,
			onclick: null
		};
		var $toast = toastr[shortCutFunction](msg);
		$toastlast = $toast;
	});
};
signAnony.addEventListener("click", signInAnony);


window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible'
});
const sendVerificationCode = () => {
	const phoneNumber = phoneNumberField.value;
	const appVerifier = window.recaptchaVerifier;

	var shortCutFunction = 'success';
	var msg = `
		Verification code sent to your phone: ${phoneNumber}.
		<hr class="to-hr">
		Check your messages inbox.
	`;
	toastr.options = {
		closeButton: true,
		debug: false,
		newestOnTop: true,
		progressBar: true,
		positionClass: 'toast-top-full-width',
		preventDuplicates: true,
		onclick: null
	};
	var $toast = toastr[shortCutFunction](msg);
	$toastlast = $toast;

	auth.signInWithPhoneNumber(phoneNumber, appVerifier)
		.then(confirmationResult => {
			const sentCodeId = confirmationResult.verificationId;
			signInWithPhoneButton.addEventListener('click', () => signInWithPhone(sentCodeId));
		})
		.catch(error => {
			var shortCutFunction = 'success';
			var msg = `${error.message}`;
			toastr.options = {
				closeButton: true,
				debug: false,
				newestOnTop: true,
				progressBar: true,
				positionClass: 'toast-top-full-width',
				preventDuplicates: true,
				onclick: null
			};
			var $toast = toastr[shortCutFunction](msg);
			$toastlast = $toast;
		})
}
const signInWithPhone = sentCodeId => {
	const code = codeField.value;
	const credential = firebase.auth.PhoneAuthProvider.credential(sentCodeId, code);
	auth.signInWithCredential(credential)
		.then(() => {
			window.location.assign('home');
		})
		.catch(error => {
			var shortCutFunction = 'success';
			var msg = `${error.message}`;
			toastr.options = {
				closeButton: true,
				debug: false,
				newestOnTop: true,
				progressBar: true,
				positionClass: 'toast-top-full-width',
				preventDuplicates: true,
				onclick: null
			};
			var $toast = toastr[shortCutFunction](msg);
			$toastlast = $toast;
		})
}
getCodeButton.addEventListener('click', sendVerificationCode);

auth.onAuthStateChanged(user => {
	if (user) {
		window.location.assign('home');
	}
});

fetch('https://ipapi.co/json/')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		var countyCode = data.country_code;
		var newCode = countyCode.toLowerCase();

		document.getElementById('the-flag').src = `https://flagcdn.com/144x108/${newCode}.png`;

		
		document.getElementById('phoneNumber').value = data.country_calling_code;
	});

$('#myform').on('submit', function(ev) {
	$('#verifyModal').modal('show');
	$('#phoneModal').modal('hide');
	ev.preventDefault();
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

function changeImage() {
    var image = document.getElementById('theIcon');
    if(image.classList.contains('fa-toggle-on')){
        image.classList.remove('fa-toggle-on')
        image.classList.add('fa-toggle-off');
    } else if(image.classList.contains('fa-toggle-off')){
        image.classList.remove('fa-toggle-off')
        image.classList.add('fa-toggle-on');
    }
}


if(!window.location.href.includes('5502')) {
	function disableCtrlKeyCombination(e){
		var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'i', 'v', 'j' , 'w', 'i');
		var key;
		var isCtrl;
		if(window.event){
			key = window.event.keyCode;
			if(window.event.ctrlKey) {
				isCtrl = true;
			} else {
				isCtrl = false;
			}
		} else {
			key = e.which; 
			if(e.ctrlKey) {
				isCtrl = true;
			}
			else {
				isCtrl = false;
			}
		}
		//if ctrl is pressed check if other key is in forbidenKeys array
		if(isCtrl) {
			for(i=0; i<forbiddenKeys.length; i++) {
				if(forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
					alert('Key combination CTRL + '+String.fromCharCode(key) +' has been disabled.');
					return false;
				}
			}
		}
		return true;
	}
}