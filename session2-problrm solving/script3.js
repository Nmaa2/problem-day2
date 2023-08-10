//Home Work second day

function sumNum(n){
    var num=[1,2,3,4,5,6]
     
    for (var i=1; i<=n;i++){
        console.log(i)    }

        switch (n){
            case 3:
                console.log("1+2 , 2+1 ");
                break
            case 5:
                console.log("2 +3 , 4+1 " );
                break
            case 7:
                console.log("3+4 , 5+2");
                break
            case 9:
                console.log("4+5 , 6+3 " );
                break
            case 11:
                console.log("5+6 , 6+5 ");
                break
            default:
                console.log("thank you")
        }

}
console.log(sumNum(5))