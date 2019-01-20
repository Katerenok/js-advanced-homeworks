let bonus = (values) => {
    let sum = 0;
    const limit = 10000;
    const percent = 5;
    for (let val of values) {
      sum += val;
    }

    if (sum <= limit) {
       return 0;
    }

    const bonus = (sum - limit) / 100 * percent; 
    return Math.trunc(bonus);
}

console.log(bonus([200, 550, 4000, 23, 58, 5000, 485, 711]));