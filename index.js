document.addEventListener('DOMContentLoaded', () => {
fetch('http://localhost:3000/characters')
.then((response) => response.json())
.then((data) => {
    
    const ol = document.getElementById('list');
    data.forEach((character) => {
        //creating HTML elements for each animal
        const li = document.createElement('li');
        li.textContent = character.name;
        ol.appendChild(li);

        li.addEventListener('click', () => {
            const characterId = character.id;
            fetch(`http://localhost:3000/characters/${characterId}`)
            .then((response) => response.json())
            .then((characterDetails) => {
                //HTML elements for displaying the animal's details
                const characterImage = document.createElement('img');
                characterImage.src = characterDetails.image;
                const voteCount = document.createElement('p');
                voteCount.textContent = `Votes: ${characterDetails.votes}`
                const details = document.getElementById('details');
               // To clear any existing details before adding the new ones
                details.innerHTML = "";
                //To append the animal's details to the div
                details.appendChild(characterImage);
                details.appendChild(voteCount)

                const voteButton = document.getElementById('vote-button');
            voteButton.addEventListener('click', () => {
                const currentVotes = characterDetails.votes;
                const updatedVotes = currentVotes + 1;
                characterDetails.votes = updatedVotes;
                voteCount.textContent = `Votes: ${updatedVotes}`;
            });
            })
        });
    });
        
        });
})
