var searchWeather = (pageObject, data) => {
    pageObject
        .setValue('@searchBar', [data.search, pageObject.api.Keys.ENTER])
        .waitForElementPresent('@resultCity')
        .expect.element('@resultCity').text.to.equal(data.result)
}
var myData = [
    {search: '84601', result: 'Provo'}, 
    {search: 'San Francisco', result: 'San Francisco'},
    {search: 'London', result: 'London'},
    {search: '84043', result: 'Lehi'},
    {search: '84009', result: 'South Jordan'},
    {search: 'Barcelona', result: 'Barcelona'},
    {search: 'Rock City', result: 'Rock City'}
]
var weatherPage = {}
module.exports = {
    beforeEach: browser => {
        weatherPage = browser.page.weatherman()
        weatherPage.navigate()
    },
    // 'Search for city': browser => {
    //     // weatherPage
    //     //     .setValue('@searchBar', ['San Diego', browser.Keys.ENTER])
    //     //     .waitForElementPresent('@resultCity')
    //     //     .expect.element('@resultCity').text.to.equal('San Diego')
    //     searchWeather(weatherPage, {search: 'San Diego', result: 'San Diego'})
    // },
    // 'Search for zip': browser => {
    //     // weatherPage
    //     //     .setValue('@searchBar', ['95820', browser.Keys.ENTER])
    //     //     .waitForElementPresent('@resultCity')
    //     //     .expect.element('@resultCity').text.to.equal('Sacramento')
    //     searchWeather(weatherPage, {search: '95820', result: 'Sacramento'})
    // },
    // 'Search for blank': browser => {
    //     weatherPage
    //         .setValue('@searchBar', ['', browser.Keys.ENTER])
    //         .waitForElementPresent('@errorMessage')
    //         .expect.element('@errorMessage').text.to.equal('There was a problem fetching the weather!')
    // },
    // 'Search for bad zip': browser => {
    //     weatherPage
    //         .setValue('@searchBar', ['123456789', browser.Keys.ENTER])
    //         .waitForElementPresent('@errorMessage')
    //         .expect.element('@errorMessage').text.to.equal('There was a problem fetching the weather!')
    // },
    // 'Search again': browser => {
    //     weatherPage
    //         .setValue('@searchBar', '95820')
    //         .click('@searchButton')
    //         .waitForElementPresent('@resultCity')
    //         .click('@searchAgainButton')
    //         .expect.element('@searchBar').to.be.visible.before(5000)
    // },
    // 'Try again': browser => {
    //     weatherPage
    //         .setValue('@searchBar', '')
    //         .click('@searchButton')
    //         .waitForElementPresent('@errorMessage')
    //         .click('@tryAgainButton')
    //         .expect.element('@searchBar').to.be.visible.before(5000)
    // },
    // 'arrayTest1': () => searchWeather(weatherPage, myData[0]),
    // 'arrayTest2': () => searchWeather(weatherPage, myData[1]),
    // 'arrayTest3': () => searchWeather(weatherPage, myData[2])
    'Iteration Practice': browser => {
        myData.forEach(data => {
            searchWeather(weatherPage, data)
            weatherPage.navigate()
        })
    }
}