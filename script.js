const characters = [    
    {   
        "name" : 'Jhin',
        "description" : "Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council, the serial killer now works as their cabal's assassin. Using his gun as his paintbrush, Jhin creates works of artistic brutality, horrifying victims and onlookers. He gains a cruel pleasure from putting on his gruesome theater, making him the ideal choice to send the most powerful of messages: terror. ",
        "img" : "/rrc/jhin.jpg",
        "date" : 'Champ Launched: 2/1/2016',
        "price" : 'Blue Essense: 6300'
    },
    {
        "name" : 'Jinx',
        "description" : "A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences. With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave a trail of mayhem and panic in her wake. Jinx despises boredom, and gleefully brings her own chaotic brand of pandemonium wherever she goes.",
        "img" : "/rrc/jinx.jpg",
        "date" : 'Champ Launched: 10/10/2013',
        "price" : 'Blue Essense: 4800'
    },
    {
        "name" : 'Miss Fortune',
        "description" : 'A Bilgewater captain famed for her looks but feared for her ruthlessness, Sarah Fortune paints a stark figure among the hardened criminals of the port city. As a child, she witnessed the reaver king Gangplank murder her family—an act she brutally avenged years later, blowing up his flagship while he was still aboard. Those who underestimate her will face a beguiling and unpredictable opponent… and, likely, a bullet or two in their guts.',
        "img" : "/rrc/miss-fortune.jpg",
        "date" : 'Champ Launched: 9/8/2010',
        "price" : 'Blue Essense: 6300'
    },
    {
        "name" : 'Varus',
        "description" : "One of the ancient darkin, Varus was a deadly killer who loved to torment his foes, driving them almost to insanity before delivering the killing arrow. He was imprisoned at the end of the Great Darkin War, but escaped centuries later in the remade flesh of two Ionian hunters—they had unwittingly released him, cursed to bear the bow containing his bound essence. Varus now seeks out those who trapped him, in order to enact his brutal vengeance, but the mortal souls within still resist him every step of the way. ",
        "img" : "/rrc/varus.jpg",
        "date" : 'Champ Launched: 18/4/2012',
        "price" : 'Blue Essense: 4800'
    },
    {
        "name" : 'Ashe',
        "description" : "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.",
        "img" : "/rrc/ashe.jpg",
        "date" : 'Champ Launched: 21/2/2009',
        "price" : 'Blue Essense: 6300'
    },
    {
        "name" : 'Caitlyn',
        "description" : "Renowned as its finest peacekeeper, Caitlyn is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a one-of-a-kind hextech rifle, Caitlyn's most powerful weapon is her superior intellect, allowing her to lay elaborate traps for any lawbreakers foolish enough to operate in the City of Progress.",
        "img" : "/rrc/caitlyn.jpg",
        "date" : 'Champ Launched: 1/4/2011',
        "price" : 'Blue Essense: 4800'
    },
    {
        "name" : 'Xayah',
        "description" : "Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way. Xayah fights alongside her partner and lover, Rakan, to protect their dwindling tribe, and restore their race to her vision of its former glory.",
        "img" : "/rrc/xayah.jpg",
        "date" : 'Champ Launched: 19/4/2017',
        "price" : 'Blue Essense: 6300'
    },
    {
        "name" : 'Ezreal',
        "description" : "A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way out of any situation, relying partially on his wits, but mostly on his mystical Shuriman gauntlet, which he uses to unleash devastating arcane blasts. One thing is for sure—whenever Ezreal is around, trouble isn't too far behind. Or ahead. Probably everywhere. ",
        "img" : "/rrc/ezreal.jpg",
        "date" : 'Champ Launched: 12/2/2022',
        "price" : 'Blue Essense: 3150'
    },
    {
        "name" : 'Tristana',
        "description" : "While many other yordles channel their energy into discovery, invention, or just plain mischief-making, Tristana was always inspired by the adventures of great warriors. She had heard much about Runeterra, its factions, and its wars, and believed her kind could become worthy of legend too. Setting foot in the world for the first time, she took up her trusty cannon Boomer, and now leaps into battle with steadfast courage and optimism.",
        "img" : "/rrc/tristana.jpg",
        "date" : 'Champ Launched: 21/2/2009',
        "price" : 'Blue Essense: 1350'
    },
    {
        "name" : 'Lucian',
        "description" : "Lucian, a Sentinel of Light, is a grim hunter of undying spirits, pursuing them relentlessly and annihilating them with his twin relic pistols. After the wraith Thresh slew his wife, Lucian embarked on the path of vengeance-but even with her return to life, his rage is undiminished. Merciless and single-minded, Lucian will stop at nothing to protect the living from the long-dead horrors of the Black Mist.",
        "img" : "/rrc/lucian.jpg",
        "date" : 'Champ Launched: 22/8/2013',
        "price" : 'Blue Essense: 4800'
    }
];

const main = document.querySelector('.cardContainer');

characters.forEach((leagueCard) => createCard(leagueCard));

function createCard({name, description, img, date, price}) {

    const card = document.createElement("div");
    card.classList.add('card')

    const title = document.createElement("h1");
    title.innerHTML = name;

    const image = document.createElement("img")
    image.src = img;

    const cardDescript = document.createElement("p")
    cardDescript.innerHTML = description;

    const cardDate = document.createElement("p")
    cardDate.innerHTML = date;

    const cardPrice = document.createElement("p")
    cardPrice.innerHTML = price;

    card.append(title, image, cardDescript, cardDate, cardPrice);
    main.appendChild(card);

}