import {Request, Response, NextFunction} from 'express';
// import puppeteer from 'puppeteer';
import axios from 'axios';
import cheerio from 'cheerio';

export default async function(req: Request, res: Response, next: NextFunction) {
    try {
        await SearchHelper();
        const result = {
            title : 'search'
        };
        res.send(result);
    } catch (error) {
        return next(error);
    }
}

const HEADERS = {
    // 'application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'
    'Content-Type': 'application/x-www-form-urlencoded',
    'Connection': 'keep-alive',
    // http://www.browser-info.net/useragents
    // 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
};

const METHOD = {
    POST: 'post',
    GET: 'get'
};

const SEARCH_TYPE = {
    IMAGES: 'isch',
    VIDEOS: 'vid',
    NEWS: 'nws',
    BOOKS: 'bks',
    SHOPPING: 'shop'
}

const QUERY_TBM = 'tbm';
const SEARCH_URL = 'https://www.google.com/search?';
const DEFAULT_KEY = 'paperdev.github.io';
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36';

const SearchHelper = async (key: string = DEFAULT_KEY) => {
    try {
        let url: string = SEARCH_URL + 'q=' + key;
        if (DEFAULT_KEY !== key) {
            url = SEARCH_URL + QUERY_TBM + '=' + SEARCH_TYPE.IMAGES + '&q=' + key;
        }
        
        /* 
        const options = {
            args: [USER_AGENT, '--no-sandbox']
        };
        const browser = await puppeteer.launch(options);
        const page = await browser.newPage();
        await page.goto(url);
        const result = await page.evaluate(() => {
            let itemList = document.querySelectorAll('.item');
            return itemList;
        });
        await page.close();
        */ 

        const result = await axios.get(url);
        const _$ = await cheerio.load(result.data);

        console.log(' ===== result ===== ');
        // console.log(result);
        
        console.log(' ===== _$ ===== ');
        console.log(_$);
    } catch (err) {
        console.error(err);
    }
}