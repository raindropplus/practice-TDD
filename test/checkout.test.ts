import { checkout } from "../src/checkout";

describe('checkout test', () => {
    it('should return 0 no items are sent', () => {
        expect(checkout('')).toBe(0);
    });

    it('should return 50 when sending A', () => {
        expect(checkout('A')).toBe(50);
    });

    it('should return 30 when sending B', () => {
        expect(checkout('B')).toBe(30);
    });


    it('should return 20 when sending C', () => {
        expect(checkout('C')).toBe(20);
    });

    it('should return 15 when sending D', () => {
        expect(checkout('D')).toBe(15);
    });

    it('should return 30 when sending DD', () => {
        expect(checkout('DD')).toBe(30);
    });

    it('should return 115 when sending ABCD', () => {
        expect(checkout('ABCD')).toBe(115);
    });

    it('should thrown an error 115 when sending unknown item', () => {
        expect(() => checkout('Z')).toThrow('Unknown item');
    });

});
