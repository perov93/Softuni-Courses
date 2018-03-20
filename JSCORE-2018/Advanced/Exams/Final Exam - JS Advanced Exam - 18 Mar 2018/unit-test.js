const PaymentPackage = require('./02.problem');
const expect = require('chai').expect;

describe("Payment Package…", function() {

    // First to test mocha starts
    /*    it("first test", function() {
            expect(1).to.equal(1);
        });*/

    it("test1", function () {
        let payPackage = new PaymentPackage('HR Services', 20);
        expect(payPackage).to.be.equal(payPackage);
    });
    it("test2", function () {
        let payPackage = new PaymentPackage('HR Services', 20);
        expect(payPackage.name).to.be.equal('HR Services');
    });
    it("test3", function () {
        let payPackage = new PaymentPackage('HR Services', 20);
        payPackage.name = 'Str';
        expect(payPackage.name).to.be.equal('Str');
    });
    it("test4", function () {
        let payPackage = new PaymentPackage('HR Services', 20);
        expect(payPackage.value).to.be.equal(20);
    });
    it("test5", function () {
        let payPackage = new PaymentPackage('HR Services', 20);
        payPackage.value = 40;
        expect(payPackage.value).to.be.equal(40);
    });
    it("test6", function () {
        let payPackage = new PaymentPackage('HR Services', 20);
        expect(payPackage.VAT).to.be.equal(20);
    });
    it("test7", function () {
        let payPackage = new PaymentPackage('HR Services', 20);
        payPackage.VAT = 40;
        expect(payPackage.VAT).to.be.equal(40);
    });
    it("test8", function () {
        let payPackage = new PaymentPackage('HR Services', 20);
        expect(payPackage.active).to.be.equal(true);
    });
    it("test9", function () {
        let payPackage = new PaymentPackage('HR Services', 20);
        payPackage.active = false;
        expect(payPackage.active).to.be.equal(false);
    });


    it("test10", function () {
        let payPackage = new PaymentPackage('HR Services', 2000);
        expect(payPackage.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 2000\n- Value (VAT' +
            ' 20%): 2400');
    });
    it("test11", function () {
        let payPackage = new PaymentPackage('HR Services', 2000);
        payPackage.active = false;
        expect(payPackage.toString()).to.equal('Package: HR Services (inactive)\n- Value (excl. VAT): 2000\n-' +
            ' Value (VAT 20%): 2400');
    });
    it("throw an error1", function () {
        expect(() => {
            let payPackage = new PaymentPackage('HR Services');
        }).to.throw(Error, 'Value must be a non-negative number');
    });
    it("throw an error2", function () {
        expect(() => {
            let payPackage = new PaymentPackage('HR Services', 'ayay');
        }).to.throw(Error, 'Value must be a non-negative number');
    });
    it("throw an error3", function () {
        expect(() => {
            let payPackage = new PaymentPackage('HR Services', -10);
        }).to.throw(Error, 'Value must be a non-negative number');
    });
    it("throw an error4", function () {
        expect(() => {
            let payPackage = new PaymentPackage('HR Services', -1);
        }).to.throw(Error, 'Value must be a non-negative number');
    });
    it("not throw an error5", function () {
        let hrPack = new PaymentPackage('HR Services', 1);
        expect(hrPack.value).to.be.equal(1)
    });
    it("throw an error", function () {
        expect(() => {
            let payPackage = new PaymentPackage('', 10);
        }).to.throw(Error, 'Name must be a non-empty string');
    });
    it("throw an error6", function () {
        expect(() => {
            let payPackage = new PaymentPackage(10);
        }).to.throw(Error, 'Name must be a non-empty string');
    });
});