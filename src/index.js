module.exports = function toReadable (number) {
    const unitsOfNumber = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const firstTensOfNumber = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensOfNumber = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function getUnit(num) {
        return unitsOfNumber[num - 1];
    }


    function getFirstTens(num) {
        return firstTensOfNumber[num - 10];
    }

    function getTens(num) {
        const ten = tensOfNumber[Math.floor(num / 10)];
        const unit = getUnit(num % 10);

        if (num >= 11 && num <= 19) {
            return getFirstTens(num);
        }

        if (!unit) {
            return ten;
        }

        if (!ten) {
            return unit;
        }

        return `${ten} ${unit}`;

    }

    function getHundreds(num) {
        const hundred = getUnit(Math.floor(num / 100));
        const restNum = getTens(num % 100);

        if (num % 100 === 10) {
            return `${hundred} hundred ${getFirstTens(10)}`
        }
        if (!restNum) {
            return `${hundred} hundred`;
        }
        return `${hundred} hundred ${restNum}`;
    }

    function getThousand(num) {

        const thousand = getUnit(Math.floor(num / 1000));
        const resNum = getHundreds(num % 1000);

        if (!resNum) {
            return `${thousand} thousand`;
        }
        return `${thousand} thousand ${resNum}`
    }

    if (number < 0) {
        return 'Please input a positive number';

    } else if (number === 0) {
        return 'zero';

    } else if (number < 10) {
        return getUnit(number);

    } else if (number < 20) {
        return getFirstTens(number);

    } else if (number < 100) {
        return getTens(number);

    } else if (number < 1000) {
        return getHundreds(number);

    } else if (number < 10000) {
        return getThousand(number);
    }
}
