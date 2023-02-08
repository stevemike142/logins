var j = true;
function move(){
    if(localStorage.getItem('received-funds')) {
        var elemj = document.getElementById('pablos');
        var width = localStorage.getItem('pay-left');
        var id = setInterval(frame, 1000);
        function frame(){
            if(width <= 0){
                clearInterval(id);
                i = false;
                localStorage.removeItem('received-funds');
                document.getElementById('logsection').style.display = 'none'
	            document.getElementById('predat').style.display = 'flex';
            } 
            else if( width <= 600) {
                elemj.classList.add("bg-danger");
                localStorage.setItem('pay-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){
                    seconds = '0'+seconds
                }
                elemj.style.width = (width/18) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else if( width <= 1200) {
                elemj.classList.add("bg-warning");
                localStorage.setItem('pay-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){
                    seconds = '0'+seconds
                }
                elemj.style.width = (width/18) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            } 
            else {
                localStorage.setItem('pay-left',width--);
                var minutes = Math.floor(width/60);
                var seconds = width - minutes * 60;
                if(seconds < 10){
                    seconds = '0'+seconds
                }
                elemj.style.width = (width/18) + "%";
                document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
            }
        }
    } else {
        console.log('There was nothing on your cart')
    }      
}