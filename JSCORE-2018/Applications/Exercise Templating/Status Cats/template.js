$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        // Render cat template
        let template = $('#cat-template').html();
        let compiled = Handlebars.compile(template);
        let rendered = compiled({
            cats: window.cats
        });

        // Attach events
        $('#allCats').html(rendered);
        $('.btn-primary').on('click', function () {
            let clickedBtn = $(this);
            if(clickedBtn.text() === 'Show status code'){
                clickedBtn.text('Hide status code');
            } else {
                clickedBtn.text('Show status code');
            }
            clickedBtn.next('div').toggle();
        });
    }
});