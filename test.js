    function fn(){
        var email = '11111';
        var regMatch = !/^((?:[a-z\d]+[_\-\+\.]?)*[a-z\d]+)@(?:([a-z\d]+\-?)*[a-z\d]+\.)+([a-z]{2,})+$/i.test(email);
        console.log(regMatch);        
    }

    fn();