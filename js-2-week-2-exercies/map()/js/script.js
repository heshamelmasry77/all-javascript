// The .map method loops through an array and returns a new array that
// contains the exact same number of elements as the original array.
//

// The array returned from the .map array method always contains
// the exact number of items as the original array making it ideal
// for cases where you need to perform
// an action on each element and have a result for each element.

//
// Note: If you aren’t using the returned array
// from a map then you should instead be using forEach / for loop / for...of.

const updatepage = function (filteredCities) {
    let filteredCitiesHtml = filteredCities.map((item) => {
        return `<li>${item.city} - ${item.state}</li>`;
    }).join('');
    shownResults.innerHTML = filteredCitiesHtml;
    console.log(filteredCitiesHtml);
};


