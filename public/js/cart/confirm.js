let items = [];
var table3 = jQuery('#example1').DataTable();
var setBtn = document.getElementById('settings');
var wouldYou = document.getElementById('would');
var anonDiv = document.getElementById('anon-div');

if(!localStorage.getItem('banklogs') || ((JSON.parse(localStorage.getItem('banklogs')).length) < 1)) {
    document.getElementById('confirm').style.display = 'flex';
    document.getElementById('logs-invoice').style.display = 'none';
} else {
    document.getElementById('confirm').style.display = 'none';
    document.getElementById('logs-invoice').style.display = 'flex';
}


if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){

    items = JSON.parse(localStorage.getItem('banklogs'));
    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);

    items.map(data=>{
        var image = `<td><img src=${data.image}></td>`
        var balance = `<td class="btn-balance">${data.balance}</td>`
        var price = `<td class="btn-price">${data.price}</td>`
        var remove = `<td><button class="btn-cloze btn-remove"></button></td>`
        var account = `<td>${data.account}</td>`
        var website = `<td>${data.website}</td>`
        var info1 = `<td>${data.info1}</td>`
        var info2 = `<td>${data.info2}</td>`
        var info3 = `<td>${data.info3}</td>`
        var info4 = `<td>${data.info4}</td>`
        var info5 = `<td>${data.info5}</td>`
        var info6 = `<td>${data.info6}</td>`
        
        table3.row.add([
            image,
            balance,      
            account,   
            remove,
            price,
            info1,   
            info2,   
            info3,   
            info4,   
            info5,   
            info6,   
            website,      
        ]).draw();
    });

    var removeFromCartButtons = document.getElementsByClassName('btn-remove');
    for(var i = 0; i <removeFromCartButtons.length; i++){
        var button = removeFromCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    updateCartTotal();

} else {
    document.getElementById('cartlength').style.display = 'none';
    setBtn.innerHTML = `Cart: $0 <img src="img/partners/bitcoin.png">`;
    setBtn.style.left = '27%';
    setBtn.style.right = '27%';

    var profileModal = document.getElementById('profileModal');
    var modalDialog = profileModal.getElementsByClassName('modal-dialog')[0];

    if (window.innerWidth > 1092) {
        modalDialog.style.top = '5vh';
        modalDialog.style.minWidth = '85vw';
    } 
}

if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 3)){
    document.getElementsByClassName('dataTables_paginate')[0].style.display = 'block';
    document.getElementsByClassName('dataTables_length')[0].style.display = 'block'
}

function removeCartItem(event) {
    var buttonClicked = event.target
    var cartItem = buttonClicked.parentElement.parentElement;
    var price = cartItem.children[4].innerText;
    var balance = cartItem.children[1].innerText;
    var account = cartItem.children[2].innerText;
    var website = cartItem.children[11].innerText;
    var image = cartItem.children[0].children[0].src;
    var info1 = cartItem.children[5].innerText;
    var info2 = cartItem.children[6].innerText;
    var info3 = cartItem.children[7].innerText;
    var info4 = cartItem.children[8].innerText;
    var info5 = cartItem.children[9].innerText;
    var info6 = cartItem.children[10].innerText;
    removeItemFromCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6);
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal()
}

function removeItemFromCart(price, balance,account,website,image,info1,info2,info3,info4,info5,info6){
    let item = {
        price: price,
        balance: balance,
        account: account,
        website: website,
        image: image,
        info1: info1,
        info2: info2,
        info3: info3,
        info4: info4,
        info5: info5,
        info6: info6
    }
    function checkAdult(items) {
        return JSON.stringify(items) !== JSON.stringify(item)
    }
    localStorage.setItem('banklogs', JSON.stringify(items.filter(checkAdult)));
    items = items.filter(checkAdult);
    window.location.reload()
}


function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });
    document.getElementById('theno1').innerHTML = 'Cart: ' + JSON.parse(localStorage.getItem('banklogs')).length + ' , Total: $' + total.toLocaleString();
    document.getElementById('thetot1').innerHTML = `
        Checkout:  $${total.toLocaleString()}
        <img src="img/partners/bitcoin.png"> 
    `;
    document.getElementById('thetot').innerHTML = `View Cart: $${total.toLocaleString()}`;
    document.getElementById('than-check').innerHTML = `Checkout: $${total.toLocaleString()}`;
    document.getElementById('phone-check').innerHTML = `Checkout: $${total.toLocaleString()}`;
    document.getElementById('email-check').innerHTML = `Checkout: $${total.toLocaleString()}`;
    document.getElementById('ver-check').innerHTML = `Checkout: $${total.toLocaleString()} <img src="img/partners/btc.png">`;
    setBtn.innerHTML = `Cart: $${total.toLocaleString()} <img src="img/partners/bitcoin.png">`;
    if((JSON.parse(localStorage.getItem('banklogs')).length) == 1) {
        const bankLog = (JSON.parse(localStorage.getItem('banklogs'))[0].account);
        const bankBal = (JSON.parse(localStorage.getItem('banklogs'))[0].balance);

        const banking1 = (JSON.parse(localStorage.getItem('banklogs'))[0].info1);
        const banking2 = (JSON.parse(localStorage.getItem('banklogs'))[0].info2);
        const banking3 = (JSON.parse(localStorage.getItem('banklogs'))[0].info3);
        const banking4 = (JSON.parse(localStorage.getItem('banklogs'))[0].info4);
        const banking5 = (JSON.parse(localStorage.getItem('banklogs'))[0].info5);
        const banking6 = (JSON.parse(localStorage.getItem('banklogs'))[0].info6);

        if (window.innerWidth > 768) {
            anonDiv.style.marginTop = '11vh';
        } else if(window.innerWidth >= 390) {
            anonDiv.style.marginTop = '17vh';
        } else if(window.innerWidth >= 375) {
            anonDiv.style.marginTop = '15vh';
        } else if(window.innerWidth >= 370) {
            anonDiv.style.marginTop = '12vh';
        }

        wouldYou.innerHTML = `
            ${bankLog.replace(']',' ACCOUNT]')} with <span>${bankBal}</span> 
            <hr class="thehr" style="margin: 0 !important; padding: 0 !important">
            ${banking1}, ${banking2}, ${banking3}, ${banking4}, ${banking5}, ${banking6} 
            <hr class="thehr" style="margin: 0 !important; padding: 0 !important">
        `;
    } else if((JSON.parse(localStorage.getItem('banklogs')).length) == 2) {
        var Loginz = (JSON.parse(localStorage.getItem('banklogs')));

        if (window.innerWidth > 768) {
            anonDiv.style.marginTop = '13.5vh';
        } else if(window.innerWidth >= 390) {
            anonDiv.style.marginTop = '16vh';
        } else if(window.innerWidth >= 375) {
            anonDiv.style.marginTop = '14vh';
        } else if(window.innerWidth >= 370) {
            anonDiv.style.marginTop = '11vh';
        }
    
        for(var i = 0; i < Loginz.length; i++) {
            var logRow = document.createElement('span');
            logRow.style.fontWeight = '500';
            logRow.innerHTML = `
                <span>${i+1}.</span> ${(Loginz[i].account.replace(']', ' ACCOUNT]'))} -
                <span>${Loginz[i].balance}</span>.
                <hr class="nohr">
            `;
            wouldYou.append(logRow);
        }
    } else if((JSON.parse(localStorage.getItem('banklogs')).length) == 3) {
        var Loginz = (JSON.parse(localStorage.getItem('banklogs')));
        if (window.innerWidth > 768) {
            anonDiv.style.marginTop = '14vh';
        } else if(window.innerWidth >= 390) {
            anonDiv.style.marginTop = '18vh';
        } else if(window.innerWidth >= 375) {
            anonDiv.style.marginTop = '16vh';
        } else if(window.innerWidth >= 370) {
            anonDiv.style.marginTop = '13vh';
        }
    
        for(var i = 0; i < Loginz.length; i++) {
            var logRow = document.createElement('span');
            logRow.style.fontWeight = '500';
            if(Loginz[i].account.includes('Huntington') || Loginz[i].account.includes('Woodforest') || Loginz[i].account.includes('Barclays')) {
                logRow.innerHTML = `
                    <span>${i+1}.</span> ${(Loginz[i].account).substring(0, Loginz[i].account.indexOf('Bank'))} -
                    <span>${Loginz[i].balance}</span>. 
                    <hr class="nohr" style="margin: 5px auto !important">
                `;
            } else if(Loginz[i].account.includes('America')) {
                logRow.innerHTML = `
                    <span>${i+1}.</span> B.O.America -
                    <span>${Loginz[i].balance}</span>. 
                    <hr class="nohr" style="margin: 5px auto !important">
                `;
            } else {
                logRow.innerHTML = `
                    <span>${i+1}.</span> ${(Loginz[i].account).substring(0, Loginz[i].account.indexOf('['))} -
                    <span>${Loginz[i].balance}</span>. 
                    <hr class="nohr" style="margin: 5px auto !important">
                `;
            }
            wouldYou.append(logRow);
        }
    } 
    localStorage.setItem('time-left', 600);

    var profileModal = document.getElementById('profileModal');
    var modalDialog = profileModal.getElementsByClassName('modal-dialog')[0];

    if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
        if (window.innerWidth > 1092) {
            modalDialog.style.top = '5vh';
            modalDialog.style.minWidth = '85vw';
        } 
    } else if(JSON.parse(localStorage.getItem('banklogs')).length == 2) {
        if (window.innerWidth > 1092) {
            modalDialog.style.top = '3vh';
            modalDialog.style.minWidth = '92vw';
        } 
    } else if(JSON.parse(localStorage.getItem('banklogs')).length >= 3) {
        if (window.innerWidth > 1092) {
            modalDialog.style.top = '-4vh';
            modalDialog.style.minWidth = '97vw';
        } 
    }
}
