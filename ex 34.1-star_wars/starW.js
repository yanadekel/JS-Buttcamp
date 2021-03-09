
const baseEndpoint = "https://swapi.dev/api";
const usersEndpoint = `${baseEndpoint}/people`;
const plenetEndpoint = `${baseEndpoint}/planets`;
const container = document.querySelector('#container')


async function displayCHar() {
  const response = await fetch(`${usersEndpoint}`);
  const data = await response.json();
  console.log(data);


  let objArr = [];
  for (let i = 0; i < 10; i++) {
    const homeWorldResponse = await fetch(data.results[i].homeworld);
    const homeWorldData = await homeWorldResponse.json();

    objArr.push({
      hair: data.results[i].hair_color,
      height: data.results[i].height,
      name: data.results[i].name,
      planet: { name: homeWorldData.name, pupulation: homeWorldData.population }
    })
  } console.log(objArr);
  return objArr;
}


async function displayPlanet(url) {
  const world = await fetch(plenetEndpoint);
  return await world.json();
}


async function createTable() {
  let users = await displayCHar();
  let table = document.createElement('table');
  users.forEach((u) => {
    console.log(u)
    table.innerHTML += `<tr>
          <td>${u.name}</td>
           <td>${u.hair}</td>
            <td>${u.height}</td>
             <td>${u.planet.name}</td>
             <td>${u.planet.population}</td>
              </tr>`
  })
  container.appendChild(table);
}