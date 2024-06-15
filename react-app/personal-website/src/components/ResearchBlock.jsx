function ResearchBlock({title, date, authors, publication}) {
    const authors_elements = authors.map((author,  index) => {
        if(index == 0)
            return <span>{author}</span>
        else
            return <span>, {author}</span>;
        
    });

    return (
        <>
            <p>
                <strong>{title}</strong>
                <br/>
                {date}
                <br/>
                {authors_elements}
                <br/>
                <i>{publication}</i>
            </p>
        </>
    )
}

export default ResearchBlock;