const fetchExcuse = async (category) => {
    const url = `https://excuser.herokuapp.com/v1/excuse/${category}`
    try {
        const result = await fetch(url);
        const data = await result.json();
        return data;
    } catch (error) {
        return error;
    }
};