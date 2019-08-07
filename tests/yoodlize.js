module.exports = {
    before: browser => {
        browser.useXpath();
    },
    beforeEach: browser => {
        browser.url('http://alpha.yoodlize.com')
    },
    after: browser => {
        browser.end()
    },
    'QAE-52 Navigate Categories': browser => {
        var terms = ['Recreational Vehicles', 'Outdoor Gear', 'Electronics', 'Party & Wedding Equipment',
                    'Tools', 'Clothing', 'Home and Kitchen', 'Toys and Games', 'Lawn and Garden','Sporting Goods',
                    'DVDs & Video Games', 'Venues', 'Local Experts', 'Experiences', 'Music',
                    'Business Equipment', 'Misc']
        for(var i = 0; i < 16; i++) {
            var element = '(//*[@sectionheader])[last()-'
            element = element.concat(16-i, ']/a/div')
            browser
                .click(element)
                .waitForElementVisible('//*[contains(@class, "sc-jKVCRD jSqgxr")]', time=15000)
                .expect.element('//*[contains(@class, "sc-jKVCRD jSqgxr")]').text.to.contain(terms[i])
            browser.back()
        }
    },
    'QAE-53 Search for an Item': browser => {
        browser
            .setValue('//*[contains(@placeholder, "Search for an item")]', ['Rubix Cube', browser.Keys.ENTER])
            .expect.element('//*[@class="sc-jKVCRD jSqgxr"]').text.to.contain('Rubix Cube')
        browser.expect.element('//*[@id="keyword-search-input"]').value.to.equal('Rubix Cube')
        browser
            .click('(//*[@class="row"])[first()]')
            .click('//*[@class="fa fa-chevron-right"')
            .expect.element('//*[contains(@src, "a4d3"]')
        browser
            .click('//*[@class="fa fa-chevron-left"')
            .expect.element('//*[contains(@src, "77ee"]')
        browser.expect.element('//*[@class="sc-jqCOkK hxTVNb sc-gqjmRU fptSCa"').text.to.contain('Rubix Cube')
        browser.expect.element('//*[@class="sc-jqCOkK ibHMcp sc-gqjmRU fptSCa"').text.to.contain('$22')
    }
}