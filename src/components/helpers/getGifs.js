 export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6LpzNY9bcNmDd8vkTlKSzctx6Xww2ZMO&q=${category}&limit=10`;

    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(element => {
        return {
            id: element.id,
            title: element.title,
            url: element.images.downsized_large.url
        }
    })
    
    return gifs;
}