import { describe, it, expect } from "vitest";
import { sum } from "./sum.js";

describe("sum", () => {
    it("sums numbers", () => {
        console.log("User Agent:", navigator.userAgent, "\n");
        expect(sum(1, 2)).toBe(3);
    });
});
