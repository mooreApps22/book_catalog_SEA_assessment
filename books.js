const books = [
    {
		title: "Ulysses",
		author: "James Joyce",
		publicationDate: "1922",
		description: "A single day in Dublin becomes an epic of consciousness.",
		quote: "History, Stephen said, is a nightmare from which I am trying to awake.",
		show: true,
		coverImage: "./assets/covers/ulysses.webp"
	},
    {
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		publicationDate: "1925",
		description: "A doomed millionaire chases love and reinvents himself in the Jazz Age.",
		quote: "So we beat on",
		show: true,
		coverImage: "./assets/covers/gatsby.webp"
	},
    {
		title: "A Portrait of the Artist as a Young Man",
		author: "James Joyce",
		publicationDate: "1916",
		description: "A young Irish artist rebels against family,nation, and church.",
		quote: "You can still die when the sun is shining.",
		show: true,
		coverImage: "./assets/covers/portrait.webp"
	},
    {
		title: "Lolita",
		author: "Vladimir Nabokov",
		publicationDate: "1955",
		description: "A dazzling, disturbing tale of obsession and manipulation.",
		quote: "He broke my heart. You merely broke my life.",
		show: true,
		coverImage: "./assets/covers/lolita.webp"
	},
    {
		title: "Brave New World",
		author: "Aldous Huxley",
		publicationDate: "1932",
		description: "A pleasure-soaked dystopia trades freedom for stability.",
		quote: "I am I, and I wish I weren't.",
		show: true,
		coverImage: "./assets/covers/braveNewWorld.webp"
	},
    {
		title: "The Sound and the Fury",
		author: "William Faulkner",
		publicationDate: "1929",
		description: "The collapse of a Southern family told through fractured minds.",
		quote: "Once a bitch always a bitch, what I say.",
		show: true,
		coverImage: "./assets/covers/soundAndFury.webp"
	},
    {
		title: "Catch-22",
		author: "Joseph Heller",
		publicationDate: "1961",
		description: "A bombardier faces the absurd logic of war and bureaucracy.",
		quote: "He was going to live forever, or die in the attempt.",
		show: true,
		coverImage: "./assets/covers/catch22.webp"
	},
    {
		title: "Darkness at Noon",
		author: "Arthur Koestler",
		publicationDate: "1940",
		description: "An imprisoned revolutionary confronts ideology, guilt, and betrayal.",
		quote: "Honor is decency without vanity.",
		show: true,
		coverImage: "./assets/covers/darknessAtNoon.webp"
	},
    {
		title: "Sons and Lovers",
		author: "D. H. Lawrence",
		publicationDate: "1913",
		description: "A young man struggles between desire, art, and his mother’s hold.",
		quote: "Recklessness is almost a man's revenge on his woman. He feels he is not valued so he will risk destroying himself to deprive her altogether.",
		show: true,
		coverImage: "./assets/covers/sonsAndLovers.webp"
	},
    {
		title: "The Grapes of Wrath",
		author: "John Steinbeck",
		publicationDate: "1939",
		description: "A Dust Bowl family heads west into poverty, anger, and endurance.",
		quote: "I'll be there",
		show: true,
		coverImage: "./assets/covers/grapesOfWrath.webp"
	},
    {
		title: "Under the Volcano",
		author: "Malcolm Lowry",
		publicationDate: "1947",
		description: "An alcoholic consul spirals through one fatal Day of the Dead.",
		quote: "No se puede vivir sin amar",
		show: true,
		coverImage: "./assets/covers/underVolcano.webp"
	},
    {
		title: "The Way of All Flesh",
		author: "Samuel Butler",
		publicationDate: "1903",
		description: "A satirical family saga attacks Victorian hypocrisy and repression.",
		quote: "the principal business of life is to enjoy it.",
		show: true,
		coverImage: "./assets/covers/wayOfAllFlesh.webp"
	},
    {
		title: "1984",
		author: "George Orwell",
		publicationDate: "1949",
		description: "A man resists total surveillance in a state built on lies.",
		quote: "Big Brother is watching",
		show: true,
		coverImage: "./assets/covers/1984.webp"
	},
    {
		title: "I, Claudius",
		author: "Robert Graves",
		publicationDate: "1934",
		description: "The unlikely Roman emperor survives palace intrigue and bloodshed.",
		quote: "Those that can’t beat the ass, beat the saddle.",
		show: true,
		coverImage: "./assets/covers/iClaudius.webp"
	},
    {
		title: "To the Lighthouse",
		author: "Virginia Woolf",
		publicationDate: "1927",
		description: "A family holiday becomes a meditation on time, art, and loss.",
		quote: "The very stone one kicks with one's boot will outlast Shakespeare.",
		show: true,
		coverImage: "./assets/covers/lighthouse.webp"
	},
    {
		title: "An American Tragedy",
		author: "Theodore Dreiser",
		publicationDate: "1925",
		description: "Ambition, desire, and class pressure drive a young man toward crime.",
		quote: "what matter it if a man gaineth the whole world and loseth his own soul?",
		show: true,
		coverImage: "./assets/covers/americanTragedy.webp"
	},
    {
		title: "The Heart Is a Lonely Hunter",
		author: "Carson McCullers",
		publicationDate: "1940",
		description: "Lonely Southerners seek connection around a silent confidant.",
		quote: "the way i need you is a loneliness i cannot bear.",
		show: true,
		coverImage: "./assets/covers/lonelyHunter.webp"
	},
    {
		title: "Slaughterhouse-Five",
		author: "Kurt Vonnegut",
		publicationDate: "1969",
		description: "A traumatized soldier slips through time after Dresden.",
		quote: "So it goes",
		show: true,
		coverImage: "./assets/covers/slaughterhouseFive.webp"
	},
    {
		title: "Invisible Man",
		author: "Ralph Ellison",
		publicationDate: "1952",
		description: "An unnamed Black narrator confronts America’s blindness to his humanity.",
		quote: "I am invisible, simply because people refuse to see me.",
		show: true,
		coverImage: "./assets/covers/invisibleMan.webp"
	},
    {
		title: "Native Son",
		author: "Richard Wright",
		publicationDate: "1940",
		description: "Racism and poverty shape a young man’s violent fate in Chicago.",
		quote: "What I killed for, I am",
		show: true,
		coverImage: "./assets/covers/nativeSon.webp"
	},
    {
		title: "Henderson the Rain King",
		author: "Saul Bellow",
		publicationDate: "1959",
		description: "A restless millionaire seeks meaning in Africa.",
		quote: "...between human beings there are only two alternatives, either brotherhood or crime.",
		show: true,
		coverImage: "./assets/covers/hendersonRainKing.webp"
	},
    {
		title: "Appointment in Samarra",
		author: "John O'Hara",
		publicationDate: "1934",
		description: "One reckless act sends a socialite toward ruin.",
		quote: "I’m so afraid, but it’s just as wrong to stop, isn’t it? Isn’t it just as wrong to stop?",
		show: true,
		coverImage: "./assets/covers/appointmentSamarra.webp"
	},
    {
		title: "U.S.A. (trilogy)",
		author: "John Dos Passos",
		publicationDate: "1930",
		description: "A collage of lives maps America’s first half-century.",
		quote: "We work to eat to get the strength to work to eat to get the strength to work.",
		show: true,
		coverImage: "./assets/covers/usa.webp"
	},
    {
		title: "Winesburg, Ohio",
		author: "Sherwood Anderson",
		publicationDate: "1919",
		description: "Only the few know the sweetness of the twisted apples.",
		quote: "He wanted to talk",
		show: true,
		coverImage: "./assets/covers/winesburg.webp"
	},
    {
		title: "A Passage to India",
		author: "E. M. Forster",
		publicationDate: "1924",
		description: "Friendship and empire collide after a trip to the Marabar Caves.",
		quote: "Life never gives us what we want at the moment that we consider appropriate.",
		show: true,
		coverImage: "./assets/covers/passageIndia.webp"
	},
    {
		title: "The Wings of the Dove",
		author: "Henry James",
		publicationDate: "1902",
		description: "Yes, one has read; but this is beyond any book.",
		show: true,
		coverImage: "./assets/covers/wingsDove.webp"
	},
    {
		title: "The Ambassadors",
		author: "Henry James",
		publicationDate: "1903",
		description: "A middle-aged envoy discovers a richer life in Europe.",
		quote: "Live all you can, it's a mistake not to",
		show: true,
		coverImage: "./assets/covers/ambassadors.webp"
	},
    {
		title: "Tender Is the Night",
		author: "F. Scott Fitzgerald",
		publicationDate: "1934",
		description: "A glamorous marriage decays on the Riviera.",
		quote: "Strange children should smile at each other and say, 'Let's play.'",
		show: true,
		coverImage: "./assets/covers/tenderNight.webp"
	},
    {
		title: "The Studs Lonigan Trilogy",
		author: "James T. Farrell",
		publicationDate: "1932",
		description: "A Chicago youth comes of age amid brutality and disappointment.",
		quote: "All his life he had wished and waited, and there had been no change, except for the worse.",
		show: true,
		coverImage: "./assets/covers/studsLonigan.webp"
	},
    {
		title: "The Good Soldier",
		author: "Ford Madox Ford",
		publicationDate: "1915",
		description: "An unreliable narrator untangles adultery, deception, and collapse.",
		quote: "This is the saddest story I have ever heard.",
		show: true,
		coverImage: "./assets/covers/goodSoldier.webp"
	},
    {
		title: "Animal Farm",
		author: "George Orwell",
		publicationDate: "1945",
		description: "A barnyard revolution turns into tyranny.",
		quote: "All animals are equal, but some animals are more equal than others.",
		show: true,
		coverImage: "./assets/covers/animalFarm.webp"
	},
    {
		title: "The Golden Bowl",
		author: "Henry James",
		publicationDate: "1904",
		description: "Marriage and betrayal unfold beneath polished manners.",
		quote: "The bowl was cracked",
		show: true,
		coverImage: "./assets/covers/goldenBowl.webp"
	},
    {
		title: "Sister Carrie",
		author: "Theodore Dreiser",
		publicationDate: "1900",
		description: "A small-town girl pursues desire and status in the modern city.",
		quote: "How true it is that words are but the vague shadows of the volumes we mean.",
		show: true,
		coverImage: "./assets/covers/sisterCarrie.webp"
	},
    {
		title: "A Handful of Dust",
		author: "Evelyn Waugh",
		publicationDate: "1934",
		description: "A savage satire of marriage, class, and modern emptiness.",
		quote: "You can't ever tell what's going to hurt people.",
		show: true,
		coverImage: "./assets/covers/handfulDust.webp"
	},
    {
		title: "As I Lay Dying",
		author: "William Faulkner",
		publicationDate: "1930",
		description: "A poor family carries their mother’s body across Mississippi.",
		quote: "My mother is a fish.",
		show: true,
		coverImage: "./assets/covers/layDying.webp"
	},
    {
		title: "All the King's Men",
		author: "Robert Penn Warren",
		publicationDate: "1946",
		description: "A populist politician rises and rots in power.",
		quote: "The best luck always happens to people who don't need it.",
		show: true,
		coverImage: "./assets/covers/kingsMen.webp"
	},
    {
		title: "The Bridge of San Luis Rey",
		author: "Thornton Wilder",
		publicationDate: "1927",
		description: "Five deaths prompt a search for meaning and providence.",
		quote: "There is a land of the living and a land of the dead and the bridge is love, the only survival, the only meaning.",
		show: true,
		coverImage: "./assets/covers/bridgeOfSanLuisRey.webp"
	},
    {
		title: "Howards End",
		author: "E. M. Forster",
		publicationDate: "1910",
		description: "Three families embody class, culture, and connection in England.",
		quote: "Only connect! That was the whole of her sermon.",
		show: true,
		coverImage: "./assets/covers/howardsEnd.webp"
	},
    {
		title: "Go Tell It on the Mountain",
		author: "James Baldwin",
		publicationDate: "1953",
		description: "A Harlem boy wrestles with faith, family, and identity.",
		quote: "I can climb back up. If it’s wrong, I can always climb back up.",
		show: true,
		coverImage: "./assets/covers/tellMountain.webp"
	},
    {
		title: "The Heart of the Matter",
		author: "Graham Greene",
		publicationDate: "1948",
		description: "Duty, pity, and sin entrap a colonial officer.",
		quote: "A single feat of daring can alter the whole conception of what is possible.",
		show: true,
		coverImage: "./assets/covers/heartMatter.webp"
	},
    {
		title: "Lord of the Flies",
		author: "William Golding",
		publicationDate: "1954",
		description: "Schoolboys on an island build a society that turns savage.",
		quote: "Maybe there is a beast… maybe it's only us.",
		show: true,
		coverImage: "./assets/covers/lordFlies.webp"
	},
    {
		title: "Deliverance",
		author: "James Dickey",
		publicationDate: "1970",
		description: "A wilderness trip becomes a fight for survival and conscience.",
		quote: "I was standing in the most absolute aloneness that I had ever been given.",
		show: true,
		coverImage: "./assets/covers/deliverance.webp"
	},
    {
		title: "A Dance to the Music of Time",
		author: "Anthony Powell",
		publicationDate: "1951",
		description: "A many-volume social chronicle of Britain between the wars and after.",
		quote: "...in those days children were rather out of fashion.",
		show: true,
		coverImage: "./assets/covers/danceMusicTime.webp"
	},
    {
		title: "Point Counter Point",
		author: "Aldous Huxley",
		publicationDate: "1928",
		description: "Interlocking lives create a satirical symphony of ideas and desire.",
		quote: "I wanted to change the world. But I have found that the only thing one can be sure of changing is oneself.",
		show: true,
		coverImage: "./assets/covers/pointCounterPoint.webp"
	},
    {
		title: "The Sun Also Rises",
		author: "Ernest Hemingway",
		publicationDate: "1926",
		description: "Disillusioned expatriates drift through Paris and Pamplona.",
		quote: "Everyone behaves badly--given the chance.",
		show: true,
		coverImage: "./assets/covers/sunAlsoRises.webp"
	},
    {
		title: "The Secret Agent",
		author: "Joseph Conrad",
		publicationDate: "1907",
		description: "A London terrorist plot exposes political cynicism and domestic tragedy.",
		quote: "Madness alone is truly terrifying",
		show: true,
		coverImage: "./assets/covers/secretAgent.webp"
	},
    {
		title: "Nostromo",
		author: "Joseph Conrad",
		publicationDate: "1904",
		description: "Greed and imperial power corrupt a South American republic.",
		quote: "A man possessed of passion is not a bankrupt in life.",
		show: true,
		coverImage: "./assets/covers/nostromo.webp"
	},
    {
		title: "The Rainbow",
		author: "D. H. Lawrence",
		publicationDate: "1915",
		description: "Three generations pursue desire, freedom, and selfhood.",
		quote: "If I were the moon, I know where I would fall down.",
		show: true,
		coverImage: "./assets/covers/rainbow.webp"
	},
    {
		title: "Women in Love",
		author: "D. H. Lawrence",
		publicationDate: "1920",
		description: "Two sisters test love, sex, and modern life.",
		quote: "Instead of chopping yourself down to fit the world, chop the world down to fit yourself.",
		show: true,
		coverImage: "./assets/covers/womenInLove.webp"
	},
    {
		title: "Tropic of Cancer",
		author: "Henry Miller",
		publicationDate: "1934",
		description: "A raw, unruly Paris novel of poverty, art, and appetite.",
		quote: "Everybody says sex is obscene. The only true obscenity is war.",
		show: true,
		coverImage: "./assets/covers/tropicCancer.webp"
	},
    {
		title: "The Naked and the Dead",
		author: "Norman Mailer",
		publicationDate: "1948",
		description: "A platoon in the Pacific reveals war’s machinery and fear.",
		quote: "The natural role of the twentieth-century man is anxiety.",
		show: true,
		coverImage: "./assets/covers/nakedDead.webp"
	},
    {
		title: "Portnoy's Complaint",
		author: "Philip Roth",
		publicationDate: "1969",
		description: "A comic, confessional monologue about sex, family, and neurosis.",
		quote: "You can no more make someone tell the truth than you can force someone to love you.",
		show: true,
		coverImage: "./assets/covers/portnoysComplaint.webp"
	},
    {
		title: "Pale Fire",
		author: "Vladimir Nabokov",
		publicationDate: "1962",
		description: "A poem and its deranged commentary become a literary labyrinth.",
		quote: "Dear Jesus, do something.",
		show: true,
		coverImage: "./assets/covers/paleFire.webp"
	},
    {
		title: "Light in August",
		author: "William Faulkner",
		publicationDate: "1932",
		description: "Strangers and outcasts cross paths in a haunted Southern town.",
		quote: "Dear God, let me be damned a little longer, a little while.",
		show: true,
		coverImage: "./assets/covers/lightAugust.webp"
	},
    {
		title: "On the Road",
		author: "Jack Kerouac",
		publicationDate: "1957",
		description: "Friends chase speed, freedom, and revelation across America.",
		quote: "Nothing behind me, everything ahead of me, as is ever so on the road.",
		show: true,
		coverImage: "./assets/covers/onRoad.webp"
	},
    {
		title: "The Maltese Falcon",
		author: "Dashiell Hammett",
		publicationDate: "1930",
		description: "A private detective hunts a jewel-encrusted bird through lies and murder.",
		quote: "The cheaper the crook, the gaudier the patter.",
		show: true,
		coverImage: "./assets/covers/malteseFalcon.webp"
	},
    {
		title: "Parade's End",
		author: "Ford Madox Ford",
		publicationDate: "1924",
		description: "An honorable Englishman endures war, marriage, and social change.",
		quote: "Higher than the beasts, lower than the angels, stuck in our idiot Eden.",
		show: true,
		coverImage: "./assets/covers/paradesEnd.webp"
	},
    {
		title: "The Age of Innocence",
		author: "Edith Wharton",
		publicationDate: "1920",
		description: "Desire and duty clash in old New York society.",
		quote: "Each time you happen to me all over again.",
		show: true,
		coverImage: "./assets/covers/ageInnocence.webp"
	},
    {
		title: "Zuleika Dobson",
		author: "Max Beerbohm",
		publicationDate: "1911",
		description: "Oxford vanity and romantic absurdity spiral into satire.",
		quote: "Does the stag in his hour of victory need a diploma from the hind?",
		show: true,
		coverImage: "./assets/covers/zuleikaDobson.webp"
	},
    {
		title: "The Moviegoer",
		author: "Walker Percy",
		publicationDate: "1961",
		description: "A drifting New Orleans broker searches for authentic life.",
		quote: "Losing hope is not so bad. There's something worse: losing hope and hiding it from yourself.",
		show: true,
		coverImage: "./assets/covers/movieGoer.webp"
	},
    {
		title: "Death Comes for the Archbishop",
		author: "Willa Cather",
		publicationDate: "1927",
		description: "Two clerics build a diocese across the New Mexican frontier.",
		quote: "Men travel faster now, but I do not know if they go to better things.",
		show: true,
		coverImage: "./assets/covers/deathComesArchbishop.webp"
	},
    {
		title: "From Here to Eternity",
		author: "James Jones",
		publicationDate: "1951",
		description: "Soldiers in Hawaii confront violence, loyalty, and fate before Pearl Harbor.",
		quote: "That was one of the virtues of being a pessimist: nothing was ever as bad as you thought it would be.",
		show: true,
		coverImage: "./assets/covers/hereEternity.webp"
	},
    {
		title: "The Wapshot Chronicle",
		author: "John Cheever",
		publicationDate: "1957",
		description: "An eccentric New England family navigates generational change.",
		quote: "They chronicled the changes in the wind, the arrival and departure of ships, the price of tea and jute and the death of kings.",
		show: true,
		coverImage: "./assets/covers/wapshot.webp"
	},
    {
		title: "The Catcher in the Rye",
		author: "J. D. Salinger",
		publicationDate: "1951",
		description: "A grieving teenager wanders New York railing against phoniness.",
		quote: "Grand. There's a word I really hate. It's a phony. I could puke every time I hear it.",
		show: true,
		coverImage: "./assets/covers/catcherRye.webp"
	},
    {
		title: "A Clockwork Orange",
		author: "Anthony Burgess",
		publicationDate: "1962",
		description: "A violent youth meets state-engineered reform in a slangy dystopia.",
		quote: "We can destroy what we have written, but we cannot unwrite it.",
		show: true,
		coverImage: "./assets/covers/clockworkOrange.webp"
	},
    {
		title: "Of Human Bondage",
		author: "W. Somerset Maugham",
		publicationDate: "1915",
		description: "An orphan’s painful education in love, art, and freedom.",
		quote: "Like all weak men he laid an exaggerated stress on not changing one's mind.",
		show: true,
		coverImage: "./assets/covers/humanBondage.webp"
	},
    {
		title: "Heart of Darkness",
		author: "Joseph Conrad",
		publicationDate: "1902",
		description: "A river journey into colonial brutality becomes a voyage inward.",
		quote: "The horror! The horror!",
		show: true,
		coverImage: "./assets/covers/heartDarkness.webp"
	},
    {
		title: "Main Street",
		author: "Sinclair Lewis",
		publicationDate: "1920",
		description: "A reform-minded woman battles small-town complacency.",
		quote: "The greatest mystery about a human being is not his reaction to sex or praise, but the manner in which he contrives to put in twenty-four hours a day.",
		show: true,
		coverImage: "./assets/covers/mainStreet.webp"
	},
    {
		title: "The House of Mirth",
		author: "Edith Wharton",
		publicationDate: "1905",
		description: "A brilliant woman without money is crushed by society.",
		quote: "Half the trouble in life is caused by pretending there isn't any.",
		show: true,
		coverImage: "./assets/covers/houseMirth.webp"
	},
    {
		title: "The Alexandria Quartet",
		author: "Lawrence Durrell",
		publicationDate: "1957",
		description: "Four linked novels revisit the same passions from shifting perspectives.",
		quote: "A city becomes a world when one loves one of its inhabitants.",
		show: true,
		coverImage: "./assets/covers/alexandria.webp"
	},
    {
		title: "A High Wind in Jamaica",
		author: "Richard Hughes",
		publicationDate: "1929",
		description: "Children kidnapped by pirates reveal the darkness of innocence.",
		quote: "... I would rather have to extract information from the devil himself than from a child.",
		show: true,
		coverImage: "./assets/covers/highWindJamaica.webp"
	},
    {
		title: "A House for Mr Biswas",
		author: "V. S. Naipaul",
		publicationDate: "1961",
		description: "A Trinidad man pursues dignity through the dream of owning a home.",
		quote: "no true effort is ever wasted",
		show: true,
		coverImage: "./assets/covers/houseMrBiswas.webp"
	},
    {
		title: "The Day of the Locust",
		author: "Nathanael West",
		publicationDate: "1939",
		description: "Hollywood desperation curdles into grotesque apocalypse.",
		quote: "Only those who still have hope can benefit from tears.",
		show: true,
		coverImage: "./assets/covers/dayLocust.webp"
	},
    {
		title: "A Farewell to Arms",
		author: "Ernest Hemingway",
		publicationDate: "1929",
		description: "Love blooms and breaks against the chaos of war.",
		quote: "The world breaks every one and afterward many are strong at the broken places.",
		show: true,
		coverImage: "./assets/covers/farewellArms.webp"
	},
    {
		title: "Scoop",
		author: "Evelyn Waugh",
		publicationDate: "1938",
		description: "A bumbling reporter stumbles into an absurd media circus.",
		quote: "News is what a chap who doesn't care much about anything wants to read.",
		show: true,
		coverImage: "./assets/covers/scoop.webp"
	},
    {
		title: "The Prime of Miss Jean Brodie",
		author: "Muriel Spark",
		publicationDate: "1961",
		description: "A charismatic teacher shapes and damages her chosen girls.",
		quote: "To me education is a leading out of what is already there in the pupil's soul.",
		show: true,
		coverImage: "./assets/covers/primeJeanBrodie.webp"
	},
    {
		title: "Finnegans Wake",
		author: "James Joyce",
		publicationDate: "1939",
		description: "A dreamlike verbal universe turns Dublin into myth and pun.",
		quote: "First we feel. Then we fall.",
		show: true,
		coverImage: "./assets/covers/finnegansWake.webp"
	},
    {
		title: "Kim",
		author: "Rudyard Kipling",
		publicationDate: "1901",
		description: "An orphan roams colonial India through espionage and spiritual quest.",
		quote: "This is a brief life, but in its brevity it offers us some splendid moments, some meaningful adventures.",
		show: true,
		coverImage: "./assets/covers/kim.webp"
	},
    {
		title: "A Room with a View",
		author: "E. M. Forster",
		publicationDate: "1908",
		description: "A young woman chooses feeling over convention.",
		quote: "Mistrust all enterprises that require new clothes.",
		show: true,
		coverImage: "./assets/covers/roomView.webp"
	},
    {
		title: "Brideshead Revisited",
		author: "Evelyn Waugh",
		publicationDate: "1945",
		description: "Memory, class, faith, and desire haunt an aristocratic family.",
		quote: "Sometimes, I feel the past and the future pressing so hard on either side that there's no room for the present at all.",
		show: true,
		coverImage: "./assets/covers/bridesheadRevisted.webp"
	},
    {
		title: "The Adventures of Augie March",
		author: "Saul Bellow",
		publicationDate: "1953",
		description: "A Chicago-born drifter improvises his way through modern America.",
		quote: "As long as I could keep improving my mind, I figured, I was doing okay.",
		show: true,
		coverImage: "./assets/covers/augieMarch.webp"
	},
    {
		title: "Angle of Repose",
		author: "Wallace Stegner",
		publicationDate: "1971",
		description: "A historian reconstructs a marriage and the making of the West.",
		quote: "It's easier to die than to move ... at least for the Other Side you don't need trunks.",
		show: true,
		coverImage: "./assets/covers/angleRepose.webp"
	},
    {
		title: "A Bend in the River",
		author: "V. S. Naipaul",
		publicationDate: "1979",
		description: "A merchant watches a postcolonial nation slide into danger.",
		quote: "After all, we make ourselves according to the ideas we have of our possibilities.",
		show: true,
		coverImage: "./assets/covers/bendRiver.webp"
	},
    {
		title: "The Death of the Heart",
		author: "Elizabeth Bowen",
		publicationDate: "1938",
		description: "A young girl’s first love exposes adult cruelty and self-deception.",
		quote: "Some people are moulded by their aspirations, others by their hostilities.",
		show: true,
		coverImage: "./assets/covers/deathHeart.webp"
	},
    {
		title: "Lord Jim",
		author: "Joseph Conrad",
		publicationDate: "1900",
		description: "A disgraced seaman seeks redemption after a single cowardly act.",
		quote: "You shall judge of a man by his foes as well as by his friends.",
		show: true,
		coverImage: "./assets/covers/lordJim.webp"
	},
    {
		title: "Ragtime",
		author: "E. L. Doctorow",
		publicationDate: "1975",
		description: "History and fiction mingle in a restless portrait of America.",
		quote: "I am often asked the question How can the masses permit themselves to be exploited by the few. The answer is By being persuaded to identify with them.",
		show: true,
		coverImage: "./assets/covers/ragtime.webp"
	},
    {
		title: "The Old Wives' Tale",
		author: "Arnold Bennett",
		publicationDate: "1908",
		description: "Two sisters age through modernity, marriage, and regret.",
		quote: ". . . humanity walks ever on a thin crust over terrific abysses.",
		show: true,
		coverImage: "./assets/covers/oldWivesTale.webp"
	},
    {
		title: "The Call of the Wild",
		author: "Jack London",
		publicationDate: "1903",
		description: "A stolen dog answers the pull of instinct and survival.",
		quote: "No, sir. Go to hell sir. It's the best I can do for you sir.",
		show: true,
		coverImage: "./assets/covers/callOfTheWild.webp"
	},
    {
		title: "Loving",
		author: "Henry Green",
		publicationDate: "1945",
		description: "I can't understand why people can't go on just being ordinary to each other even if they are in love.",
		quote: "Loving",
		show: true,
		coverImage: "./assets/covers/loving.webp"
	},
    {
		title: "Midnight's Children",
		author: "Salman Rushdie",
		publicationDate: "1981",
		description: "Children born at India’s independence carry the nation’s fate.",
		quote: "We all owe death a life.",
		show: true,
		coverImage: "./assets/covers/mindnightsChildren.webp"
	},
    {
		title: "Tobacco Road",
		author: "Erskine Caldwell",
		publicationDate: "1932",
		description: "Grotesque Depression-era poverty devastates a Georgia family.",
		quote: "Preachers has got to preach against something. It wouldn’t do them no good to preach for everything. They got to be against something every time.",
		show: true,
		coverImage: "./assets/covers/tobaccoRoad.webp"
	},
    {
		title: "Ironweed",
		author: "William Kennedy",
		publicationDate: "1983",
		description: "An alcoholic drifter in Albany is haunted by guilt and ghosts.",
		quote: "One never knows the potential within the human breast.",
		show: true,
		coverImage: "./assets/covers/ironweed.webp"
	},
    {
		title: "The Magus",
		author: "John Fowles",
		publicationDate: "1965",
		description: "A young Englishman is drawn into elaborate psychological games.",
		quote: "Duty largely consists of pretending that the trivial is critical.",
		show: true,
		coverImage: "./assets/covers/magus.webp"
	},
    {
		title: "Wide Sargasso Sea",
		author: "Jean Rhys",
		publicationDate: "1966",
		description: "A Caribbean prequel restores the voice of Rochester’s first wife.",
		quote: "I thought if I told no one it might not be true.",
		show: true,
		coverImage: "./assets/covers/wideSargassoSea.webp"
	},
    {
		title: "Under the Net",
		author: "Iris Murdoch",
		publicationDate: "1954",
		description: "A comic London quest tests art, language, and friendship.",
		quote: "Hegel says that Truth is a great word and the thing is greater still. With Dave we never seemed to get past the word.",
		show: true,
		coverImage: "./assets/covers/underNet.webp"
	},
    {
		title: "Sophie's Choice",
		author: "William Styron",
		publicationDate: "1979",
		description: "A writer befriends two troubled lovers shadowed by Auschwitz.",
		quote: "The query: 'At Auschwitz, tell me, where was God?' And the answer: 'Where was man?'",
		show: true,
		coverImage: "./assets/covers/sophiesChoice.webp"
	},
    {
		title: "The Sheltering Sky",
		author: "Paul Bowles",
		publicationDate: "1949",
		description: "Travel in North Africa becomes existential disintegration.",
		quote: "The soul is the weariest part of the body.",
		show: true,
		coverImage: "./assets/covers/shelteringSky.webp"
	},
    {
		title: "The Postman Always Rings Twice",
		author: "James M. Cain",
		publicationDate: "1934",
		description: "An affair turns murderous in a lean noir classic.",
		quote: "Stealing a man's wife, that's nothing, but stealing his car, that's larceny.", 
		show: true,
		coverImage: "./assets/covers/postmanRings.webp"
	},
    {
		title: "The Ginger Man",
		author: "J. P. Donleavy",
		publicationDate: "1955",
		description: "A reckless American law student drinks and blunders through Dublin.",
		quote: "All I want is one break which is not my neck.",
		show: true,
		coverImage: "./assets/covers/gingerMan.webp"
	},
    {
		title: "The Magnificent Ambersons",
		author: "Booth Tarkington",
		publicationDate: "1918",
		description: "An old family declines as modern America remakes its world.",
		quote: "Whatever does not pretend at all has style enough.",
		show: true,
		coverImage: "./assets/covers/magnificentAmbersons.webp"

	}
];
