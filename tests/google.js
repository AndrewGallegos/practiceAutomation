module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    after: browser => {
        browser.end()
    },
    'Google Search Enter Test': browser => {
        browser
            .setValue('input[name=q]', ['DevMountain', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .assert.containsText('#res', 'DevMountain')
    },
    'Google Search Click Test': browser => {
        browser
            .setValue('input[name=q]', ['DevMountain'])
            .click('div.FPdoLc input[name=btnK]')
            .assert.containsText('#res', 'DevMountain')
    },
    'Feeling Lucky Test': browser => {
        browser
            .waitForElementVisible('input[name=q]')
            .setValue('input[name=q]', ['DevMountain'])
            .waitForElementVisible('input.RNmpXc')
            .click('input.RNmpXc')
            .pause(100)
            .assert.urlContains('devmountain')
    }
}