const teamMembers = [];

teamMembers[0] = { title: "Joe Poe", bio: "Likes to cycle daily, always helpful to others, always on time!", img: "joe.jpg" };
teamMembers[1] = { title: "Jessica Loe", bio: "Enthusiastic guitar player, our company parties DJ!", img: "jessica.jpg" };
teamMembers[2] = { title: "Eddy Voe", bio: "IT Guy, fixes everyone tech crisis in matter of minutes!", img: "eddy.jpg" };


const tc = document.getElementById('team-container');

teamMembers.forEach(addCardHTML);

function addCardHTML(item) {
    tc.innerHTML +=
        ` <div class="card">
            <img src="Data/Img/${item.img}" width="150" height="100"> 
            <div class="title">${item.title}</div>
            <div class="bio">${item.bio}</div>
        </div>` ;
}

const sb = document.getElementById('search-bar').addEventListener('input', (e) => sbFn(e))

function sbFn(e) {
    console.log('ok')
    const term = e.target.value.toLowerCase();
    tc.innerHTML = '';
    if (term == '') {
        teamMembers.forEach(addCardHTML);
        return;
    }
    //filter version
    const filtredTeam = teamMembers.filter((item) => handleItem(item, term));
    if (filtredTeam.length == 0) {
        tc.innerHTML = `<div class="not-found-search">No team members found...<br>maybe you're the first one with that hobby? :)</div>`;
    } else {
        filtredTeam.forEach(addCardHTML)
    }
}


function handleItem(item, term) {
    const res = item.title.toLowerCase().indexOf(term) > -1 ||
        item.bio.toLowerCase().indexOf(term) > -1;
    return res;
}