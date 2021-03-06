
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => { this.select() });
  };

  select() {
    const links = document.querySelectorAll('.tabs-link');

    Array.from(links).forEach(el => {
      el.classList.remove('tabs-link-selected');
    });

    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tabs-item');

    items.forEach(el => {
      el.classList.remove('tabs-item-selected');
    });

    this.element.classList.add('tabs-item-selected');
  }
}

links = document.querySelectorAll('.tabs .tabs-link')
  .forEach(el => new TabLink(el));