function removeDiacritics(str) {
    const diacriticsMap = {
        'Á': 'A', 'Ä': 'A', 'Č': 'C', 'Ç': 'C', 'Ď': 'D', 'É': 'E', 'Ě': 'E', 'Ë': 'E',
        'Í': 'I', 'Ň': 'N', 'Ó': 'O', 'Ö': 'O', 'Ř': 'R', 'Š': 'S', 'Ť': 'T', 'Ú': 'U',
        'Ů': 'U', 'Ü': 'U', 'Ý': 'Y', 'Ž': 'Z', 'á': 'a', 'ä': 'a', 'č': 'c', 'ç': 'c',
        'ď': 'd', 'é': 'e', 'ě': 'e', 'ë': 'e', 'í': 'i', 'ň': 'n', 'ó': 'o', 'ö': 'o',
        'ř': 'r', 'š': 's', 'ť': 't', 'ú': 'u', 'ů': 'u', 'ü': 'u', 'ý': 'y', 'ž': 'z'
    };

    return str.replace(/[^\u0000-\u007E]/g, function(a) {
        return diacriticsMap[a] || a;
    });
}



const jmeno = prompt ("Zadej jméno")
const prijmeni = prompt ("Zadej příjmení")

const jmenobez = removeDiacritics (jmeno)
const prijmenibez = removeDiacritics (prijmeni)

/*document.body.innerHTML = "<p>" + jmeno.trim() + prijmeni.trim() + "</p>"
document.body.innerHTML = "<p>" + prijmeni.slice(0,5) + jmeno.slice(0,3) + "</p>"
`<p>${prijmeni.trim()}</p>` +
`<p>${jmeno.trim()}</p>` +**/

document.body.innerHTML +=
`<p>${trimprijmeni = prijmenibez.trim()}</p>` +
`<p>${trimjmeno = jmenobez.trim()}</p>` +
`<p>${trimprijmeni.slice(0,5)}${trimjmeno.slice(0,3)}@fit.cvut.cz</p>`