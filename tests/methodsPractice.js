var math = {
    add: (num1, num2) => {
        return num1+num2
    },
    subtract: (num1, num2) => {
        return num1-num2
    },
    multiply: (num1, num2) => {
        return num1*num2
    },
    divide: (num1, num2) => {
        return num1/num2
    }
}
module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    after: browser => browser.end(),
    'check addition': browser => {
        browser
            .setValue('input[type="text"]', ['1+2', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(math.add(1,2))
    },
    'check subtraction': browser => {
        browser
            .setValue('input[type="text"]', ['32-5', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(math.subtract(32,5))
    },
    'check division': browser => {
        browser
            .setValue('input[type="text"]', ['8/2', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(math.divide(8,2))
    },
    'check multiplication': browser => {
        browser
            .setValue('input[type="text"]', ['2345.3333*2', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(math.multiply(2345.3333,2))
    },
    'check multiplication and addition': browser => {
        browser
            .setValue('input[type="text"]', ['2345.3333*2+50', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(math.add(math.multiply(2345.3333,2), 50))
    },
}