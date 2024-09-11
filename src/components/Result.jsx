const Result = (props) => {

    return (
        <section>
            <h2>Result</h2>
            <p>Du fick {props.score} rätt svar!</p>
            <button>Börja om</button>
        </section>
    )
}

export default Result;