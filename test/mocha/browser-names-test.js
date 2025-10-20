'use strict';
const expect = require('chai').expect;
const lambdatestProvider = require('../../');

describe('Browser names', function () {

    before(function () {
        this.timeout(20000);

        return lambdatestProvider.init();
    });


    it('Should return list of common browsers and devices', function () {
        return lambdatestProvider.getBrowserList().then(function (list) {

            expect(list).to.be.an('array');
            expect(list.length).to.be.greaterThan(0);
            // Check that at least some Chrome browsers are present
            const hasChrome = list.some(browser => browser.includes('Chrome'));

            expect(hasChrome).to.be.true;
        });
    });
});
