function moltEgiz(a:number,b:number):number{
    let sum:number = 0
    if(a<1){
        return sum
    }
    while(a!==0){
        if(a%2===0){
            a=a/2
            b=b*2
        } else {
            a = a-1
            sum = sum + b   
        }
    }
    return sum
}

console.log(moltEgiz(5,5))