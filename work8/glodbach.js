function goldbach(){
    var num = document.getElementById('odd').value
    if(num%2!==0){
        alert("请输入一个大于2的偶数")
    }
    let goldbach = document.getElementById('goldbach')
    var arr=[]
    var a = 0
    for(var i=2;i<=num;i++){
        a=0
        for(var j=2;j<i;j++){
            if(i%j==0){
                a++
            }
        }
        if(a==0){
            arr.push(i)
        }
    }
    var str = ''
    for(let i=0;i<(arr.length)/2;i++){
        for(let j=0;j<arr.length;j++){
            if((arr[i]+arr[j])===Number(num)){
                str +='<div>'+num+"可以拆分为两个质数"+arr[i]+"与"+arr[j]+"的和"+'</div>'
            }
        }
    }
        goldbach.innerHTML = str
    }