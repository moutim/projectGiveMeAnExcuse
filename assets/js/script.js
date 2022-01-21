// Getting elements from HTML
const excuseElement = document.querySelector('.excuse-generated');
const categories = document.getElementsByName('category');
const btn = document.querySelector('.send');
// --------------------------

// Getting selected category with radio button
const getCategory = () => {
    let category;
    categories.forEach((item) => (item.checked) ? category = item.value : false);
    return category;
};

// Calling the function to get the excuse
const loadExcuse = async () => {
    const result = await fetchExcuse(getCategory());
    const { excuse } = result[0];
    excuseElement.innerText = excuse;
}

btn.addEventListener('click', loadExcuse);