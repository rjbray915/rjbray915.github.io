import {useState, useRef, useEffect, Children, React} from "react"
import "./Collapsible.css"

function Collapsible({children}) {
    const [collapsed, setCollapsed] = useState(true);
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    function toggleCollapsed() {
        console.log(Children.toArray(children))
        setCollapsed(!collapsed);
    }

    useEffect(() => {
        if (collapsed)
            setHeight(0);
        else
            setHeight(ref.current.scrollHeight);
        console.log(height);
    }, [collapsed]);

    return (
        <>
            <button class="collapsible-btn" onClick={toggleCollapsed}>
                        {Children.toArray(children)[0]}
                        {collapsed ? (
                            <i class="fa fa-chevron-down"/>
                        ) : (
                            <i class="fa fa-chevron-up"/>
                        )}
            </button>
            <div class="collapsible-content" ref={ref} style={{maxHeight: height}}>
                {!collapsed ? (Children.toArray(children).slice(1)) : null}
            </div>
        </>
    )
}

export default Collapsible;