import Helmet from "react-helmet"

function Calculator() {
    return <>
        <Helmet>
            <title>Robert Bray | Calculator</title>
            <meta name="description" content="A simple calculator for programmers"/>
        </Helmet>
        <h2>Calculator</h2>
        <textarea placeholder="0"></textarea>
        <div class="flex-row">
            <div class="flex-col-30">
                <button>1</button>
            </div>
            <div class="flex-col-30">
                <button>2</button>
            </div>
            <div class="flex-col-30">
                <button>3</button>
            </div>
        </div>
    </>
}

export default Calculator;