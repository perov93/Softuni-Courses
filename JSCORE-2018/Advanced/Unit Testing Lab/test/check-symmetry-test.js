let expect = require("chai").expect;
let isSymmetric = require("../05. Check Symmetry").isSymmetric;

describe("Check Symmetry", () => {
    describe("General tests", () => {
        it("should be a function", () => {
            "use strict"
            expect (typeof isSymmetric).to.equal('function')
        })

        it("should return true for [1,2,3,3,2,1]", function () {
            let symmetric = isSymmetric([1,2,3,3,2,1])
            expect(symmetric).to.be.equal(true)
        })

        it("should return false for [1,2,3,4,2,1]", function () {
            let symmetric = isSymmetric([1,2,3,4,2,1]);
            expect(symmetric).to.be.equal(false);
        })

        it("should return true for [-1, 2, -1]", function () {
            let symmetric = isSymmetric([-1, 2, -1]);
            expect(symmetric).to.be.equal(true);
        })

        it("should return false for [-1, 2, 1]", function () {
            let symmetric = isSymmetric([-1, 2, 1]);
            expect(symmetric).to.be.equal(false);
        })

        it('Returns true for symmetric array with different types of values', function () {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi', 5])).to.equal(true);
        })

        it('Returns false for non-symmetric array with different types of values', function () {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{x:5},'hi', 5])).to.equal(false);
        })

        it('Returns not an array', function () {
            expect(isSymmetric(1,2,2,1)).to.be.equal(false)
        })

        it('Should return false for [1,2]', function () {
            expect(isSymmetric([1,2])).to.be.equal(false)
        })
    })
});