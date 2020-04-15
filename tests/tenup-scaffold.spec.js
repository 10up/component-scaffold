/* global beforeAll, describe, test, afterAll */
import puppeteer from 'puppeteer';

const APP = 'https://10up.github.io/tenup-scaffold/demo/';
const width = 1440;
const height = 860;

let page;
let browser;

beforeAll( async () => {

	browser = await puppeteer.launch( {
		headless: true,
	} );

	page = await browser.newPage();

	await page.setViewport( {
		width,
		height
	} );

} );

describe( 'Accessibility Tests', () => {

	test( 'Example Accessibility Test', async () => {

		// Visit the page in headless Chrome
		await page.goto( APP );

	} );

} );

afterAll( () => {
	browser.close();
} );
