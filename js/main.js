jQuery(function ($) {
    $.ajax({
        url: 'http://f4c0c1f3aa9a506c69b3b6642864b3590fb8f76f@504080.com/api/v1/services/categories',
        method: 'GET',
        beforeSend: function(req) {
            req.setRequestHeader('Authorization', "f4c0c1f3aa9a506c69b3b6642864b3590fb8f76f");
        },
        success: function(data) {
            var categories = data.data;
            for (var i = 0; i < categories.length; i++) {
                $('.services').append('<a href="#"><div class="service"><img src="http:'+ categories[i].icon+'"><span>'+ categories[i].title +'</span></div></a>')
            }
        },
        error: function(error) {
            var errorNumber = error.status,
                a = error.responseJSON,// trying to get error text
                b = a.error,           // trying to get error text
                c = b.description;     // done

            $('.modal-header h3').text('ERROR ' + errorNumber);
            $('.modal-body p').text(c);
            $('#modal-content').modal({
                show: true
            });
        }
    })
});

