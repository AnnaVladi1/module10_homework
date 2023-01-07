const wsUri = "wss://echo-ws-service.herokuapp.com/";
let input = document.querySelector('input[name="message"]'),
    websocket,
    messageWrap = document.querySelector('.main');


const template = (message, my = false) => {
    return `<div class="message ${my ? 'self' : ''}">${message}</div>`
}

const geoLocation = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            let mapLink = document.createElement('a'),
            wrap = document.createElement('div');
            wrap.classList.add('message', 'self');
            mapLink.href = `https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`;
            mapLink.target = '_blank';
            mapLink.textContent = 'Гео-локация';
            wrap.append(mapLink);
            messageWrap.append(wrap);
        });
    }
}

const request = () => {
    messageWrap.insertAdjacentHTML('beforeend', template(input.value, true));

    websocket = new WebSocket(wsUri);

    websocket.onmessage = function (evt) {
        messageWrap.insertAdjacentHTML('beforeend', template(evt.data));
        websocket.close();
        websocket = null;
    };


    websocket.onopen = function() {
        websocket.send(input.value);
    }


}