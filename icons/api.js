
let clientID = "ghf1v41n7obt2ria2llsyt5jcsw0nv";
let clientSecret = "8lvp8iw8oa4c64cscabbgv2u8247d0";

function getTwitchAuthorization() {
  let url = `https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=client_credentials`;

    return fetch(url, {
    method: "POST",
    })
    .then((res) => res.json())
    .then((data) => {
        return data;
    });
}

function handleAuthorization(data) {
    let { access_token, expires_in, token_type } = data;
    document.write(`${token_type} ${access_token}`);
}
getTwitchAuthorization();

async function isOnline(username) {
    const endpoint = "https://api.twitch.tv/helix/streams?user_login="+username;

    let authorizationObject = await getTwitchAuthorization();
    let { access_token, expires_in, token_type } = authorizationObject;

    //token_type first letter must be uppercase    
    token_type =
    token_type.substring(0, 1).toUpperCase() +
    token_type.substring(1, token_type.length);

    let authorization = `${token_type} ${access_token}`;

    let headers = {
    authorization,
    "Client-Id": clientID,
    };

    fetch(endpoint, {
    headers,
    })
    .then((res) => res.json())
    .then((data) => renderStreams(data,username))
    // .then((type) => console.log(type));

}

// function renderStreams(data) {
//     document.body.innerHTML = `
// ${JSON.stringify(data)}
// `;
// }
function renderStreams(data,username) {
    
    let status = "offline";
    let playedgame = "";
    
    try{
        let { data: type } = data;
        let { type: live } = type[0];
        let { data: game_name } = data;
        let { game_name: game } = game_name[0];
        status = live
        playedgame = game;
    }catch{

    }
        
        //status = live;
    
    console.log(username+": "+status);
    
    if(status=="live"){
    console.log(username+" is playing "+ playedgame);
    let streamsContainer = document.querySelector("#"+username);
    let span = streamsContainer.lastChild;
    let img = streamsContainer.firstChild;
    let hover = document.querySelector('[hover="'+username+'"]');
        span.innerHTML = '<span class="badge badge-danger">LIVE</span>';
        hover.innerHTML = "Streaming "+playedgame;
        img.classList.add("active");
    }
    
    // let { data: type} = data;
    // let { type: live} = type[0];
    // console.log(live);

    // let status = "test";
    // try{
    //     let { data: type } = data;
    //     let { type: live} = type[0];
    //     status = live;
    // }catch{
    //     status = "offline";
    // }

    // console.log(status);
}
// function renderStreams(data) {
//     let { data: streams } = data;
//     let streamsContainer = document.querySelector("div.streams");

//     streams.forEach((stream) => {
//     let { thumbnail_url: thumbnail, title, viewer_count } = stream;
//     let hdThumbnail = thumbnail
//         .replace("{width}", "1280")
//         .replace("{height}", "720");
//     streamsContainer.innerHTML += `
    
//    <div class="stream-container">
//         <img src="${hdThumbnail}" />
//         <h2>${title}</h2>
//         <p>
//             <svg
//             viewBox="0 0 15 15"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             width="15"
//             height="15"
//             >
//             <path
//                 d="M.5 7.5l-.464-.186a.5.5 0 000 .372L.5 7.5zm14 0l.464.186a.5.5 0 000-.372L14.5 7.5zm-7 4.5c-2.314 0-3.939-1.152-5.003-2.334a9.368 9.368 0 01-1.449-2.164 5.065 5.065 0 01-.08-.18l-.004-.007v-.001L.5 7.5l-.464.186v.002l.003.004a2.107 2.107 0 00.026.063l.078.173a10.368 10.368 0 001.61 2.406C2.94 11.652 4.814 13 7.5 13v-1zm-7-4.5l.464.186.004-.008a2.62 2.62 0 01.08-.18 9.368 9.368 0 011.449-2.164C3.56 4.152 5.186 3 7.5 3V2C4.814 2 2.939 3.348 1.753 4.666a10.367 10.367 0 00-1.61 2.406 6.05 6.05 0 00-.104.236l-.002.004v.001H.035L.5 7.5zm7-4.5c2.314 0 3.939 1.152 5.003 2.334a9.37 9.37 0 011.449 2.164 4.705 4.705 0 01.08.18l.004.007v.001L14.5 7.5l.464-.186v-.002l-.003-.004a.656.656 0 00-.026-.063 9.094 9.094 0 00-.39-.773 10.365 10.365 0 00-1.298-1.806C12.06 3.348 10.186 2 7.5 2v1zm7 4.5a68.887 68.887 0 01-.464-.186l-.003.008-.015.035-.066.145a9.37 9.37 0 01-1.449 2.164C11.44 10.848 9.814 12 7.5 12v1c2.686 0 4.561-1.348 5.747-2.665a10.366 10.366 0 001.61-2.407 6.164 6.164 0 00.104-.236l.002-.004v-.001h.001L14.5 7.5zM7.5 9A1.5 1.5 0 016 7.5H5A2.5 2.5 0 007.5 10V9zM9 7.5A1.5 1.5 0 017.5 9v1A2.5 2.5 0 0010 7.5H9zM7.5 6A1.5 1.5 0 019 7.5h1A2.5 2.5 0 007.5 5v1zm0-1A2.5 2.5 0 005 7.5h1A1.5 1.5 0 017.5 6V5z"
//                 fill="currentColor"
//             ></path>
//             </svg>
//             ${viewer_count
//                 .toString()
//                 .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} watching
//         </p>
//     </div>

//     `;
//     });
// }

function arrayIsEmpty(array) {
    //If it's not an array, return FALSE.
    if (!Array.isArray(array)) {
        console.log("FALSE");
    }
    //If it is an array, check its length property
    if (array.length == 0) {
        //Return TRUE if the array is empty
        console.log("TRUE");
    }
}