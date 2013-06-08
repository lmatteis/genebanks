function (head, req) {
    provides("html", function () {
        var Mustache = require('views/lib/mustache');

        var querySkip = parseInt((req.query.skip || 0), 10);
        // 50 per page
        var skip = querySkip + parseInt(50, 10);

        var data = {
            skip: skip,
            subjectPage: true,
            subjects: []
        };

        var row;
        while (row = getRow()) {
            data.subjects.push({
                key: row.key,
                value: row.value
            });
        }

        var html = Mustache.to_html(this.templates.index, data);
        send(html);
    });
}
