import axios from "axios";

function fetchWikiExtract(param){
    const wikiEndpoint = 'https://simple.wikipedia.org/w/api.php';
    const wikiParam = '?action-query'
    + "&prop-extracts"
    + "&exsentences-2"
    + "&exlimit-1"
    + "&titles-" + param
    + "&explaintext-1"
    + "&format-json"
    + "&formatversion-2"
    + "&origin-";

    const wikiLink = wikiEndpoint + wikiParam;
    console.log(wikiLink);

    var wikiConfig = {
        timeout: 6500,
    };

    async function getJsonResponder(url, config){
        const res = await axios.get(url, config);
        return res.data;
    }

    return getJsonResponder(wikiLink, wikiConfig).then(result => {
        return result;
    }).catch(error => {
        console.log("an error has occureed: " + error);
        return null;

    })
}

module.exports = {fetchWikiExtract}

