import { Store } from "../src/checkout";
import { Discount } from "../src/Discount";
import { ItemType } from "../src/Item";

describe('checkout test', () => {

    const discountA = new Discount(ItemType.A, 3, 20);
    const discountB = new Discount(ItemType.B, 2, 15);

    const store = new Store([discountA, discountB]);

    it('should return 0 when no items are sent', () => {
        expect(store.checkout("")).toBe(0);
    });
    it('should return 50 when sending an A', () => {
        expect(store.checkout("A")).toBe(50);
    });
    it('should return 30 when sending an B', () => {
        expect(store.checkout("B")).toBe(30);
    });
    it('should return 20 when sending an C', () => {
        expect(store.checkout("C")).toBe(20);
    });
    it('should return 15 when sending an D', () => {
        expect(store.checkout("D")).toBe(15);
    });
    it('should return 30 when sending two D', () => {
        expect(store.checkout("DD")).toBe(30);
    });
    it('should return 115 when sending one of each', () => {
        expect(store.checkout("ABCD")).toBe(115);
    });
    it('should throw an error when sending an unknown item', () => {
        expect(() => store.checkout("Z")).toThrow("Unknown Item");
    });
    it('should apply twice the discount when having 8 As', () => {
        expect(store.checkout("AAAAAAAA")).toBe(360);
    });
    it('should apply the discount when having 3 Bs', () => {
        expect(store.checkout("BBB")).toBe(75);
    });
});