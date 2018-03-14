let list = require('../02. List-add-delete');
let expect = require('chai').expect;

describe('Add/Delete', function () {
    let myList = list();
    beforeEach(function () {
        myList = list();
    })

    describe('Tests', function () {

        it("Test empty list", function () {
            expect(myList.toString()).to.equal('');
        });

        it('Should add item correctly', function () {
            myList.add(10);
            expect(myList.toString()).to.equal('10');
        });
        it('Should work with multiple adding invocations', function () {
            myList.add(10);
            myList.add(20);
            myList.add(30);
            expect(myList.toString()).to.equal('10, 20, 30');
        });

        it('Should return undefined for incorrect input params', function () {
            let result = myList.delete('invalid');
            expect(result).to.be.undefined;
        });
        it('Should return undefined for empty list', function () {
            let result = myList.delete(0);
            expect(result).to.be.undefined;
        });
        it('Should return undefined for fraction input params', function () {
            let result = myList.delete(5.5);
            expect(result).to.be.undefined;
        });
        it('Should not delete items for fraction input params', function () {
            myList.add(10);
            myList.delete(5.5);
            expect(myList.toString()).to.equal('10');
        });
        it('Should return undefined for <0 index param', function () {
            let result = myList.delete(-5);
            expect(result).to.be.undefined;
        });
        it('Should return undefined for >list.length index param', function () {
            myList.add(10); // list.length: 1
            let result = myList.delete(2);  // undefined
            expect(result).to.be.undefined;
        });
        it('Should delete values correctly for correct index param', function () {
            myList.add(10); // list.length: 1
            myList.add(20); // list.length: 2
            myList.delete(1); // remove 20
            expect(myList.toString()).to.equal('10');
        });
        it('Should delete the correct item for correct index param', function () {
            myList.add(10); // list.length: 1
            myList.add(20); // list.length: 2
            expect(myList.delete(1)).to.equal(20);
        });
    })
});