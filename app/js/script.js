const tabItems = document.querySelectorAll('.tab__item');
const tabContentItems = document.querySelectorAll('.tab-content__item');

// Select tab content item
function selectItem(e) {
    removeBorder();
    removeshow();

    // Add border to current tab
    this.classList.add('tab--selected');

    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show-tab-content');

}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab--selected'));
}

function removeshow() {
    tabContentItems.forEach(item => item.classList.remove('show-tab-content'));
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));