 
 //SOAL 1
 let total1 = 0
 let total2 = 0
 let total3 = 0
 let total4 = 0
 let total5 = 0

 const number = [10,11,12,13,14]
 number.splice(0,1)
  for(i=0; i < number.length; i++){
     //console.log(number[i])
     total1 += number[i]
 }
console.log(total1)

const number2 = [10,11,12,13,14]
number2.splice(1,1)
 for(i=0; i < number2.length; i++){
    //console.log(number2[i])
    total2 += number2[i]
}
console.log(total2)

const number3 = [10,11,12,13,14]
number3.splice(2,1)
 for(i=0; i < number3.length; i++){
    //console.log(number3[i])
    total3 += number3[i]
}
console.log(total3)

const number4 = [10,11,12,13,14]
number4.splice(3,1)
 for(i=0; i < number4.length; i++){
    //console.log(number4[i])
    total4 += number4[i]
}
console.log(total4)

const number5 = [10,11,12,13,14]
number5.splice(4,1)
 for(i=0; i < number5.length; i++){
    //console.log(number5[i])
    total5 += number5[i]
}
console.log(total5)

let hasil = [total1, total2, total3, total4, total5]
let text = '==================================='
console.log(text)
console.log(hasil)

//SOAL 2
function Prime (num) {
    var flag = true
    for(var i = num-1; i>1; i--) {
      if (num%i === 0) {
        flag = false
      } 
    }
    return flag
  }
  
 console.log(Prime(1));
console.log(Math.max(...hasil))
console.log(Math.min(...hasil))
