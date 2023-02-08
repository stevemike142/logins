var binance = new WebSocket("wss://ws.blockchain.info/inv");
binance.onopen = function(){
    binance.send(JSON.stringify({
        "op": "unconfirmed_sub"
    }))
}
binance.onmessage = function(onmsg){
    var response = JSON.parse(onmsg.data);
    var address1 = response.x.out[0].addr;
    var address2 = '1AMjPsZQvqeAfnEjfk17fEUZc6rZuM9Ccp';

    if(address1 == address2) {
        if(!localStorage.getItem('deposit-amount')) {
            if(localStorage.getItem('banklogs')) {
                if((JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
                    let coinbase = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
                    coinbase.onmessage = event => {
                        let confirm = JSON.parse(event.data);
                        let coinz = ((response.x.out[0].value / 100000000) * parseFloat(confirm.k.c)).toFixed(0);
                        let balance = parseInt(coinz);

                        localStorage.setItem('pay-left', 1800);
                        localStorage.setItem('received-funds', balance);

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
                        localStorage.setItem('banklogs', []);
                        localStorage.setItem('time-left', 60000);
                    }
                }
            }
        }
    }             
}