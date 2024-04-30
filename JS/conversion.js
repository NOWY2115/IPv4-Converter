let decToBin = (decimal) => {
    let result = "";
    let bit = 128;
    while (bit >= 1) {
        if (parseFloat(decimal / bit) >= 1) {
            result += "1";
            decimal -= bit;
        } else result += "0";

        bit /= 2;
    }
    return result;
}

let binToDec = (binary) => {
    let result = 0;
    let bit = 1;
    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] == "1")
            result += bit;
        bit *= 2;
    }
    return result;
}

let translateIP = (values, isDecimal, output) => {
    let translatedIP = "";
    for (let i = 0; i < values.length; i++) {
        let newValue = "";
        if (isDecimal) newValue = decToBin(values[i]).toString();
        else newValue = binToDec(values[i]).toString();

        translatedIP += newValue;

        if (i < values.length-1)
        {
            translatedIP += ".";
        }
    }

    output.innerHTML = translatedIP;
}