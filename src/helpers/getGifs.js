export const getGifs = async(category) => {
    //encodeURI reemplaza los espacios por %20 o +
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1NPZFzz8l6KfEqT6dqJfN8O9DLZxXYTA&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}