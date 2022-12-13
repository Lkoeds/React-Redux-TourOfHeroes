import { useState } from 'react';
import HeroeContainer from './topHeroeContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getHeroes } from '../heroes/heroSlicer'
import { select_heroe } from '../../app/selectHeroeSlice';
import { Link } from 'react-router-dom';
import './dashboard.css'

const Dashboard = () => {
    const getAllHeroes = useSelector(getHeroes);
    let topfive = 0;
    const favHeroes = getAllHeroes.filter((heroe, index) => {
        if (heroe.favorite === true && topfive < 5) {
            topfive += 1;
            return heroe;
        } else {
            index = getAllHeroes.length - 1;
            topfive = 0;
        }
    });

    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch("");

    const inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    const Results = (props => {
        const dataFiltered = getAllHeroes.filter(hero => {
            if (props.input !== '') {
                return hero.name.toLowerCase().includes(props.input)
            } else {
                return '';
            }
        })
        return (
            <>
                <div>
                    {dataFiltered.map((item) => (
                        <li key={item.id}>
                        <Link className="search-result" key={item.id} to="/hero_detail" onClick={() => dispatch(select_heroe(item))}>{item.name}</Link>
                        </li>
                    ))}
                </div>
            </>
        )
    })

    return (
        <>
            <h2>Top Heroes</h2>
            <div className='hContainer'>
                {
                    favHeroes.map(hero => {
                        return <li key={hero.id} className='heroItem'><HeroeContainer payload={hero} name={hero.name} /></li>
                    })
                }
            </div>
            <div className='heroeSearch'>
                <label htmlFor='search'>Heroe Search</label>
                <input id='search' onChange={inputHandler}></input>
                <Results input={inputText} />
            </div>
        </>
    )
}

export default Dashboard;