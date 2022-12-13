import { Link } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { select_heroe } from '../../../app/selectHeroeSlice';
import {delete_heroe} from '../heroSlicer';
const Hero = (props) => {

    const dispatch = useDispatch();
    return (       
        <> 
            <Link to ="/hero_detail" className="heroAn" onClick={() => dispatch(select_heroe(props.payload))}><span className="heroId">{props.hId}</span>{props.name}</Link><button type="button" className="delete" onClick={()=>dispatch(delete_heroe(props.hId))}>x</button>
            </>
    )
}

export default Hero;