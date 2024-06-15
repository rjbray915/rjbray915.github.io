import Helmet from "react-helmet"
import {Link} from "react-router-dom"

function Tools() {
    return (
        <>
            <Helmet>
                <title>Robert Bray | Tools</title>
                <meta name="description" content="Tools I'm currently working on."/>
            </Helmet>
            <h2>Tools</h2>
            <div>
                <Link to="number-converter">Number Converter</Link>
            </div>
            <div>
                <Link to="calculator">Calculator</Link>
            </div>
            
        </>
    );
}

export default Tools;