export const config = {
  tests: './tests/codecept.test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.saucedemo.com',
      show: false,
      windowSize: '1200x900'
    }
  },
  name: 'lab8'
}