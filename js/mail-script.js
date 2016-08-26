$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        var scriptFile;
        if (formID == 'form-order') scriptFile = 'mail-order.php';
        if (formID == 'form-to-buy-now') scriptFile = 'mail-to-buy.php';
        $.ajax({
            type: "POST",
            url: scriptFile,
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки

            },
            error: function (jqXHR, text, error) {}
        });
        return false;
    });
});