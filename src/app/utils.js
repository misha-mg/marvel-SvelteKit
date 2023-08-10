const _apiBase = "https://gateway.marvel.com:443/v1/public/";
const _apiKey = "apikey=c5d6fc8b83116d92ed468ce36bac6c62";

export async function takeOneChar(id) { 
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=e43f19f4472459ad11df2d6d89eaef55`;
  let response = await fetch(url);
  const data = await response.json();
  return data.data.results;
}

export async function takeAllChars(limit = 9) {
    const url = `${_apiBase}characters?limit=${limit}&offset=210&apikey=e43f19f4472459ad11df2d6d89eaef55`;
    let response = await fetch(url);
    const data = await response.json();
    // console.log(data.data.results);
    return data.data.results;
}