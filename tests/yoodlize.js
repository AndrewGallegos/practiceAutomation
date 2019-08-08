var page
module.exports = {
    before: browser => {
        browser.useXpath()
        page = browser.page.yoodlize()
    },
    beforeEach: browser => {
        page.navigate('http://alpha.yoodlize.com')
    },
    after: browser => {
        page.end()
    },
    'QAE-52 Navigate Categories': browser => {
        var terms = ['Recreational Vehicles', 'Outdoor Gear', 'Electronics', 'Party & Wedding Equipment',
                    'Tools', 'Clothing', 'Home and Kitchen', 'Toys and Games', 'Lawn and Garden','Sporting Goods',
                    'DVDs & Video Games', 'Venues', 'Local Experts', 'Experiences', 'Music',
                    'Business Equipment', 'Misc']
        for(var i = 0; i < 16; i++) {
            var element = '(//*[@sectionheader])['
            element = element.concat(i+1,']/a/div')
            page
                .click(element)
                .waitForElementVisible('@searchTag', time=15000)
                .expect.element('@searchTag').text.to.contain(terms[i])
            page.api.back()
        }
    },
    'QAE-53 Search for an Item': browser => {
        page
            .setValue('@searchBar', ['Rubix Cube', browser.Keys.ENTER])
            .expect.element('@searchTag').text.to.contain('Rubix Cube')
        page.expect.element('@searchAgain').value.to.equal('Rubix Cube')
        page
            .click('@firstResult')
            .waitForElementVisible('@rightArrow', time=15000)
            .click('@rightArrow')
            .expect.element('@listingImage').to.have.attribute('src')
                .which.contains('a4d3')
        page
            .click('@leftArrow')
            .expect.element('@listingImage').to.have.attribute('src')
                .which.contains('77ee')
        page.expect.element('@listingTitle').text.to.contain('Rubix Cube')
        page.expect.element('@listingPrice').text.to.contain('$22')
    }
}