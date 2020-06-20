const linkList = [
    {
        title: "The best Game",
        url: "http://the_best_game.com",
        author: "Jackson"
    },
    {
        title: "Traveling around the world",
        url: "https://travel/around_the_world.com",
        author: "David"
    },
    {
        title: "Winning a game",
        url: "https://winning_game.com",
        author: "James"
    },
    {
        title: "Surprising World",
        url: "http://surprising_world.com",
        author: "Catherine"
    }
];

// Create a function for the first condition

const showingList = () => {
    for (let i = 0; i < linkList.length; i ++) {
        let socialList = `Title: ${linkList[i].title}
URL: ${linkList[i].url}
Author: ${linkList[i].author}`;

        alert(socialList);
    }
}

// Fuction for the users choose link

const usersLinkChoice = () => {
    let linkTitle = prompt("What is the title of your new link");
    let linkUrl = prompt("What is your new URL");
    let linkAuthor = prompt("Who is the author of your social link");

    if (!linkUrl.startsWith("http://") && !linkUrl.startsWith("https://")) {
    linkUrl = `https://${linkUrl}`;
    }

    const socialLink = {
        title: linkTitle,
        url: linkUrl,
        author: linkAuthor
    };
    linkList.push(socialLink);
}

const removeLink = () => {
    let deleteExistingLink = Number(prompt(`Enter the link's index you want to delete (1 to ${linkList.length})`));
    let deleteLink = linkList.splice(deleteExistingLink -=1, 1);
    alert(`You have just remove ${deleteLink[0].title}
URL: ${linkList[0].url}
Author: ${linkList[0].author}
`);
}

let menu = `1: Show links
2: Add a link
3: Remove a link
0: Quit
`;

let menuList = Number(prompt(menu));

while (menuList !== 0) {
    switch (menuList) {
        case 1:
            showingList();
            break;

        case 2:
            usersLinkChoice();
        break;

        case 3:
            removeLink();
        break;

        default:
            alert('Please enter a correct choice. (0, 1, 2, 3)');
            break;
    }

    menuList = Number(prompt(menu));

}

alert("Pleased to have you using my program");