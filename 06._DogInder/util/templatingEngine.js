import fs, { readFile } from 'fs';
//no need for async since we are using readfileSync so we know that it returns the whole path + toString(); and it only does it when the server starts
export function readPage(path) {
    return fs.readFileSync(path).toString();
}

const header = readPage('./public/components/header/header.html');
const footer = readPage('./public/components/footer/footer.html')

export function constructPage(pageContent, options={}) {
    return header
        .replace('$NAV_TITLE$', options.title || 'DogInder')
        .replace('$CSS_LINKS$', options.cssLinks || '')
        + pageContent
        + footer;
}

