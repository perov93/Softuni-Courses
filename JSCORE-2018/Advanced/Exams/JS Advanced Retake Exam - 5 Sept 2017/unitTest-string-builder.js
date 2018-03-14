const StringBuilder = require('./02.String Builder');
const expect = require('chai').expect;

describe("String Builder tests", function() {
    let str;
    beforeEach(function () {
        str = new StringBuilder('hello');
    });

    it("Should initialize functions", function () {
        expect(Object.getPrototypeOf(str).hasOwnProperty('append')).to.be.equal(true)
        expect(Object.getPrototypeOf(str).hasOwnProperty('prepend')).to.be.equal(true)
        expect(Object.getPrototypeOf(str).hasOwnProperty('insertAt')).to.be.equal(true)
        expect(Object.getPrototypeOf(str).hasOwnProperty('remove')).to.be.equal(true)
        //TODO: Don't Forget
    })

    it("Should return same string", function () {
        expect(str.toString()).to.be.equal('hello')
    })

    it("Should append correctly", function () {
        str.append(' pavel');
        expect(str._stringArray.length).to.be.equal(11)
        expect(str.toString()).to.be.equal('hello pavel')
    })

    it("append error", function () {
        expect(() => {str.append({})}).to.throw(TypeError)
    })

    it("Should prepend correctly", function () {
        str.prepend('!');
        expect(str.toString()).to.be.equal('!hello')
    })

    it("Prepend error", function () {
        expect(() => {str.prepend(10)}).to.throw(TypeError)
    })

    it("Should insertAt work correctly", function () {
        str.insertAt(', pavel', 7)
        expect(str._stringArray.length).to.be.equal(12)
        expect(str.toString()).to.be.equal('hello, pavel')
    })

    it("insertAt error", function () {
        expect(() => {str.insertAt([], 2)}).to.throw(TypeError)
    })

    it("Should remove work correctly", function () {
        str.remove(1, 2)
        expect(str._stringArray.length).to.be.equal(3)
        expect(str.toString()).to.be.equal('hlo')
    })

});