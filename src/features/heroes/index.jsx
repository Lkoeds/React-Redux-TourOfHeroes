import { useSelector, useDispatch } from 'react-redux'
import { add_heroe, getHeroes } from './heroSlicer'
import Hero from './hero'
import './myHeroes.css'
import { useState } from 'react'

const MyHeroes = () => {
    const getAllHeroes = useSelector(getHeroes);
    const dispatch = useDispatch();
    const [heroName, setHeroName] = useState('');
    return (
        <>
            <h2>My Heroes</h2>
            <div>
                <label >Hero name: </label>
                <input className='lblHName' onChange={e => setHeroName(e.target.value)}/>
                <button type="button" className="addHero" onClick={()=>dispatch(add_heroe({name:heroName}))}>
                    Add hero
                </button>
            </div>
            <ul className='heroUl'>
                {
                    getAllHeroes.map(hero => {
                        return <li key={hero.id} className='heroItem'><Hero payload={hero} hId={hero.id} name={hero.name} /></li>
                    })
                }
            </ul>
        </>
    )
}

export default MyHeroes;