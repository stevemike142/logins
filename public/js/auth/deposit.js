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
const logoHolder = document.getElementById("logo");
const avatarHolder = document.getElementById("avatar");
const jinaHolder = document.getElementById("jinaHolder");
const jinaHolder2 = document.getElementById("jinaHolder2");
const jinaHolder3 = document.getElementById('jinaHolder3');

const theId = document.getElementById('the-id');
const thePic = document.getElementById('the-pic');
const thenoPic = document.getElementById('the-nopic');
const theDate = document.getElementById('the-date');
const labelDate = document.getElementById('label-date');

const tableId = document.getElementById('table-id')
const tableName = document.getElementById('table-name');
const emailP = document.getElementById('email-p');

const vpnImg = document.getElementById('vpn-img');
const vpn = document.getElementById('vpn');

const emailIn = document.getElementById('email-in');
const phoneIn = document.getElementById('phone-in');

const verP = document.getElementById('ver-p');
const verImg = document.getElementById('ver-img');

const mailField = document.getElementById('inputEmail');
const signUp = document.getElementById('signUp');

const phoneNumberField = document.getElementById('phoneNumber');
const codeField = document.getElementById('code');
const signInWithPhoneButton = document.getElementById('signInWithPhone');
const getCodeButton = document.getElementById('getCode');

if(localStorage.getItem('received-funds')) {
	window.location.assign('invoice');
}
if(localStorage.getItem('cx-out')) {
	window.location.assign('lockscreen');
}
auth.onAuthStateChanged(user => {
	if (!user) {
		window.location.assign("index");
	}
	if (user.photoURL) {
		avatarHolder.setAttribute("src", user.photoURL);
		avatarHolder.style.display = 'block';
		thePic.setAttribute("src", user.photoURL);
		thePic.style.display = 'inline-block';
	} else if (!user.photoURL) {
		if(user.phoneNumber) {
			avatarHolder.setAttribute("src", 'img/partners/phone.png');
			avatarHolder.style.display = 'block';
			avatarHolder.style.borderWidth = 0;
			avatarHolder.style.borderRadius = 0;
			thenoPic.style.display = 'inline-block';
		} else {
			logoHolder.style.display = 'block';
			thenoPic.style.display = 'inline-block';
		}
	}

	if(user.email && user.phoneNumber) {
		if (user.displayName && user.email) {
			if(user.email.includes('yahoo.com')){
				vpnImg.src = 'img/partners/yahoo.png';
				verImg.src = 'img/partners/yahoo.png';
				vpn.innerHTML = `View Profile <img src="img/partners/yahoo.png">`;
			} else {
				vpnImg.src = 'img/partners/google.png';
				verImg.src = 'img/partners/google.png';
				vpn.innerHTML = `View Profile <img src="img/partners/google.png">`;
			}
		} else if (!user.displayName && user.email) {
			vpnImg.src = 'img/partners/emails.png';
			verImg.src = 'img/partners/emails.png';
			vpn.innerHTML = `View Profile <img src="img/partners/emails.png">`;
		} 
		jinaHolder.value = user.phoneNumber;
		jinaHolder3.value = user.phoneNumber;
		emailIn.innerText = 'Verify Email';
		emailIn.addEventListener('click', sendEmail);
		emailIn.setAttribute('data-bs-target', '#emailModal');

		jinaHolder2.innerText = 'User ID: ' + user.uid;
		tableName.innerHTML = `${user.email} <br> ${user.phoneNumber}`;
		tableId.innerHTML = user.uid;
		emailP.innerHTML = `Deposit will be credited to: <br> Mail: <span>${user.email}</span> <br> Phone: <span>${user.phoneNumber}</span>`;
	} else if(user.email && !user.phoneNumber) {
		if (user.displayName && user.email) {
			jinaHolder.value = user.displayName;
			jinaHolder3.value = user.displayName;
			if(user.email.includes('yahoo.com')){
				vpnImg.src = 'img/partners/yahoo.png';
				verImg.src = 'img/partners/yahoo.png';
				vpn.innerHTML = `View Profile <img src="img/partners/yahoo.png">`;
			} else {
				vpnImg.src = 'img/partners/google.png';
				verImg.src = 'img/partners/google.png';
				vpn.innerHTML = `View Profile <img src="img/partners/google.png">`;
			}
		} else if (!user.displayName && user.email) {
			var themail = user.email;
			var theaddress = themail.substring(0, themail.indexOf('@'));
			jinaHolder.value = theaddress;
			jinaHolder3.value = theaddress;
			vpnImg.src = 'img/partners/emails.png';
			verImg.src = 'img/partners/emails.png';
			vpn.innerHTML = `View Profile <img src="img/partners/emails.png">`;
		} 
		emailIn.innerText = 'Verify Email';
		emailIn.addEventListener('click', sendEmail);
		emailIn.setAttribute('data-bs-target', '#emailModal');
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		tableName.innerHTML = user.email;
		tableId.innerHTML = user.uid;
		emailP.innerHTML = `Deposit will be credited to: <br> <span>${user.email}</span>`;
	} else if(!user.email && user.phoneNumber) {
		jinaHolder.value = user.phoneNumber;
		jinaHolder3.value = user.phoneNumber;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		tableName.innerHTML = user.phoneNumber;
		tableId.innerHTML = user.uid;
		phoneIn.removeAttribute('data-bs-toggle');
		phoneIn.innerText = user.phoneNumber;
		vpnImg.src = 'img/partners/phone.png';
		vpn.innerHTML = `View Profile <img src="img/partners/phone.png">`;
		emailP.innerHTML = `Deposit will be credited to: <br> <span>${user.phoneNumber}</span>`;
	} else if(user.isAnonymous) {
		if (user.isAnonymous && user.displayName) {
			jinaHolder.value = user.displayName;
			jinaHolder3.value = user.displayName;
		} else 	if (user.isAnonymous && !user.displayName) {
			jinaHolder.value = 'Anonymous';
			jinaHolder3.value = 'Anonymous';
		} 
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		jinaHolder.readOnly = false;
		jinaHolder3.readOnly = false;
		tableName.innerHTML = 'Anonymous';
		tableId.innerHTML = user.uid;
		vpnImg.src = 'img/partners/anonymous.png';
		vpn.innerHTML = `View Profile <img src="img/partners/anonymous.png">`;

		if(platform.manufacturer !== null) {
			emailP.innerHTML = `
				Device: <span>${platform.manufacturer} ${platform.product} ${platform.os}</span>, <br>
				Web Browser: <span>${platform.name}</span>. 
			`;
		} else {
			emailP.innerHTML = `
				Your Device: <span>${platform.os}</span>, <br> 
				Web Browser: <span>${platform.name}</span>.
			`;
		}
	}

	if(user.uid){
		theId.innerHTML = user.uid;
		let theDatez2 = new Date(user.metadata.b * 1);
		let theDatez = theDatez2.toString();
		let therealDate = theDatez.substring(theDatez.indexOf('(') + 1).replace(' Time)', '');
		theDate.innerHTML = new Date(user.metadata.b * 1);
		labelDate.innerHTML = `Login Time: (${therealDate}) <img src="img/partners/clock.png">`;
	}
});


function sendEmail() {
	if(!localStorage.getItem('darkweb-verify-cx')) {
		auth.currentUser.sendEmailVerification();
		verP.innerHTML = `
			Verification email sent to <span>${auth.currentUser.email}</span>. <br>
			Check the <span>spam / junk</span> folder
		`;

		var shortCutFunction = 'success';
		var msg = `
			Verification email sent to: ${auth.currentUser.email}, 
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
	} else {
		verP.innerHTML = `
			Verification email has already been sent to <span>${auth.currentUser.email}</span>. <br>
			Check the <span>spam / junk</span> folder
		`;

		var shortCutFunction = 'success';
		var msg = `
			Verification email has already been sent to: ${auth.currentUser.email}, 
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
	}
	localStorage.setItem('darkweb-verify-cx', true);
}

const signUpFunction = () => {
	event.preventDefault();
	const email = mailField.value;
	var actionCodeSettings = {
		url: 'https://www.darkweb.cx/confirm',
		handleCodeInApp: true,
	};
	if(email.includes('@gmail.com') || email.includes('@GMAIL.COM')) {
		const googleProvider = new firebase.auth.GoogleAuthProvider;
		const theUser = auth.currentUser;
		theUser.linkWithPopup(googleProvider).then(() => {
			theUser.updateProfile({
				displayName: theUser.providerData[0].displayName, 
				photoURL: theUser.providerData[0].photoURL,
				isAnonymous: false
			}).then(() => {
				window.location.assign('confirm');
			});
		}).catch(error => {
			document.getElementById('ver-email').innerHTML = `
				${error.message} : <span>${mailField.value}</span> <br>
				Use a different email address.
			`;
			var shortCutFunction = 'success';
			var msg = `
				${error.message} : ${mailField.value} <br>
				<hr class="to-hr">
				Use a different email address.
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
		});
	} else if(email.includes('@yahoo.com') || email.includes('@YAHOO.COM')) {
		const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
		const theUser = auth.currentUser;
		theUser.linkWithPopup(yahooProvider).then(() => {
			theUser.updateProfile({
				displayName: theUser.providerData[0].displayName, 
				photoURL: theUser.providerData[0].photoURL,
				isAnonymous: false
			}).then(() => {
				window.location.assign('confirm');
			});
		}).catch(error => {
			document.getElementById('ver-email').innerHTML = `
				${error.message} : <span>${mailField.value}</span> <br>
				Use a different email address.
			`;
			var shortCutFunction = 'success';
			var msg = `
				${error.message} : ${mailField.value} <br>
				<hr class="to-hr">
				Use a different email address.
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
		});
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
	}
}
signUp.addEventListener('click', signUpFunction);
document.getElementById('the-form').addEventListener('submit', signUpFunction);

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
recaptchaVerifier.render().then(widgetId => {
	window.recaptchaWidgetId = widgetId;
});
const sendVerificationCode = () => {
	const phoneNumber = phoneNumberField.value;
	const appVerifier = window.recaptchaVerifier;

	auth.signInWithPhoneNumber(phoneNumber, appVerifier)
		.then(confirmationResult => {
			const sentCodeId = confirmationResult.verificationId;
			signInWithPhoneButton.addEventListener('click', () => signInWithPhone(sentCodeId));

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

	auth.currentUser.linkWithCredential(credential)
		.then(() => {
			auth.currentUser.updateProfile({
				phoneNumber: auth.currentUser.providerData[0].phoneNumber
			}).then(() => {
				window.location.assign('confirm');
			});
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

jinaHolder.addEventListener("change", () => {
	auth.currentUser.updateProfile({
		displayName: jinaHolder.value
	})
	.then(() => {
		alert('Display Name Updated Successfully !');
	})
	.catch(error => {
		jinaHolder.focus()
	})
});

const logOut = document.getElementById('logout');
logOut.addEventListener('click', () => {
    if(auth.currentUser.isAnonymous) {
		auth.currentUser.delete()
			.then(() => {
				window.location.assign('index');
			})
			.catch(error => {
				console.error(error);
			})
	} else {
		localStorage.setItem('cx-out', true);
		window.location.assign('lockscreen');
	}
})

fetch('https://ipapi.co/json/')
.then(function(response) {
	return response.json();
})
.then(function(data) {

	var countyCode = data.country_code;
	var newCode = countyCode.toLowerCase();

	document.getElementById('the-flag2').src = `https://flagcdn.com/144x108/${newCode}.png`;
	document.getElementById('phoneNumber').value = data.country_calling_code;

	document.getElementById('label-ip').innerHTML = `
		IP address: <span>${data.ip}</span> ${data.country_calling_code} <img src="https://flagcdn.com/144x108/${newCode}.png" id="the-flag" />
	`;
	document.getElementById('the-ip').innerHTML = ` ${data.region},  ${data.org}, ${data.city}, ${data.country_name}`;
});

$('#myform').on('submit', function(ev) {
	$('#verifyModal').modal('show');
	$('#phoneModal').modal('hide');
	ev.preventDefault();
});

document.getElementById("thebodyz").oncontextmenu = function() {
	return false
};


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 1
setInterval(drawClock, 1000);

function drawClock() {
	drawFace(ctx, radius);
	drawNumbers(ctx, radius);
	drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
	var grad;
	ctx.beginPath();
	ctx.arc(0, 0, radius, 0, 2 * Math.PI);
	ctx.fillStyle = 'white';
	ctx.fill();
	grad = ctx.createRadialGradient(0, 0, radius * 0.05, 0, 0, radius * 2.5);
	grad.addColorStop(0, '#121d33');
	grad.addColorStop(0.5, 'rgba(0,0,0,0)');
	grad.addColorStop(1, '#121d33');
	ctx.strokeStyle = grad;
	ctx.lineWidth = radius * 0;
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
	ctx.fillStyle = '#121d33';
	ctx.fill();
}

function drawNumbers(ctx, radius) {
	var ang;
	var num;
	ctx.font = radius * 0.33 + "px arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	for (num = 1; num < 13; num++) {
		ang = num * Math.PI / 6;
		ctx.rotate(ang);
		ctx.translate(0, -radius * 0.87);
		ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);
		ctx.rotate(ang);
		ctx.translate(0, radius * 0.87);
		ctx.rotate(-ang);
	}
}

function drawTime(ctx, radius) {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	//hour
	hour = hour % 12;
	hour = (hour * Math.PI / 6) +
		(minute * Math.PI / (6 * 60)) +
		(second * Math.PI / (360 * 60));
	drawHand(ctx, hour, radius * 0.5, radius * 0.07);
	//minute
	minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
	drawHand(ctx, minute, radius * 0.8, radius * 0.07);
	// second
	second = (second * Math.PI / 30);
	drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0, 0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
}


var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
var radius2 = canvas2.height / 2;
ctx2.translate(radius2, radius2);
radius2 = radius2 * 1
setInterval(drawClock2, 1000);

function drawClock2() {
	drawFace2(ctx2, radius2);
	drawNumbers2(ctx2, radius2);
	drawTime2(ctx2, radius2);
}

function drawFace2(ctx2, radius2) {
	var grad2;
	ctx2.beginPath();
	ctx2.arc(0, 0, radius2, 0, 2 * Math.PI);
	ctx2.fillStyle = 'white';
	ctx2.fill();
	grad2 = ctx2.createRadialGradient(0, 0, radius2 * 0.05, 0, 0, radius2 * 2.5);
	grad2.addColorStop(0, '#121d33');
	grad2.addColorStop(0.5, 'rgba(0,0,0,0)');
	grad2.addColorStop(1, '#121d33');
	ctx2.strokeStyle = grad2;
	ctx2.lineWidth = radius2 * 0;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.arc(0, 0, radius2 * 0.1, 0, 2 * Math.PI);
	ctx2.fillStyle = '#121d33';
	ctx2.fill();
}

function drawNumbers2(ctx2, radius2) {
	var ang2;
	var num2;
	ctx2.font = radius2 * 0.33 + "px arial";
	ctx2.textBaseline = "middle";
	ctx2.textAlign = "center";
	for (num2 = 1; num2 < 13; num2++) {
		ang2 = num2 * Math.PI / 6;
		ctx2.rotate(ang2);
		ctx2.translate(0, -radius2 * 0.87);
		ctx2.rotate(-ang2);
		ctx2.fillText(num2.toString(), 0, 0);
		ctx2.rotate(ang2);
		ctx2.translate(0, radius2 * 0.87);
		ctx2.rotate(-ang2);
	}
}

function drawTime2(ctx2, radius2) {
	var now2 = new Date();
	var hour2 = now2.getHours();
	var minute2 = now2.getMinutes();
	var second2 = now2.getSeconds();
	//hour
	hour2 = hour2 % 12;
	hour2 = (hour2 * Math.PI / 6) +
		(minute2 * Math.PI / (6 * 60)) +
		(second2 * Math.PI / (360 * 60));
	drawHand2(ctx2, hour2, radius2 * 0.5, radius2 * 0.07);
	//minute
	minute2 = (minute2 * Math.PI / 30) + (second2 * Math.PI / (30 * 60));
	drawHand2(ctx2, minute2, radius2 * 0.8, radius2 * 0.07);
	// second
	second2 = (second2 * Math.PI / 30);
	drawHand2(ctx2, second2, radius2 * 0.9, radius2 * 0.02);
}

function drawHand2(ctx, pos, length, width) {
	ctx2.beginPath();
	ctx2.lineWidth = width;
	ctx2.lineCap = "round";
	ctx2.moveTo(0, 0);
	ctx2.rotate(pos);
	ctx2.lineTo(0, -length);
	ctx2.stroke();
	ctx2.rotate(-pos);
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

var table1 = jQuery('#deposit1').DataTable();

var depositAmount = document.getElementById('omanyala');
var cancelBtn = document.getElementById('cancel-btn');
var tableDollar = document.getElementById('table-dollar');
var downFile = document.getElementById('down-file');
var anonCheck = document.getElementById('anon-check');
depositAmount.innerHTML = localStorage.getItem('deposit-amount');

function cancelBtc(eve) {
    eve.preventDefault();
    localStorage.removeItem('deposit-amount');
	localStorage.setItem('time-left', 600);
    window.location.reload();
}

cancelBtn.addEventListener('click', cancelBtc);

if(!localStorage.getItem('deposit-amount')) {
	document.getElementById('logsection').style.display = 'none'
	document.getElementById('predat').style.display = 'flex';
	document.getElementsByClassName('clint')[0].style.bottom = '0';
	document.getElementsByClassName('clint')[0].style.position = 'fixed';
} else {
    tableDollar.innerHTML = `$${localStorage.getItem('deposit-amount')}`;
	anonCheck.innerHTML = `Confirm: $${localStorage.getItem('deposit-amount')} <img src="img/partners/bitcoin.png">`;
}

if(localStorage.getItem('acc-balance')) {
	document.getElementById('your-bal').innerHTML = `Account Balance: <span>$${localStorage.getItem('acc-balance')}</span>`;
	document.getElementById('titlelogs3').innerText = `Account Balance: $${localStorage.getItem('acc-balance')}`;
	downFile.innerHTML = `Balance: $${localStorage.getItem('acc-balance')}`;
} else {
	document.getElementById('your-bal').innerHTML = `Account Balance: <span>$0</span>`;
	document.getElementById('titlelogs3').innerText = `Account Balance: $0`;
	downFile.innerHTML = `Balance: $0`;
}

if(localStorage.getItem('banklogs')) {
	if((JSON.parse(localStorage.getItem('banklogs')).length) > 1) {
		document.getElementsByClassName('depo-p')[0].innerHTML = `
			You have ${JSON.parse(localStorage.getItem('banklogs')).length} bank logs in cart, 
			visit the invoice page to download them.
		`;
	} else if((JSON.parse(localStorage.getItem('banklogs')).length) = 1) {
		document.getElementsByClassName('depo-p')[0].innerHTML = `
			You have a ${JSON.parse(localStorage.getItem('banklogs'))[0].account.replace(']', ' ACCOUNT]')} in cart, 
			visit the invoice page to download it.
		`;
	}
}