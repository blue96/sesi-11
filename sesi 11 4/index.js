
function checkMode(arr){
    let same = false
    let number = arr
    let numbCheck = [[]]
    let temp = 0
    let tempCount = 0
    for (let i = 0; i<number.length;i++){
        for (let j = 0; j<numbCheck.length;j++){
            if (number[i] === numbCheck[j][0]){
                same = true
            } 
        }
        if (same === false){
            numbCheck.push([number[i],0])
        }
        same = false
    }

    for (let i = 0; i<number.length;i++){
        for (let j = 0; j<numbCheck.length;j++){
            if (number[i] === numbCheck[j][0]){
                numbCheck[j][1] += 1
            }
        }
    }

    for (let i = 0;i<numbCheck.length;i++){
        if (tempCount < numbCheck[i][1] ){
            tempCount = numbCheck[i][1]
            temp = numbCheck[i][0]
        }
    }

    return temp
}

console.log(`modus = ${checkMode([10,8,1,9,7,29,1,0,4,1,7])}`)