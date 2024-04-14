import Collapsible from "./Collapsible.jsx"

function EmploymentBlock({title, company, timePeriod, description}) {
    return (
        <>
            <p>
                <strong>{title}</strong>
                <br/>
                {company}
                <br/>
                {timePeriod}
                <br/>
                <Collapsible>
                    <div>Description</div>
                    <p>{description}</p>
                </Collapsible>
            </p> 
        </>
    )
}

export default EmploymentBlock;