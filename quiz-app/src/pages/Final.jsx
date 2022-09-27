import Card from "../components/Card"

const Final = (props) => {

    const backToLogin = () => {
        props.setShowFinalPage(false);
        props.setShowLoginPage(true);
        props.setScore(0);
        props.setUserName('');
        props.setRga(0);
    }

    return (
        <Card>
            <div className="finalPage">
                <h1>Voçê chegou ao fim do Quiz { props.userName }!</h1>
                <h3 className="questionsBoxScore">Sua pontuação final: <b>{props.score}</b></h3>
                <div className="feedbackText"></div>
                <button className="playAgain" onClick={() => backToLogin()}>Jogar Novamente</button>
            </div>
        </Card>
    )
}

export default Final;