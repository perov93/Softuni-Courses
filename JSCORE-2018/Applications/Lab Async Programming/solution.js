function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_rkdg3HG9M/';
    const USERNAME = 'pesho';
    const PASSWORD = 'p';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {'Authorization': 'Basic ' + BASE_64};
    let posts = {};

    $('#btnLoadPosts').on("click", LoadPosts);
    $('#btnViewPost').on("click", LoadComments);

    function LoadPosts() {
        $.ajax({
            method: 'GET',
            url: URL + 'posts',
            headers: AUTH
        }).then(function (res) {
            $('#posts').empty();
            for (let post of res) {
                $('#posts').append(
                    $(`<option value="${post._id}">${post.title}</option>`)
                );
                posts[post._id] = post.body;
            }
        }).catch(displayError)
    }

    function LoadComments(){
        let postId = $('#posts').val();
        let postTitle = $('#posts').find('option:selected').text();
        $('#post-title').text(postTitle);
        $('#post-body').text(posts[postId]);
        $.ajax({
            method: 'GET',
            url: URL +`comments/?query={"postId":"${postId}"}`,
            headers: AUTH
        }).then(function(res){
            $('#post-comments').empty();
            for (let com of res) {
                $('#post-comments').append(
                    $(`<li>${com.text}</li>`)
                )
            }
        }).catch(displayError)
    }

    function displayError(err) {
        let errorDiv = $("<div>").text("Error: " +
            err.status + ' (' + err.statusText + ')');
        $(document.body).prepend(errorDiv);
        setTimeout(function() {
            $(errorDiv).fadeOut(function() {
                $(errorDiv).remove();
            });
        }, 3000);
    }
}