const formatBalance = (strings, balance) => {
    const val = balance % 10;
    const prefix = strings[0];

    let mark = ""

    switch (true) {
    	case [2,3,4].includes(val):
    	  mark = "балла"; break;
    	case (val == 1 && balance !== 11):
    	  mark = "балл"; break;
    	default:
    	  mark = "баллов"   
    }

    return `${prefix}${balance} ${mark}`;
}

let scores = [523, 6000, 5001, 19, 11, 1, 4]
scores.forEach((value) => {
    console.log(formatBalance`Ваш баланс: ${value}`);
})