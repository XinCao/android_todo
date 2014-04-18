function getTableHtml(id, describe, table) {
    var tableHtml =
            '<table class="table">' +
            '<tr>' +
            '<% for (var i = 0; i < describe.length; i++) { %>' +
            '<th><%= describe[i]%></th>' +
            '<% } %>' +
            '</tr>' +
            '<% for (var i = 0; i < table.length; i++) { %>' +
            '<tr>' +
            '<% for (var j = 0; j < table[i].length; j++) { %>' +
            '<td><%= table[i][j]%></td>' +
            '<% } %>' +
            '</tr>' +
            '<% } %>' +
            '</table>'
            ;
    var data = {
        describe: describe,
        table: table
    };
    var render = template.compile(tableHtml);
    var html = render(data);
    document.getElementById(id).innerHTML = html;
}

function getPagerHtml(id, previous, next) {
    var pagerHtml =
            '<ul class="pager">' +
            '<li id="previous" class="previous">' +
            '<a href="<%= previous %>">&larr; Older</a>' +
            '</li>' +
            '<li id="next" class="next">' +
            '<a href="<%= next %>">Newer &rarr;</a>' +
            '</li>' +
            '</ul>'
            ;
    var data = {
        previous:previous,
        next:next
    };
    var render = template.compile(pagerHtml);
    var html = render(data);
    document.getElementById(id).innerHTML = html;
    if ( previous === null) {
        $('#' + "previous").addClass("disable");
    } else if (next === null) {
        $('#' + "next").addClass("disable");
    }
}