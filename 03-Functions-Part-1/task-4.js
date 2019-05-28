function f(num) {
    if (typeof num != 'number')
        throw new Error('parameter type is not a Number');
    if (num < 1 || num > 7)
        throw new Error('parameter should be in the range of 1 to 7');

    switch (num) {
        case 1:
            return 'კვირა';
            break;
        case 2:
            return 'ორშაბათი';
            break;
        case 3:
            return 'სამშაბათი';
            break;
        case 4:
            return 'ოთხშაბათი';
            break;
        case 5:
            return 'ხუთშაბათი';
            break;
        case 6:
            return 'პარასკევი';
            break;
    }
    return 'შაბათი';
}

console.log(f(7));