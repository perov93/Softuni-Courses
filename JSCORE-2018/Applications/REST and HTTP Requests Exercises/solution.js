// https://messenger-1de60.firebaseio.com/


function attachEvents() {
    $('#submit').click(send);
    $('#refresh').click(refresh);

    let baseServiceUrl = 'https://messenger-1de60.firebaseio.com/messenger/.json';

    function send() {
        let messageJson = {
            "author": $('#author').val(),
            "content": $('#content').val(),
            "timestamp": Date.now()
        };
        if($('#author').val() === '' || $('#content').val() === ''){
            return
        }
        $('#author').val('');
        $('#content').val('');
        let sendMessageReq = {
            url: baseServiceUrl,
            method: 'POST',
            data: JSON.stringify(messageJson),
            success: refresh
        }
        $('#error').text('Sent').css('background-color', 'green');
        $.ajax(sendMessageReq)
    };

    function refresh() {
        $.get(baseServiceUrl).then(displayMessages).catch(displayError)
    };

    function displayMessages(messages) {
        let output = $('#messages');
        let messageStr = '';

        for (let key in messages) {
            messageStr += `${messages[key]["author"]}: ${messages[key]["content"]}\n`;
        }
        output.text(messageStr)

    };

    function displayError(err) {
        $('#error').text('Error').css('background-color', 'red');
    }
}
 