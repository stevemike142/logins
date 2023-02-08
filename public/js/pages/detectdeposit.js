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
        if(localStorage.getItem('deposit-amount')) {
            let coinbase = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
            coinbase.onmessage = event => {
                let confirm = JSON.parse(event.data);
                let coinz = ((response.x.out[0].value / 100000000) * parseFloat(confirm.k.c)).toFixed(0);
                let balance = parseInt(coinz);

                localStorage.removeItem('deposit-amount',[]);
                localStorage.setItem('time-left', 600);
                if(localStorage.getItem('acc-balance')) {
                    let prevBalance = parseInt(localStorage.getItem('acc-balance'));
                    let newBalance = prevBalance += balance;
                    localStorage.setItem('acc-balance', newBalance);
                } else {
                    localStorage.setItem('acc-balance', balance);
                }
                window.location.reload();
            }
        }
    }             
}