import { useState } from "react";

const Game = (props) => {

    const questions = getQuestions();

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const question = questions[currentQuestion];

    const options = question.answers.map((answer, index) => (
        <p className="option" key={index}>
            <input type="radio" name="question" onClick={ () => setSelectedAnswer(index) } /> {answer}
        </p>

    ));

    const handleDecided = () => {
        if (selectedAnswer == question.correct) {
            props.answeredCorrectly();
        }

        if (currentQuestion < questions.length - 1){
            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            props.showResult();
        }
    }

    return (
        <section>
            <h2>{question.question}</h2>
            {options}
            <button onClick={handleDecided}>Svara</button>
            <p>{props.getScore}</p>
        </section>
    )
}

const getQuestions = () => {
    return [
        {
            question: "När är det julafton?",
            answers: ['24 maj', '24 december', '3 maj'], 
            correct: 1
        },
        {
            question: "Vilket språk är bäst?",
            answers: ['Kotlin', 'JavaScript', 'Swift'], 
            correct: 2
        },
        {
            question: "Vilken är bäst?",
            answers: ['AW169', 'H145', 'AW139'], 
            correct: 0
        }
    ]
}

export default Game;