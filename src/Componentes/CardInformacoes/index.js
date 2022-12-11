import './style.css'

const CardInformacoes = (props) => {
    
    let nomeAnimalCachorro = 'Cachorro';
    let nomeAnimalGato = 'Gato';
    let informacaoCachorro ='É um mamífero carnívoro da família dos canídeos.';
    let informacaoGato = 'É um mamífero carnívoro da família dos felídeos.'

    return(


        <div className='card-info'>
            <h3>Informaçoes sobre o {props.tipoAnimal === 'cachorro' ? nomeAnimalCachorro : nomeAnimalGato}</h3>
            <p>{props.tipoAnimal === 'cachorro' ? informacaoCachorro : informacaoGato}</p>
        </div>
    )
}

export default CardInformacoes;