getFollowerCount();

async function getFollowerCount(){
    url="https://www.instagram.com/reactionchamber/";
    fetch(url,{mode: 'no-cors',headers: {
        'Access-Control-Allow-Origin':'*'
      }}).then(function (response){
        parsed = response.json()
    });
    console.log(parsed);
}