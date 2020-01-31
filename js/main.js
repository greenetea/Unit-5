// SEARCH PROGRAMING

const $search = $('#search');
const $links = $('a');

$search.keyup(function() {
    const $searchValue = $search.val().toLowerCase();

    //loop through a link tags
    $links.each(function() {
        let $captions = $(this).attr('data-title').toLowerCase();
        if ($captions.indexOf($searchValue) > -1) {
            $(this).parent().show();
        } else {
            $(this).parent().hide();
        }
    })
})

// LIGHTBOX PROGRAMING

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false,
})
