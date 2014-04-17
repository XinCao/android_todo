function getBodyFooter(id) {
    var bodyFooter =
            '<div class="container">' +
            '<p class="muted credit">版权归个人所有<a href="mailto:jingxin191314@foxmail.com">e-mail:<%=author%></a></p>' +
            '</div>'
    ;
    var data = {
        author : 'caoxin'
    };
    var render = template.compile(bodyFooter);
    var html = render(data);
    document.getElementById(id).innerHTML = html;
}