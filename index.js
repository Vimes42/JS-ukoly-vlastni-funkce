//úkol č. 1

const parseDate = (date) => {
    return {
        day: Number(date.slice(0, 2)),
        month: Number(date.slice(3, 5)),
        year: Number(date.slice(6)),
    }
}

//úkol č. 2
let resultDate = {day: 2, month: 12, year: 2022}

const formatDate = (datum) => {
    
    let [den, mesic, rok] = [datum.day.toString(), datum.month.toString(), datum.year.toString()]

    return den.padStart(2, "0") + "." + mesic.padStart(2, "0") + "." + rok
    
}

//úkol č.3
const round = (cislo) => {
    const celeCislo = Math.trunc(cislo)
    const desetinne = cislo - celeCislo
    
    if (desetinne === 0.5) {
        if (celeCislo % 2 === 0) {
            return celeCislo
        } else {
            return celeCislo + 2 * desetinne
        }  
    } 
        return Math.round(cislo)
}




