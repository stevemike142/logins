var j = true;


auth.onAuthStateChanged(user => {
    if(localStorage.getItem('deposit-amount')) {
        var elemj = document.getElementById('pablos');        
        var width = localStorage.getItem('depo-left');
        var depoAm = localStorage.getItem('deposit-amount');
        var id = setInterval(frame, 1000);
        function frame(){
            if(width <= 0){
                clearInterval(id);
                i = false;
                localStorage.setItem('cx-time', true);
                localStorage.setItem('time-left', 600);
                localStorage.removeItem('deposit-amount');
                document.getElementById('logsection').style.display = 'none'
                document.getElementById('predat').style.display = 'flex';
                document.getElementsByClassName('clint')[0].style.bottom = '0';
                document.getElementsByClassName('clint')[0].style.position = 'fixed';
            } 

            else if( width <= 14) {
                elemj.classList.add("bg-danger");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else if( width == 15) {
                elemj.classList.add("bg-danger");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                var shortCutFunction = 'success';
                if(user.email) { 
                    var msg = `15 Seconds Left! ${user.email}, <hr class="to-hr"> Let the timer run out then choose another deposit amount, and pay for it on time`; 
                } else if(user.phoneNumber) { 
                    var msg = `15 Seconds Left! ${user.phoneNumber}, <hr class="to-hr"> Let the timer run out then choose another deposit amount, and pay for it on time`; 
                } else if(user.isAnonymous) {
                    var msg = `15 Seconds Left! Anonymous User, <hr> Let the timer run out. <hr class="to-hr"> You'll be required to get an email / phone invoice next time `;
                }
                toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                var $toast = toastr[shortCutFunction](msg);
                $toastlast = $toast;
            } 


            else if( width <= 60) {
                elemj.classList.add("bg-danger");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else if( width == 60) {
                elemj.classList.add("bg-danger");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                var shortCutFunction = 'success';
                if(user.email) { 
                    var msg = `1 Minute Left! ${user.email}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.phoneNumber) { 
                    var msg = `1 Minute Left! ${user.phoneNumber}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.isAnonymous) {
                    var msg = `1 Minute Left! Anonymous User, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                }
                toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                var $toast = toastr[shortCutFunction](msg);
                $toastlast = $toast;
            } 



            else if( width <= 120) {
                elemj.classList.add("bg-danger");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else if( width == 120) {
                elemj.classList.add("bg-danger");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                var shortCutFunction = 'success';
                if(user.email) { 
                    var msg = `2 Minutes Left! ${user.email}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.phoneNumber) { 
                    var msg = `2 Minutes Left! ${user.phoneNumber}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.isAnonymous) {
                    var msg = `2 Minutes Left! Anonymous User, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                }
                toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                var $toast = toastr[shortCutFunction](msg);
                $toastlast = $toast;
            } 


            else if( width <= 180) {
                elemj.classList.add("bg-danger");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else if( width == 180) {
                elemj.classList.add("bg-danger");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                var shortCutFunction = 'success';
                if(user.email) { 
                    var msg = `3 Minutes Left! ${user.email}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.phoneNumber) { 
                    var msg = `3 Minutes Left! ${user.phoneNumber}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.isAnonymous) {
                    var msg = `3 Minutes Left! Anonymous User, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                }
                toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                var $toast = toastr[shortCutFunction](msg);
                $toastlast = $toast;
            } 



            else if( width <= 200) {
                elemj.classList.add("bg-danger");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 


            else if( width <= 240) {
                elemj.classList.add("bg-warning");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else if( width == 240) {
                elemj.classList.add("bg-warning");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                var shortCutFunction = 'success';
                if(user.email) { 
                    var msg = `4 Minutes Left! ${user.email}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.phoneNumber) { 
                    var msg = `4 Minutes Left! ${user.phoneNumber}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.isAnonymous) {
                    var msg = `4 Minutes Left! Anonymous User, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                }
                toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                var $toast = toastr[shortCutFunction](msg);
                $toastlast = $toast;
            } 


            else if( width <= 300) {
                elemj.classList.add("bg-warning");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else if( width == 300) {
                elemj.classList.add("bg-warning");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                var shortCutFunction = 'success';
                if(user.email) { 
                    var msg = `5 Minutes Left! ${user.email}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.phoneNumber) { 
                    var msg = `5 Minutes Left! ${user.phoneNumber}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.isAnonymous) {
                    var msg = `5 Minutes Left! Anonymous User, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                }
                toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                var $toast = toastr[shortCutFunction](msg);
                $toastlast = $toast;
            } 


            else if( width <= 359) {
                elemj.classList.add("bg-warning");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else if( width == 360) {
                elemj.classList.add("bg-warning");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                var shortCutFunction = 'success';
                if(user.email) { 
                    var msg = `6 Minutes Left! ${user.email}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.phoneNumber) { 
                    var msg = `6 Minutes Left! ${user.phoneNumber}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.isAnonymous) {
                    var msg = `6 Minutes Left! Anonymous User, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                }
                toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                var $toast = toastr[shortCutFunction](msg);
                $toastlast = $toast;
            } 



            else if( width <= 400) {
                elemj.classList.add("bg-warning");
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 

            else if( width <= 419) {
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else if( width == 420) {
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                var shortCutFunction = 'success';
                if(user.email) { 
                    var msg = `7 Minutes Left! ${user.email}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.phoneNumber) { 
                    var msg = `7 Minutes Left! ${user.phoneNumber}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.isAnonymous) {
                    var msg = `7 Minutes Left! Anonymous User, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                }
                toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                var $toast = toastr[shortCutFunction](msg);
                $toastlast = $toast;
            } 


            else if( width <= 479) {
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else if( width == 480) {
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                var shortCutFunction = 'success';
                if(user.email) { 
                    var msg = `8 Minutes Left! ${user.email}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.phoneNumber) { 
                    var msg = `8 Minutes Left! ${user.phoneNumber}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.isAnonymous) {
                    var msg = `8 Minutes Left! Anonymous User, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                }
                toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                var $toast = toastr[shortCutFunction](msg);
                $toastlast = $toast;
            } 


            else if( width <= 539) {
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else if( width == 540) {
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){ seconds = '0'+seconds }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                var shortCutFunction = 'success';
                if(user.email) { 
                    var msg = `9 Minutes Left! ${user.email}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.phoneNumber) { 
                    var msg = `9 Minutes Left! ${user.phoneNumber}, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                } else if(user.isAnonymous) {
                    var msg = `9 Minutes Left! Anonymous User, <hr class="to-hr"> Complete the $${depoAm} bitcoin deposit before time runs out.`; 
                }
                toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                var $toast = toastr[shortCutFunction](msg);
                $toastlast = $toast;
            } 

            else {
                localStorage.setItem('depo-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){
                    seconds = '0'+seconds
                }
                elemj.style.width = (width/6) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            }
        }
    } else {
        console.log('There was nothing on your cart')
    }     
}); 