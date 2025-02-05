const Movie = ({ title, year, imageUrl }) => {

    return (
        <>
            <div className="movie">
                <img src={imageUrl} alt="Movie" />
                <h1> {title} </h1>
                <p> {year} </p>
            </div>
        </>
    )
}

export default Movie