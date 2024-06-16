import { listBroths } from '../api/orderApi'

export default async function BrothSelection() {
    const broths = await listBroths()
    return `
      <section class="broth-selection">
        <h2>First things first: select your favorite broth.</h2>
        <p>It will give the whole flavor on your ramen soup.</p>
        <div class="broth-options">
        ${broths.map((broth) => `
          <div class="broth-option" data-id="${broth.id}" data-image-inactive="${broth.imageInactive}" data-image-active="${broth.imageActive}">
            <img src="${broth.imageInactive}" alt="${broth.name}">
            <h3>${broth.name}</h3>
            <p>${broth.description}</p>
            <p class="price">US$ ${broth.price}</p>
          </div>
          `).join('')}
        </div>
      </section>
    `
}
