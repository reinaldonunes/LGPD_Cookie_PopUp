$(document).ready(function(){
    var seenLastDay = getCookie('lgpdCookie'); // change the name of your cookie here
    if(seenLastDay == null){
        showPopCookie('visible');
    }else{
        showPopCookie('hidden');
    }

    function showPopCookie(conditional){
        if(conditional=='visible'){
            setTimeout(function(){
                $("#cookiesPage").addClass("showCookie");
            },1500);
            $("#cookiesPage button").click(function(){
                var keyCode = this.getAttribute('value');
                if(keyCode == 'accept'){
                    $("#cookiesPage").removeClass("showCookie");
                    defineNewDateExpiration();
                }else{
                    $("#cookiesPage").removeClass("showCookie");
                }
                
            })
            //
        }else if(conditional=='hidden'){
            $("#cookiesPage button").click(function(){
                var keyCode = this.getAttribute('value');
                if(keyCode == 'accept'){
                    $("#cookiesPage").removeClass("showCookie");
                }
            });
        }
    }

    function defineNewDateExpiration(){
        var data = new Date();
        var daysToExpiration = 1;
        data.setTime(data.getTime()+(daysToExpiration*24*60*60*1000));
        var expires = 'expires="+data.toUTCString();';
        var cookie = 'lgpdCookie="Ainda não expirou";'+expires; // this cookie name must be equal line 2
        document.cookie = cookie;
    }
    function getCookie(nomeCookie){
        var ca=document.cookie.split(';');
        var name=nomeCookie+'=';
        for(var i=0;i<ca.length;i++){
            var c=ca[i].trim();
            if(c.indexOf(name)==0){
                return c.substring(name.length,c.length);
            }
        }
        return null;
    }
})