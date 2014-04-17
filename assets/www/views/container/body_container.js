/**
 * 这个内容，来自于用户，基础界面
 * 
 * @param  id
 * @param  data
 * @returns
 */
function getBodyContainer(id, data) {
    var bodyContainer =
            '<div class="row-fluid">' +
            '<h1><%= content %></h1>' +
            '</div>'
            ;
    if (data === null) { // 仅仅用于测试
        data = {
            content: 'content'
        };
    }
    var render = template.compile(bodyContainer);
    var html = render(data);
    document.getElementById(id).innerHTML = html;
    $('#' + id).addClass("container");
}