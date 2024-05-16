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

let binToOct = (binary) => {
    let result = "";
    for (let i = binary.length - 1; i >= 0; i-=3) {
        let tempRes = 0;
        let bit = 1;
        for (let j = i; j >= i-2; j--)
        {
            if (j >= 0)
                {
                    if (binary[j] == "1")
                        tempRes += bit;
                    bit *= 2;
                }
            
        }
        result += tempRes;
    }
    return result.split("").reverse().join("");
}

let octToBin = (octal) => {
    let result = "";
    for (let i = 0; i < octal.length; i++)
    {
        switch (octal[i]) {
            case "0":
                result += "000";
                break;
            case "1":
                result += "001";
                break;
            case "2":
                result += "010";
                break;
            case "3":
                result += "011";
                break;
            case "4":
                result += "100";
                break;
            case "5":
                result += "101";
                break;
            case "6":
                result += "110";
                break;
            case "7":
                result += "111";
                break;
        }
    }
    while (result[0] != "1" && result.length != 8)
    {
        let temp = result.split("");
        temp.shift();
        result = temp.join("");
    }
    return result;
}

let translateIP = (values, conversionType, output) => {
    let translatedIP = "";
    for (let i = 0; i < values.length; i++) {
        let newValue = "";
        if (conversionType == "bin") newValue = decToBin(values[i]).toString();
        else if (conversionType == "dec") newValue = binToDec(values[i]).toString();
        else if (conversionType == "oct") 
        {
            newValue = decToBin(values[i]).toString();
            newValue = binToOct(newValue).toString();
        }
        else if (conversionType == "octDec") 
        {
            newValue = octToBin(values[i]).toString();
            newValue = binToDec(newValue).toString();
        }

        translatedIP += newValue;

        if (i < values.length-1)
        {
            translatedIP += ".";
        }
    }

    output.innerHTML = translatedIP;
}
