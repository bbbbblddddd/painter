const assert = require('assert');
const Room = require('../room.js');
const Paintcan = require('../paintcan.js');
const Decorator = require('../decorator.js');

describe('Room', function(){
    let room;
    beforeEach(function(){
        room = new Room(20);
    });

    it('should be have an area', function(){
        const actual = room.paintArea;
        assert.strictEqual(actual, 20);
    });

    it('should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual,false);
    });

    it('should be able to be painted', function(){
        room.paintMe()
        const actual = room.painted;
        assert.strictEqual(actual,true);
    })
    
    describe('Paintcan', function(){
        let paintcan;
        beforeEach(function(){
            paintcan = new Paintcan(10);
        });

        it('paintcan has volume', function(){
        const actual = paintcan.volume;
        assert.strictEqual(actual, 10)
        })

        it('check paintcan has paint in it', function(){
        paintcan.hasPaint()
        const actual = paintcan.volume;
        assert.strictEqual(actual, 10)
        })

        xit('paintcan can empty itself of paint', function(){
            paintcan.emptyPaint()
            const actual = paintcan.hasPaint()

            
        
        })
    })

    describe('Decorator', function(){
        let decorator;
        beforeEach(function(){
            decorator = new Decorator();
        });
        
        it('starts with no paint stock', function(){
            const actual = decorator.paintstock;
            assert.deepStrictEqual(actual, [])
        })

        it('add new paint can', function(){
            let paint1 = new Paintcan(20);
            decorator.addPaintCanToStock(paint1)
            let paint2 = new Paintcan(20)
            decorator.addPaintCanToStock(paint2)
            let paint3 = new Paintcan(20)
            decorator.addPaintCanToStock(paint3)
            let paint4 = new Paintcan(20)
            decorator.addPaintCanToStock(paint4)
            let paint5 = new Paintcan(20)
            decorator.addPaintCanToStock(paint5)
        })

        it('calculate paint stock', function(){
            let paint1 = new Paintcan(20);
            decorator.addPaintCanToStock(paint1);
            let paint2 = new Paintcan(20)
            decorator.addPaintCanToStock(paint2);
            let paint3 = new Paintcan(20)
            decorator.addPaintCanToStock(paint3);
            let paint4 = new Paintcan(20)
            decorator.addPaintCanToStock(paint4);
            let paint5 = new Paintcan(20)
            decorator.addPaintCanToStock(paint5);
            const actual = decorator.calculatePaintStock();
            assert.strictEqual(actual, 100)

        })



    })




})



