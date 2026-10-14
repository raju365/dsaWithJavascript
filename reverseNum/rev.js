const reverseNumber = (num) =>{
    let reverse = 0;
    while(num>0){
        let digit = num % 10; // getting last digit from the number
        reverse = reverse * 10 + digit; // storing last digit in reverse 
        num = Math.floor(num/10); //removing last digit from number


    }
    return reverse;


}
console.log(reverseNumber(245));