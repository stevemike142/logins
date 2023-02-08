
"use strict";
var toast = localStorage.getItem('banktotal');
var accBal = localStorage.getItem('acc-balance');
var toast2 = localStorage.getItem('divtotal');
let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
var toastbitcoin = '';
var toastbitcoin2 = '';
ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    toastbitcoin = (toast / (parseFloat(stockObject.k.c))).toFixed(5);
    toastbitcoin2 = (toast2 / (parseFloat(stockObject.k.c))).toFixed(5);
}



var i = -1;
var $toastlast;

var getMessage = function() {

    if(parseInt(accBal) > parseInt(toast)) {
        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
            for (var i = 0; i < items.length; i++) {
                var msgs = [`
                    Your account balance of: $${accBal} is enough to download: 
                    <hr>
                    ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} 
                    <hr class="to-hr">
                    Deposit an extra $70 that will be used to purchase bank logs later on.
                `];
                i++;
                if (i === msgs.length) {
                    i = 0;
                }
                return msgs[i];
            }
        } else if(JSON.parse(localStorage.getItem('banklogs')).length > 1) {        
            for (var i = 0; i < items.length; i++) {
                var msgs = [`
                    Your account balance of: $${accBal} is enough to download: 
                    <hr>
                    ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs 
                    <hr class="to-hr">
                    Deposit an extra $70 that will be used to purchase bank logs later on.
                `];
                i++;
                if (i === msgs.length) {
                    i = 0;
                }
                return msgs[i];
            }
        }
    } else {
        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
            for (var i = 0; i < items.length; i++) {
                var msgs = [`
                    ${toastbitcoin} Bitcoin payment not detected
                    <hr>
                    Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                    <hr class="to-hr">
                    Or deposit to your account balance and use the funds to purchase bank logs.
                `];
                i++;
                if (i === msgs.length) {
                    i = 0;
                }
                return msgs[i];
            }
        } else if(JSON.parse(localStorage.getItem('banklogs')).length > 1) {        
            for (var i = 0; i < items.length; i++) {
                var msgs = [`
                    ${toastbitcoin2} Bitcoin payment not detected
                    <hr>
                    Scan the bitcoin address and send $${toast2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                    <hr class="to-hr">
                    Or deposit to your account balance and use the funds to purchase bank logs.
                `];
                i++;
                if (i === msgs.length) {
                    i = 0;
                }
                return msgs[i];
            }
        }
    }
};

var toastbut = document.getElementById('anon-check');

auth.onAuthStateChanged(user => {
	if(user.phoneNumber){
		$(toastbut).click(function() {
            var shortCutFunction = 'success';
            var msg = '';
            var title = '';
            toastr.options = {
                closeButton: true,
                debug: false,
                newestOnTop: true,
                progressBar: true,
                positionClass: 'toast-top-full-width',
                preventDuplicates: true,
                onclick: null
            };
            if (!msg) {
                msg = getMessage();
            }
            var $toast = toastr[shortCutFunction](msg, title);
            $toastlast = $toast;
        });
	} else {
        toastbut.setAttribute('data-bs-toggle', 'modal');
        toastbut.setAttribute('data-bs-target', '#phoneModal');
    }
});