document.querySelector('button').addEventListener('click', getPlant)

async function getPlant() {
    console.log('clicked.')
    const res = await fetch('https://what-plant-should-i-buy-api.herokuapp.com/api/plants')
    const data = await res.json()
    console.log(data)
    document.querySelector('#plant-name').textContent = data.name
    document.querySelector('img').src = data.image
}