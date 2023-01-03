const videoCardContainer = document.querySelector('.video-container');

let api_key = "AIzaSyBkYGbQb-CfjkSDL1wx6i8WOkDFNZDgiRo";
let video_http = "GET https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "GET https://www.googleapis.com/youtube/v3/videos?"

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 1,
    regionCode: 'IN'
}))
.then(res => res.json())
.then(data => {
    console.log(data);
    //data.items.forEach(item => {
       // getChannelIcon(item);
})
//})