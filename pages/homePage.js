import { dankScript } from "../engine/dankEngine.js";

export function renderHomePage() {
  const header = dankScript('h1', {}, 'welcome to my app')
  const page = dankScript('div', {class: 'home-page'}, header)

  document.body.appendChild(page)
}
