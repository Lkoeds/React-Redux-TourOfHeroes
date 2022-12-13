import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHero } from '../../app/selectHeroeSlice';
import { edit_heroe } from '../heroes/heroSlicer';
import './heroDetail.css';
const HeroDetail = () => {

    const hero = useSelector(getHero);
    const heroId = hero.heroeSelected.id;
    const navigate = useNavigate();
    const [name, setName] = useState(hero.heroeSelected.name);
    const [sPower, setsPower] = useState(hero.heroeSelected.power);
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch(); 
    
    return (
        <>
            <h2>{`${name.toUpperCase()} Details`}</h2>
            <div>
                {`id: ${heroId}`}
            </div>
            <div>
                <label htmlFor="inputHeroName" id="labelHeroName">Hero name: </label>
                <input id="inputHeroName" placeholder="Hero name" value={name} onChange={e => setName(e.target.value)}/><br/>
                <label htmlFor="inputSuperPower" id="labelHeroPower">Super power: </label>
                <input id="inputSuperPower" placeholder="Hero Super Power" value={sPower} onChange={e => setsPower(e.target.value)}/>
                <label htmlFor="favCheckbox" className="favCheck"><input id="favCheckbox" type="checkbox" defaultChecked={hero.heroeSelected.favorite} onChange={() => setChecked(!hero.heroeSelected.favorite)}/> Marcar como favorito</label>
            </div>
            <button onClick={()=>navigate(-1)}>Go Back</button>
            <button onClick={() => dispatch(edit_heroe({id:heroId, name:name, power:sPower, favorite:checked}))}>Save</button>
        </>
    )
}

export default HeroDetail;