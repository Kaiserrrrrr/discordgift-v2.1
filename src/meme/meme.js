const apiURL = 'https://meme-api.herokuapp.com/gimme';

async function getMeme(){
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    const memeLink = data.preview[2];
    document.querySelector("#meme").src = memeLink;
    document.querySelector("#memeDownload").href = data.url;
}

getMeme()
