export function greet(name = "world") {
  const trimmed = String(name).trim();
  if (!trimmed) {
    throw new Error("name is required");
  }
  return `Hello, ${trimmed}!`;
}
