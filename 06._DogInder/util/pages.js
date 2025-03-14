import fs from 'fs';

const header = fs.readFileSync('./public/components/header/header.html').toString();
const footer = fs.readFileSync('./public/components/footer/footer.html').toString();

const frontpage = fs.readFileSync('./public/frontpage/frontpage.html').toString();
const matches = fs.readFileSync('./public/matches/matches.html').toString();

export const frontpagePage = header + frontpage + footer;
export const matchesPage = header + matches + footer;