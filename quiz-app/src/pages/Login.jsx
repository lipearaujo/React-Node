import Card from '../components/Card'

const Login = (props) => {
    const startGame = () => {
        if(props.userName.trim().length > 0 && props.rga.trim().length > 0) {
            props.setShowLoginPage(false)
            props.setShowQuestionPage(true)
        } else {
            alert('Por favor, preencha todos os campos !')
        }
    }

    return (
        <Card>
            <div className="login">
                <h1>Educação Financeira Quiz</h1>
                <h3>Por favor, preencha com seu nome e RGA</h3>
                <input type="text" className="input_name" placeholder="Digite seu nome" value={props.userName} onChange={(e) => {props.setUserName(e.target.value)}}/>
                <input type="number" className="input_rga" value={props.rga} onChange={(e) => {props.setRga(e.target.value)}}/>
                <button className='btn-jogar' onClick={ startGame }>Jogar</button>
            </div>
        </Card>
    )
}

export default Login;
