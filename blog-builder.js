const cheerio = require('cheerio');
const fs = require('fs');

const $global = cheerio.load(fs.readFileSync('./blog/src/global/global.html', 'utf-8'), {
    decodeEntities: false
});

const blogSrc = './blog/';
fs.readdirSync(`${blogSrc}/src/contents`).forEach((p) => {
    if (p.match(/.*.html/)) {
        const c = fs.readFileSync(`${blogSrc}/src/contents/${p}`, 'utf-8');
        const $contents = cheerio.load(c, {
            decodeEntities: false
        });
        if ($contents('style')) {
            $contents('style').each((i, v) => {
                $global('head').append(v);
            })
        }
        if($contents('title')) {
            $global('meta[property="og:site_name"]').attr('content', $contents('title').text());
            $global('meta[property="og:title"]').attr('content', $contents('title').text());
            $global('meta[property="og:url"]').attr('content', `http://sudame.net/blog/${p}`);
            $global('title').text($contents('title').text());
            $contents('.content').prepend('<div class="share-buttons"><a class="twitter-button" href="#">Twitterで共有</a></div>');
            $contents('.content').append('<div class="share-buttons"><a class="twitter-button" href="#">Twitterで共有</a></div>');
        };
        $global('.content').append($contents('.content').html());
        fs.writeFileSync(blogSrc + p, $global.html());
    }
});