var roboto = require('roboto');
var fs = require('fs')
var domain = process.argv[2];

var html_strip = require('htmlstrip-native').html_strip;
var stripOptions = {
    include_script: false,
    include_style: false,
    compact_whitespace: true
};

var domainCrawler = new roboto.Crawler({
    startUrls: [
        'http://' + domain,
    ],
    allowedDomains: [
        domain
    ],
    blacklist: []
});

function extractEmails(text) {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

domainCrawler.parseField('url', function(response, $) {
    return response.url;
});

domainCrawler.parseField('emails_found', function(response, $) {
    var html = $('body').html();
    var striped = html_strip(html, stripOptions);
    var emails = extractEmails(striped);
    if (emails) {
        fs.appendFile(domain + '.txt', emails + '\r\n', function(err) {
            if (err) throw err;
            console.log('Emails saved to file!');
        });
    }
    return emails;
});

domainCrawler.parseField('title', function(response, $) {
    return $('head title').text();
});

domainCrawler.parseField('server', function(response, $) {
    return response.headers['server'] || '';
});

domainCrawler.crawl();