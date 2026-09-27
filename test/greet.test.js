import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/greet.js";

test("greets a person by name", () => {
  assert.equal(greet("Kartik"), "Hello, Kartik!");
});

test("defaults to world", () => {
  assert.equal(greet(), "Hello, world!");
});

test("rejects a blank name", () => {
  assert.throws(() => greet("   "), /name is required/);
});
