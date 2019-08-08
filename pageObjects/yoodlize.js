module.exports = {
    url:'https://alpha.yoodlize.com/',
    elements: {
        searchTag: {
            selector:'//*[contains(@class, "sc-jKVCRD jSqgxr")]',
            locateStrategy:'xpath'
        },
        searchBar: {
            selector:'//*[contains(@placeholder, "Search for an item")]',
            locateStrategy:'xpath'
        },
        searchAgain: {
            selector:'//*[@id="keyword-search-input"]',
            locateStrategy:'xpath'
        },
        firstResult: {
            selector:'//*[@class="_1DzFT col-lg-6 col-md-6 col-sm-12 col-xs-12"]',
            locateStrategy:'xpath'
        },
        rightArrow: {
            selector:'//*[@class="sc-cJSrbW ipLTMg sc-TOsTZ eIqKCZ"]',
            locateStrategy:'xpath'
        },
        leftArrow: {
            selector:'//*[@class="sc-eerKOB dlQsDk"]',
            locateStrategy:'xpath'
        },
        listingTitle: {
            selector:'//*[@class="sc-jqCOkK hxTVNb sc-gqjmRU fptSCa"]',
            locateStrategy:'xpath'
        },
        listingPrice: {
            selector:'//*[@class="sc-jqCOkK ibHMcp sc-gqjmRU fptSCa"]',
            locateStrategy:'xpath'
        },
        listingImage: {
            selector:'//*[@class="sc-gHboQg djikKx"]',
            locateStrategy:'xpath'
        }
    }
}