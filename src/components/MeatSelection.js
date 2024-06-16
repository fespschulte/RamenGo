import { listProteins } from '../api/orderApi'

export default async function MeatSelection() {
    const proteins = await listProteins()
    return `
      <section class="meat-selection">
        <h2>It’s time to choose (or not) your meat!</h2>
        <p>Some people love, some don’t. We have options for all tastes.</p>
        <div class="meat-options">
        ${proteins.map((protein) => `
          <div class="meat-option" data-id="${protein.id}" data-image-inactive="${protein.imageInactive}"  data-image-active="${protein.imageActive}">
            <img src="${protein.imageInactive}" alt="${protein.name}">
            <h3>${protein.name}</h3>
            <p>${protein.description}</p>
            <p class="price">US$ ${protein.price}</p>
          </div>
          `).join('')}
        </div>
      </section>
    `
}
