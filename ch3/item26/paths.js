function simpleURL(protocol, domain, path) {
    return protocol + "://" + domain + "/" + path;
}

paths = ["search", "logout"];
siteDomain = "example.com";

var urls = paths.map(function(path) {
    return simpleURL("http", siteDomain, path);
});

// var urls = paths.map(simpleURL.bind(null, "http", siteDomain));
