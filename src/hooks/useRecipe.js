import {useEffect, useState} from 'react';
import {listRecipes} from '../api/api';

const useRecipe = (from) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        setLoading(true);
        setError(false);

        const controller = new AbortController();
        const {signal} = controller;

        listRecipes(from, {signal})
            .then(res=>{
                setRecipes([...recipes, ...res.results])
                setLoading(false)
            })
            .catch(e =>{
                setLoading(false);
                if(signal.aborted) return;
                setError(true);
            })
        
        return () => controller.abort();
    }, [from]);

    return {loading, error, recipes}
}

export default useRecipe;