import { describe, it, expect } from "vitest";
import { sum } from "./sum.js";

describe("sum", () => {
    it("sums numbers", () => {
        expect(sum(1, 2)).toBe(3);
    });
});
