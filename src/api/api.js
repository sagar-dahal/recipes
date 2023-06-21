import axios from "axios";

export const listRecipes = async (from, opt={}) => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
        from: from,
        size: 20
        },
        headers: {
        'X-RapidAPI-Key': 'bfc5a16e4amsh86bbc4f99827efbp10d3aajsn3038a251712e',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        },
        opt
    };
    console.log(opt);

    try {
        const response = await axios.request(options);
        return response.data;
        // console.log(response.data);
    } catch (error) {
        throw error;
        // console.error(error);
    }
}
