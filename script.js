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

const menu = `1: Show links
2: Add a link
3: Remove a link
0: Quit
`;

let menuList = Number(prompt(menu));

while (menuList !== 0) {
    switch (menuList) {
        case 1:
            for (let i = 0; i < linkList.length; i ++) {
                let socialList = `Title: ${linkList[i].title}
URL: ${linkList[i].url}
Author: ${linkList[i].author}`;

                alert(socialList);
            }
            break;

        case 2:
            const linkTitle = prompt("What is the title of your new link");
            const linkUrl = prompt("What is your new URL");
            const linkAuthor = prompt("Who is the author of your social link");
            const socialLink = {
                title: linkTitle,
                url: linkUrl,
                author: linkAuthor
            };
            linkList.push(socialLink);
        break;

        default:
            alert('Please enter a correct choice. (0, 1, 2, 3)');
            break;
    }
    
    menuList = Number(prompt(menu));

}

