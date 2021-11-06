const list = document.querySelector('.js_list');

fetch('https://pokeapi.co/api/v2/pokemon')
  .then((response) =>  {
    console.log(response);
    return response.json()
  })
/* .then((data) => console.log(data)) */
  .then(data => {
  //console.log(data);
    const allMarkup = allList(data.results);
    console.log(allMarkup);
    list.insertAdjacentHTML('beforeend', allMarkup);
})
  .catch(err => console.log(err));

function allList(list) {
  console.log(list);
  return list.map(item => `<li>${item.name}</li>`).join('');
}