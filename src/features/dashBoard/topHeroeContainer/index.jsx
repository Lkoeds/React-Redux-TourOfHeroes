import {useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { select_heroe } from '../../../app/selectHeroeSlice';
import './container.css'


 const HeroeContainer = (props) => {
    
    const dispatch = useDispatch();

    return (
        <div className="topHeroContainer">
            <Link to="/hero_detail" onClick={() => dispatch(select_heroe(props.payload))}>{props.name}</Link>
        </div>
    )
}

export default HeroeContainer;