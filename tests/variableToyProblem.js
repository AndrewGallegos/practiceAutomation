
/**
* Clicks an element whose text equals the `text` parameter - element must have a unique text value.
* @param {object} browser - `browser`/`client` in use
* @param {string} text - the text of the element that should be clicked
*/
var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}
module.exports = {
    after: browser => {
        browser.end()
    },
    // 'Selectors': browser => {
    //     var searchBar = 'input.enter-location__input'
    //     var submitButton = 'button.enter-location__submit'
    //     var resultingCity = 'h3.current-weather__location'
    //     browser
    //         .url('https://devmountain-qa.github.io/weatherman/build/index.html')
    //         .setValue(searchBar, 'San Diego')
    //         .click(submitButton)
    //         .waitForElementVisible(resultingCity)
    //         .verify.containsText(resultingCity, 'San Diego')
    //},
    'Test data': browser => {
        var newEmployeeName = 'Ronald McDonald'
        var newEmployeePhone = '6665554444'
        var newEmployeeTitle = 'Big Chungus'
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementVisible('li[name="addEmployee"]')
            .click('li[name="addEmployee"]')
            .click('li[name="employee11"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', newEmployeeName)
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', newEmployeePhone)
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', newEmployeeTitle)
            .click('#saveBtn')
            .click('li[name="employee1"]')
            .expect.element('input[name="nameEntry"]').value.not.to.equal(newEmployeeName)
        browser
            .click('li[name="employee11"]')
            .expect.element('input[name="nameEntry"]').value.to.equal(newEmployeeName)
        browser.expect.element('input[name="phoneEntry"]').value.to.equal(newEmployeePhone)
        browser.expect.element('input[name="titleEntry"]').value.to.equal(newEmployeeTitle)
    },
    'Function Test': browser => {
        clickByText(browser, "Bernice Ortiz")
        browser.pause(5000)
    },
    'Callback Test': browser => {
        clickByText(browser, 'Lois Brewer')
        browser.getText('#employeeID', function (result) {
            let idNumber = Number(result.value.slice(3))
            browser
                .verify.ok(idNumber > 0, `The ID (${idNumber}) is a positive number.`)
                .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)
        })
    }
}