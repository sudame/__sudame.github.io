const cheerio = require('cheerio');
const fs = require('fs');

const blogSrc = './blog/';
const $index = cheerio.load(fs.readFileSync('./blog/index.html', 'utf-8'), { decodeEntities: false });
$index('.content').text('');

fs.readdirSync(`${blogSrc}/src/contents`).sort((a,b) => {
    a = a.toString().toLowerCase();
    b = b.toString().toLowerCase();
    if(a > b) return -1;
    else if(a < b) return 1;
    else return 0;
}).forEach((p) => {
if (p.match(/.*.html/) && !p.match(/_.*/)) {
        const $global = cheerio.load(fs.readFileSync('./blog/src/global/global.html', 'utf-8'), { decodeEntities: false });
        const c = fs.readFileSync(`${blogSrc}/src/contents/${p}`, 'utf-8');
        const s = fs.statSync(`${blogSrc}/src/contents/${p}`);
        const $contents = cheerio.load(c, { decodeEntities: false });
        if ($contents('style')) {
            $contents('style').each((i, v) => {
                $global('head').append(v);
            })
        }
        if ($contents('title')) {
            $global('meta[property="og:site_name"]').attr('content', $contents('title').text());
            $global('meta[property="og:title"]').attr('content', $contents('title').text());
            $global('meta[property="og:url"]').attr('content', `http://sudame.net/blog/${p}`);
            $global('title').text($contents('title').text());
            $contents('.content').prepend('<div class="share-buttons"><a class="twitter-button" href="#">Twitterで共有</a></div>');
            $contents('.content').append('<div class="share-buttons"><a class="twitter-button" href="#">Twitterで共有</a></div>');
        };
        $global('.content').append($contents('.content').html());
        fs.writeFileSync(blogSrc + p, $global.html());

        $index('.content').append(`
        <div class="article-card">
            <div class="article-card__title">
                <h3>${$contents('title').text()}</h3>
            </div>
            <div class="article-card__date">
                <p>${$contents('meta[property="date"]').attr('content') || ''}</p>
            </div>
            <div class="article-card__content">
                <p>
                    ${$contents('.content section:not(.sub) p').text().slice(0, 150)}
                </p>
            </div>
            <div class="article-card__more">
                <a href="http://sudame.net/blog/${p}">
                    記事を読む
                </a>
            </div>
        </div>
        `);

        fs.writeFileSync('./blog/index.html', $index.html());
    }
});