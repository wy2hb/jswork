    var goldbach = parseInt(prompt("odd"))
        isTrue(goldbach)
        function factorial(a){
            var sum=0;
            for(var i=1;i<=a;i++){
                if(a % i ==0){
                    sum++;
                }
            }
            if(sum==2){
                return true;
            }else{
                return false;

            }
        }
        function isTrue(a){
            for(var i=2;i<a-2;i++){
                var j = a -i;
                if(factorial(i)&&factorial(j)){
                    return 
                }
            }
        }
