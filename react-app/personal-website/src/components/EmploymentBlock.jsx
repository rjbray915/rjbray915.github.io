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
                {description}
            </p> 
        </>
    )
}

export default EmploymentBlock;