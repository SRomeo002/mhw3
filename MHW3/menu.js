const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka';
const randomCocktailsContainer = document.querySelector('.random-cocktails');
const expandButton = document.querySelector('.expand-button');
const menuCompleto = document.querySelector('.menu-completo');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const cocktailLista = document.querySelector('.cocktail-lista');
const reduceButton = document.querySelector('.reduce-button');
const versioneCompleta = document.querySelector('.versione-completa');


fetch(apiUrl)
   .then(response => response.json())
   .then(data => {
        const cocktails = data.drinks.slice(0, 4); 
        cocktails.forEach(cocktail => {
            const imageUrl = cocktail.strDrinkThumb;
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = cocktail.strDrink;
            randomCocktailsContainer.appendChild(imageElement);
        });
    })
   .catch(error => console.error('Error:', error));


expandButton.addEventListener('click', () => {
    menuCompleto.style.display = 'block';
    randomCocktailsContainer.style.display = 'none';
    expandButton.style.display = 'none';
    versioneCompleta.style.display = 'block';
});


reduceButton.addEventListener('click', () => {
    menuCompleto.style.display = 'none';
    randomCocktailsContainer.style.display = 'flex';
    expandButton.style.display = 'block';
    versioneCompleta.style.display = 'none';
});


searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                cocktailLista.innerHTML = '';
                const cocktails = data.drinks.slice(0, 5); 
                cocktails.forEach(cocktail => {
                    const title = cocktail.strDrink;
                    const imageUrl = cocktail.strDrinkThumb;

                    
                    const cocktailElement = document.createElement('div');
                    cocktailElement.classList.add('bevanda');

                    const titleElement = document.createElement('h3');
                    titleElement.textContent = title;

                    const imageElement = document.createElement('img');
                    imageElement.src = imageUrl;
                    imageElement.alt = title;

                    
                    cocktailElement.appendChild(titleElement);
                    cocktailElement.appendChild(imageElement);
                    cocktailLista.appendChild(cocktailElement);
                });

                
            })
            .catch(error => console.error('Error:', error));
    }
});