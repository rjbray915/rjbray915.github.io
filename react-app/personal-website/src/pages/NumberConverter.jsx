import Helmet from "react-helmet"
import {useState} from "react"

function NumberConverter() {
    var base1 = 2
    var base2 = 16
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [numDec, setNumDec] = useState("");

    function convert(x, xBase, yBase) {
        if (x == "")
            return "";

        var xDecimal = x.split("").reverse().map((digit, idx) => (parseInt(hexCharToDigit(digit)) * xBase**idx)).reduce((a, b) => a+b, 0);
        setNumDec(xDecimal.toString());
        console.log(xDecimal);

        var remainders = [];
        var quotient = xDecimal;
        while(quotient > 0) {
            remainders = remainders.concat(quotient % yBase);
            quotient = parseInt(quotient / yBase);
            console.log(remainders);
        }

        var retStr = "";
        return remainders.reverse().map(digit => (
            digitToHexChar(digit)
        )).join("");
    }

    function digitToHexChar(digit) {
        if (digit > 9)
            return String.fromCharCode("A".charCodeAt(0) + digit - 10);
        else
            return digit.toString();
    }

    function hexCharToDigit(hexChar) {
        if (hexChar.charCodeAt(0) >= "A".charCodeAt(0))
            return 10 + hexChar.charCodeAt(0) - "A".charCodeAt(0);
        else
            return parseInt(hexChar);
    }

    return <>
        <Helmet>
            <title>Robert Bray | Number Converter</title>
            <meta name="description" content="Converter for number bases"/>
        </Helmet>
        <div>
            <p>Binary</p>
            <input value={num1} onInput={e => {console.log(e); setNum1(e.target.value); setNum2(convert(e.target.value, 2, 16)); setNumDec(convert(e.target.value, 2, 10))}}/>
        </div>
        <div>
            <p>Decimal</p>
            <input value={numDec} onInput={e => {console.log(e); setNumDec(e.target.value); setNum1(convert(e.target.value, 10, 2)); setNum2(convert(e.target.value, 10, 16))}}/>
        </div>
        <div>
            <p>Hexadecimal</p>
            <input value={num2} onInput={e => {setNum2(e.target.value); setNum1(convert(e.target.value, 16, 2)); setNumDec(convert(e.target.value, 2, 10))}}/>
        </div>
        
    </>
}

export default NumberConverter;