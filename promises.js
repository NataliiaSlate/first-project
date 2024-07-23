async function getListOfBrands() {
    const url = "https://staging.hlodan.com/brands";

    const response = await fetch(url);
    const brands = await response.json();

    console.log("List of brands:", brands);
    return brands;
}

async function chooseRandomNumber(min, max, count = 2) {
    const randomNumbers = [];
    let num;

    while (randomNumbers.length < count) {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!randomNumbers.includes(num)) {
            randomNumbers.push(num);
        }
    }

    console.log("Random numbers list:", randomNumbers.sort());
    return randomNumbers.sort();
}

async function chooseRandomBrands(brandsList, randomNumbers) {
    const brands = [];
    for (const index of randomNumbers) {
        let brand = brandsList[index];

        if (brand.includes(" ")) {
            brand = brand.replaceAll(" ", "");
        }

        if (brand.includes("'")) {
            brand = brand.replaceAll("'", "");
        }

        if (brand.includes("&")) {
            brand = brand.replaceAll("&", "");
        }

        brands.push(brand.toLowerCase());
    }

    console.log("Random brands:", brands);
    return brands;
}

async function getBrandDetails(brandName) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer 0KpULle5egN2XZbAUHHqStryVKV9DdylK8HR9Lzwf2Q=",
        },
    };

    try {
        const response = await fetch(
            `https://api.brandfetch.io/v2/brands/${brandName}.com`,
            options
        );
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

async function displayBrandDetails() {
    const brandsList = await getListOfBrands();
    const randomNumbers = await chooseRandomNumber(0, brandsList.length - 1, 5);
    const randomBrands = await chooseRandomBrands(brandsList, randomNumbers);

    const brandsDetails = await Promise.all(
        randomBrands.map((brand) => getBrandDetails(brand))
    );

    console.log(brandsDetails);

    const mainElement = document.querySelector("main");
    brandsDetails.forEach((detail) => {
        if (detail) {
            const brandElement = document.createElement("section");
            brandElement.classList.add("brand-details");
            brandElement.innerHTML = `
                <div class="brand-details__logo-container">
                    <img class="brand-details__logo" src="${detail.logos[0].formats[0].src}" alt="Ups, ${detail.name} logo link is broken">
                </div>
                <div class="brand-details__text">
                    <h2 class="brand-details__name" style="color: ${detail.colors[0].hex}">${detail.name}</h2>
                    <p class="brand-details__description">${detail.description}</p>
                </div>
            `;
            mainElement.appendChild(brandElement);
        }
    });
}

document.addEventListener("DOMContentLoaded", displayBrandDetails);
