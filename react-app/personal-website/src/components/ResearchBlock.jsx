function ResearchBlock({title, date, authors}) {
    const authors_elements = authors.map((author) => <span>{author}, </span>);

    return (
        <>
            <p>
                <strong>{title}</strong>
                <br/>
                {date}
                <br/>
                {authors_elements}
            </p>
        </>
    )
}

export default ResearchBlock;