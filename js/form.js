$('.needs-validation').each(function (index) {
    $(this).on('submit', function (e) {
        e.preventDefault();
        $(this).addClass('was-validated');
    });
});