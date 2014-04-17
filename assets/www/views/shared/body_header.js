function getBodyHeader(id, page) {
    var bodyHeader =
            '<div class="navbar-inner">' +
            '<div class="container">' +
            '<button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '</button>' +
            '<a class="brand" href="#"><%= project_name %></a>' +
            '<div class="nav-collapse collapse">' +
            '<ul class="nav">' +
            '<% for (var i = 0; i < list.length; i ++) { %>' +
            '<li id="<%=list[i][2]%>"><a href=<%= list[i][0] %>><%= list[i][1] %></a></li>' +
            '<% } %>' +
            '</ul>' +
            '</div>' +
            '</div>' +
            '</div>';
    var data = {
        project_name: 'Todo',
        page: page,
        list: [
            ['file:///android_asset/www/views/login.html', 'Home', 'home'],
            ['file:///android_asset/www/views/login.html', 'About', 'about'],
            ['file:///android_asset/www/views/login.html', 'Contact', 'contact']
        ]
    };
    var render = template.compile(bodyHeader);
    var html = render(data);
    document.getElementById(id).innerHTML = html;
    $('#' + page).addClass("active");
    $('#' + id).addClass("navbar navbar-inverse navbar-fixed-top");
}