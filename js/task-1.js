// 1. Знаходимо список категорій
const categoriesList = document.querySelector('#categories');

// 2. Знаходимо всі li з класом item
const categories = categoriesList.querySelectorAll('.item');

// 3. Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// 4. Для кожної категорії
categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});