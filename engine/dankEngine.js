export function dankScript(tag, props = {}, ...children) {
  const element = document.createElement(tag);

  for (const [key, value] of Object.entries(props)) {
    // Check if the key starts with "dank" and the value is a function
    if (key.startsWith("dank") && typeof value === "function") {
      // Slice off "dank" (4 characters) and convert the event name to lowercase
      element.addEventListener(key.slice(4).toLowerCase(), value);
    } else {
      // Otherwise, treat it as a regular attribute
      element.setAttribute(key, value);
    }
  }

  for (const child of children) {
    element.append(
      typeof child === "string" ? document.createTextNode(child) : child
    );
  }

  return element;
}
