var j = true;

var coastNo = localStorage.getItem('banktotal');
var coastDis = localStorage.getItem('divtotal');

var coastBal = localStorage.getItem('acc-balance');

var invoiceCol = document.getElementById('invoice-col');
var invoiceColTable = document.getElementById('invoice-col-table');

if(parseInt(coastBal) > parseInt(coastNo)) {
    invoiceCol.style.display = 'none';
    invoiceColTable.setAttribute('class', 'col-12');
}

auth.onAuthStateChanged(user => {
        
    if(localStorage.getItem('banklogs') && !localStorage.getItem('deposit-amount') && !localStorage.getItem('received-funds')) {
        if((JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
            var elemj = document.getElementById('pablos');        
            var width = localStorage.getItem('time-left');
            var id = setInterval(frame, 1000);
            function frame(){
                if(width <= 0){
                    clearInterval(id);
                    i = false;
                    localStorage.setItem('vx-time', true);
                    localStorage.setItem('time-left',null);
                    localStorage.setItem('banklogs',[]);
                    document.getElementById('predat').style.display = 'flex';
                    document.getElementById('logsection').style.display = 'none';
                    document.getElementById('logsection2').style.display = 'none';
                    document.getElementsByClassName('clint')[0].style.bottom = '0';
                    document.getElementsByClassName('clint')[0].style.position = 'fixed';
                    document.getElementById('cartlength').style.display = 'none';
                } 
                else if( width <= 14) {
                    elemj.classList.add("bg-danger");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 15) {
                    elemj.classList.add("bg-danger");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `15 Seconds Left! ${user.email}, <hr class="to-hr"> Let the timer run out, and then choose another banklog and pay for it on time `;
                        } else {
                            var msg = `15 Seconds Left! ${user.email}, <hr class="to-hr"> Let the timer run out, and then choose another banklog and pay for it on time `;
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `15 Seconds Left! ${user.phoneNumber}, <hr class="to-hr"> Let the timer run out, and then choose another banklog and pay for it on time `; 
                        } else {
                            var msg = `15 Seconds Left! ${user.phoneNumber}, <hr class="to-hr"> Let the timer run out, and then choose another banklog and pay for it on time `;
                        }
                    } else if(user.isAnonymous) {
                        var msg = `15 Seconds Left! Anonymous User, <hr> Let the timer run out. <hr class="to-hr"> You'll be required to get an email / phone invoice next time`;
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 

                else if( width <= 59) {
                    elemj.classList.add("bg-danger");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 60) {
                    elemj.classList.add("bg-danger");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `1 Minute Left! ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `1 Minute Left! ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `1 Minute Left! ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `1 Minute Left! ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `1 Minute Left! Anonymous User, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        } else {
                            var msg = `1 Minute Left! Anonymous User, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 


                else if( width <= 119) {
                    elemj.classList.add("bg-danger");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 120) {
                    elemj.classList.add("bg-danger");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `2 Minutes Left! ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `2 Minutes Left! ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `2 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `2 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `2 Minutes Left! Anonymous User, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        } else {
                            var msg = `2 Minutes Left! Anonymous User, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 

                else if( width <= 179) {
                    elemj.classList.add("bg-danger");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 180) {
                    elemj.classList.add("bg-danger");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `3 Minutes Left! ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `3 Minutes Left! ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `3 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `3 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `3 Minutes Left! Anonymous User, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        } else {
                            var msg = `3 Minutes Left! Anonymous User, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 

                else if( width <= 200) {
                    elemj.classList.add("bg-danger");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                
                
                else if( width <= 239) {
                    elemj.classList.add("bg-warning");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 240) {
                    elemj.classList.add("bg-warning");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `4 Minutes Left! ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `4 Minutes Left! ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `4 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `4 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `4 Minutes Left! Anonymous User, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        } else {
                            var msg = `4 Minutes Left! Anonymous User, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 


                else if( width <= 299) {
                    elemj.classList.add("bg-warning");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 300) {
                    elemj.classList.add("bg-warning");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `5 Minutes Left! ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `5 Minutes Left! ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `5 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `5 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `5 Minutes Left! Anonymous User, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        } else {
                            var msg = `5 Minutes Left! Anonymous User, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 


                else if( width <= 359) {
                    elemj.classList.add("bg-warning");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 360) {
                    elemj.classList.add("bg-warning");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `6 Minutes Left! ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `6 Minutes Left! ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `6 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `6 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `6 Minutes Left! Anonymous User, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        } else {
                            var msg = `6 Minutes Left! Anonymous User, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 

                else if( width <= 400) {
                    elemj.classList.add("bg-warning");
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 

                else if( width <= 419) {
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 420) {
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `7 Minutes Left! ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `7 Minutes Left! ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `7 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `7 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `7 Minutes Left! Anonymous User, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        } else {
                            var msg = `7 Minutes Left! Anonymous User, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 


                else if( width <= 479) {
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 480) {
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `8 Minutes Left! ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `8 Minutes Left! ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `8 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `8 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `8 Minutes Left! Anonymous User, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        } else {
                            var msg = `8 Minutes Left! Anonymous User, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 


                else if( width <= 539) {
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 540) {
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `9 Minutes Left! ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `9 Minutes Left! ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `9 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `9 Minutes Left! ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `9 Minutes Left! Anonymous User, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        } else {
                            var msg = `9 Minutes Left! Anonymous User, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. <hr class="to-hr"> Email invoice is a better option <hr>`; 
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 


                else {
                    localStorage.setItem('time-left',width--);
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                }
            }

        } else {
            console.log('No items are in cart');
        }
    } else {
        console.log('No bank logs selected')
    }     
});  

if(localStorage.getItem('received-funds')) {
    document.getElementById('bipart').style.display = 'flex';
    document.getElementById('logsection').style.display = 'none';
    document.getElementById('logsection2').style.display = 'none';
    document.getElementById('bit-bal').innerHTML = `You Have Paid: <span>$${(parseInt(localStorage.getItem('received-funds')).toLocaleString())}</span>`;
    document.getElementsByClassName('clint')[0].style.bottom = '0';
    document.getElementsByClassName('clint')[0].style.position = 'fixed';

    document.getElementsByClassName('bit-p')[0].innerHTML = `
        A bitcoin payment has been detected, 
        Visit the download page and complete the progress.
    `;
} else if(localStorage.getItem('deposit-amount')) {
    document.getElementById('depart').style.display = 'flex';
    document.getElementById('logsection').style.display = 'none';
    document.getElementById('logsection2').style.display = 'none';
    document.getElementById('your-bal').innerHTML = `Pending Deposit: <span>$${localStorage.getItem('deposit-amount')}</span>`;
    document.getElementsByClassName('depo-p')[0].innerHTML = `
        There's a deposit amount of 
        <span>$${localStorage.getItem('deposit-amount')}</span>
        that is pending. 
        Visit the deposit page and complete the progress.
    `;

    document.getElementsByClassName('clint')[0].style.bottom = '0';
    document.getElementsByClassName('clint')[0].style.position = 'fixed';
} else if(!localStorage.getItem('banklogs') || ((JSON.parse(localStorage.getItem('banklogs')).length) < 1)) {
    document.getElementById('predat').style.display = 'flex';
    document.getElementsByClassName('clint')[0].style.bottom = '0';
    document.getElementsByClassName('clint')[0].style.position = 'fixed';
}