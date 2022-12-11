import imagemCachorro from "../../assets/cachorro.jpg";
import imagemGato from "../../assets/gato.jpg";

import './style.css'

const CardAnimal = (props) => {

    return(

        <div className='card-animal'>
            <img src={props.tipoAnimal === 'cachorro' ? imagemCachorro : imagemGato} alt='Animal'></img>
        </div>
    )
}

export default CardAnimal;