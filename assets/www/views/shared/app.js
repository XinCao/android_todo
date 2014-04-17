function requestAjax(url) {
    $.ajax({
        url: url,
        dataType: "json",
        success: successAjax(data),
        error: errorAjax(arg)
    });
}

function successAjax(data) {
    if (data.page === null) {
        data.page = 'home';
    }
    getBodyHeader('body_header', data.page);
    getBodyContainer("body_container", data);
}

function errorAjax(arg) {
    var e = arg;
}