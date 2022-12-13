function time()
        {
        today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        h = ( h < 10 ? "0" : "" ) + h;
        m = ( m < 10 ? "0" : "" ) + m;
        s = ( s < 10 ? "0" : "" ) + s;
        document.getElementById('txt').innerHTML=h+":"+m+":"+s;
        setTimeout('time()',500);
        }