function trimSections(header, body, footer) {
    var i, n;
    for (i = 0, n = header.length; i < n; i++) {
        header[i] = header[i].trim();
    }
    for (i = 0, n = body.length; i < n; i++) {
        body[i] = body[i].trim();
    }
    for (i = 0, n = footer.length; i < n; i++) {
        footer[i] = footer[i].trim();
    }
}
