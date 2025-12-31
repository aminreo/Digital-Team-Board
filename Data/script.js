const teamMembers = [];

teamMembers[0] = { title: "Joe Poe", bio: "Likes to cycle daily, always helpful to others, always on time!" };
teamMembers[1] = { title: "Jessica Loe", bio: "Enthusiastic guitar player, our company parties DJ!" };
teamMembers[2] = { title: "Eddy Voe", bio: "IT Guy, fixes everyone tech crisis in matter of minutes!" };


const tc = document.getElementById('team-container');
// tc.style.color = "red";

teamMembers.forEach(myFn);

function myFn(item) {
    tc.innerHTML +=
       ` <div class="card">
            <div class="title">${item.title}</div>
            <div class="bio">${item.bio}</div>
        </div>` ;
}
