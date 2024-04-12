function EducationBlock({degreeLevel, major, year, school}) {
    return (
        <>
            <p>
                {degreeLevel}, {major}
                <br />
                {school}
                <br />
                {year} 
            </p>
        </>
    )
}

export default EducationBlock;