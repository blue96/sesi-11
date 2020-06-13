let sideBar = document.getElementById('sideBar')

navBar = [ ['HOME','PROFILE'],
           ['SETTING'],
           ['LOGOUT'] ]
txt = ''
for (let i = 0; i < navBar.length; i++) {
    for (let j = 0; j < navBar[i].length;j++){
        txt += `<p>${navBar[i][j]}</p>`
    }
    txt+='<hr>'
}

sideBar.innerHTML = txt