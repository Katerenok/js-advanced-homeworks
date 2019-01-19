const formatBalance = (balance) => {
    const val = balance % 10;
    if (val === 0)
        return `Ваш баланс: ${balance} баллов`;
    if (val === 1)
        return `Ваш баланс: ${balance} балл`;


    return `Ваш баланс: ${balance} балла`;
}

[523, 6000, 5001].forEach((value) => {
    console.log(formatBalance(value));
})