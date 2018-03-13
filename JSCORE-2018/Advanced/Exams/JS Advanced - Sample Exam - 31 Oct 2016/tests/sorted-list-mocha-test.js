const SortedList = require('../02. Sorted List');
const expect = require('chai').expect;

describe('Sorted List', function() {
    let sortedList;
    beforeEach(() => {sortedList = new SortedList()});

    it("should be empty in the beggining", function () {
        expect(sortedList.size).to.equal(0)
    });

    it("should successfully add elements", function () {
        sortedList.add(5);
        sortedList.add(10);
        expect(sortedList.size).to.equal(2)
    });

    it("should successfully remove elements", function () {
        sortedList.add(5);
        sortedList.add(10);
        sortedList.add(15);
        sortedList.remove(1)
        expect(sortedList.size).to.equal(2)
    });

    it("Should throw an error on attempt to remove negative index", function () {
        sortedList.add(5);
        expect(function () {sortedList.remove(-3)}).to.throw("Index was outside the bounds of the collection")
        expect(sortedList.size).to.equal(1)
    });

    it("Should throw an error on attempt to get when list is empty", function () {
        sortedList.add(5)
        sortedList.remove(0)
        expect(function() {sortedList.get(0)}).to.throw("Collection is empty")
    });

    it("Should have property add", function () {
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true)
    })



})