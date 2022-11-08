async function getsport() {
    const response = await fetch('https://pixabay.com/api/?key=31152943-281e68b71e6bc477d117d000e&q=sports+tshirts&image_type=photo')
    const data = await response.json()
    const sports = []
    sports = data


    console.log(sports)
}

getsport()