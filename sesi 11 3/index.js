let hasil = document.getElementById('hasil')
let text = 'pascal:pascalfelim@yahoo.com:male,soh:soh@inalum.id:other,windi:windi@gmail.com:female'
let people = text.split(',')
let data = []
for (let i = 0; i<people.length;i++){
    data.push(people[i].split(':'))
}

