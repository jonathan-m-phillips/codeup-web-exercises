(function () {
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split('|');

    console.log(planetsArray);


    console.log("");


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    planetsString = planetsArray.join('<br> \n');

    // or I can do this as well:
    // planetsString = planetsArray.join('\n \n');

    console.log(planetsString);


    /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


    let newPlanetsString = "<ul>" + "\n \t" + "<li>Mercury</li>" + "\n \t" + "<li>Venus</li>" + "\n \t" + "<li>Earth</li>" + "\n \t" + "<li>Mars</li>" + "\n \t" + "<li>Jupiter</li>" + "\n \t" + "<li>Saturn</li>" + "\n \t" + "<li>Uranus</li>" + "\n \t" + "<li>Neptune</li>" + "\n</ul>";

    console.log(newPlanetsString);

    console.log("");

    let newPlanetsString2 = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";

    console.log(newPlanetsString2);

    console.log("");


    console.log("");


    console.log("<ul>")


    planetsArray.forEach(function (planet) {
        console.log("\t<li>" + planet + "</li>");
    })


    console.log("</ul>");


})();
