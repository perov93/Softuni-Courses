function attachEvents(){
    $('#btnLoadTowns').on('click', function(){
        let towns = $('#towns')
            .val()
            .split(', ')
            .map(t => ({name: t}));
        renderTemplateTowns(towns);
    });

    function renderTemplateTowns(towns){
        let template = $('#towns-template').html();
        let compiled = Handlebars.compile(template);
        let rendered = compiled({
            towns: towns
        });
        $('#root').html(rendered);
    }
}