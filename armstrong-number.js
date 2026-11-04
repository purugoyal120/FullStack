

function isArmstrong(num) {
    let temp = num;
    let sum = 0;
    let digits = num.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

let num = 351;

if (isArmstrong(num)) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}

