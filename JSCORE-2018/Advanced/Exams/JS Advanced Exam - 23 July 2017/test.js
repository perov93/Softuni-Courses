const Sumator = require('./02.Sumator');
const expect = require('chai').expect;

describe("Sumator Unit Tests", function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator()
    }); // Изчиства данните преди всеки тест

    it("Test if data length is empty", function () {
       expect(sumator.data.length).to.be.equal(0)
    });

    describe("add func tests", function () {
        it("add only nums", function () {
            sumator.add(5)
            sumator.add(5)
            expect(sumator.toString()).to.be.equal('5, 5')
        });

        it("add only strings", function () {
            sumator.add('marieta')
            sumator.add('pavel')
            expect(sumator.toString()).to.be.equal('marieta, pavel')
        });

        it("add only obj", function () {
            sumator.add({name: 'pavel'})
            sumator.add({})
            expect(sumator.toString()).to.be.equal('[object Object], [object Object]')
        });

        it("add only strings", function () {
            sumator.add({})
            sumator.add(2)
            sumator.add('pavel')
            expect(sumator.toString()).to.be.equal('[object Object], 2, pavel')
        });
    });

    describe("Test sum nums", function () {
        it("sum only numbers", function () {
            sumator.add(5)
            sumator.add(3)
            expect(sumator.sumNums()).to.be.equal(8)
        });

        it("sum only strings", function () {
            sumator.add('pavel')
            sumator.add('marieta')
            expect(sumator.sumNums()).to.be.equal(0)
        });

        it("sum mixed", function () {
            sumator.add(3)
            sumator.add(4)
            sumator.add({})
            expect(sumator.sumNums()).to.be.equal(7)
        });
    })

    describe("Test Remove by filter", function () {
        it("removes all odd numbers", function () {
            for (let i = 0; i <= 10; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter((x) => x % 2 !==0)
            expect(sumator.data.join(', ')).to.be.equal('0, 2, 4, 6, 8, 10')
        });

        it("removes all odd numbers", function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter((x) => x > 5)
            expect(sumator.data.join(', ')).to.be.equal('0, 1, 2, 3, 4, 5')
        });

        it('throws exception', function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)
            }
            expect(() => sumator.removeByFilter(undefined)).to.throw(TypeError)
        });
    })

    describe("test toString func", function () {
        it('with items in array', function () {
            sumator.add(4);
            sumator.add("Pavel")
            expect(sumator.toString()).to.be.equal('4, Pavel')
        });

        it('with items in array', function () {
            expect(sumator.toString()).to.be.equal('(empty)')
        });
    })

    describe("test does func exists", function () {
        it('does func exist', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true)
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true)
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true)
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true)
        })
    })
})

//Test if data arr is empty
//-add func
//--add only numbers
//--add only string
//--add only obj
//--add mixed types
//-sum with nums
//--sum with numbers
//--sum with strings
//--sum with obj
//--sum mixed types
//-remove by filter
//--remove items
//--does not remove items
//-toString
//--array has items
//--array does not have items