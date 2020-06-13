let hasil = document.getElementById('hasil')

let people = [ [1,'PASCAL','SOH'],
           [2,'ARIEL','SSC'],
           [3,'MAWAN','SIT'] ]
txt = ''
for (let i = 0; i < people.length; i++) {
    txt += `ID:${people[i][0]} Name:${people[i][1]} Section:${people[i][2]}<br>`
}

hasil.innerHTML = txt