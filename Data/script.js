const teamMembers = [];

teamMembers[0] = { title: "Joe Poe", bio: "Likes to cycle daily, always helpful to others, always on time!" };
teamMembers[1] = { title: "Jessica Loe", bio: "Enthusiastic guitar player, our company parties DJ!" };
teamMembers[2] = { title: "Eddy Voe", bio: "IT Guy, fixes everyone tech crisis in matter of minutes!" };


const tc = document.getElementById('team-container');

teamMembers.forEach(myFn);

function myFn(item) {
    tc.innerHTML +=
        ` <div class="card">
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
        teamMembers.forEach(myFn);
        return;
    }
    // todo
    for (item in teamMembers) {
        const current_card = teamMembers[item]

        if (current_card.title.toLowerCase().indexOf(term) > -1 ||
            current_card.bio.toLowerCase().indexOf(term) > -1) {
            tc.innerHTML +=
                ` <div class="card">
            <div class="title">${current_card.title}</div>
            <div class="bio">${current_card.bio}</div>
        </div>` ;
        } else {

        }
    }
}
