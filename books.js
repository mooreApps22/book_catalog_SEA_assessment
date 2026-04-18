const books = [
    {
		title: "Ulysses",
		author: "James Joyce",
		publicationDate: "1922",
		description: "A single day in Dublin becomes an epic of consciousness.",
		quote: "Yes I said yes",
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
		quote: "Welcome, O life!",
		show: true,
		coverImage: "./assets/covers/portrait.webp"
	},
    {
		title: "Lolita",
		author: "Vladimir Nabokov",
		publicationDate: "1955",
		description: "A dazzling, disturbing tale of obsession and manipulation.",
		quote: "light of my life",
		show: true,
		coverImage: "./assets/covers/lolita.webp"
	},
    {
		title: "Brave New World",
		author: "Aldous Huxley",
		publicationDate: "1932",
		description: "A pleasure-soaked dystopia trades freedom for stability.",
		quote: "Ending is better",
		show: true,
		coverImage: "./assets/covers/braveNewWorld.webp"
	},
    {
		title: "The Sound and the Fury",
		author: "William Faulkner",
		publicationDate: "1929",
		description: "The collapse of a Southern family told through fractured minds.",
		quote: "I give you the mausoleum",
		show: true,
		coverImage: "./assets/covers/soundAndFury.webp"
	},
    {
		title: "Catch-22",
		author: "Joseph Heller",
		publicationDate: "1961",
		description: "A bombardier faces the absurd logic of war and bureaucracy.",
		quote: "That's some catch",
		show: true,
		coverImage: "./assets/covers/catch22.webp"
	},
    {
		title: "Darkness at Noon",
		author: "Arthur Koestler",
		publicationDate: "1940",
		description: "An imprisoned revolutionary confronts ideology, guilt, and betrayal.",
		quote: "The Party never errs",
		show: true,
		coverImage: "./assets/covers/darknessAtNoon.webp"
	},
    {
		title: "Sons and Lovers",
		author: "D. H. Lawrence",
		publicationDate: "1913",
		description: "A young man struggles between desire, art, and his mother’s hold.",
		quote: "It hurts to love",
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
		quote: "Life is like music",
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
		quote: "I, Claudius",
		show: true,
		coverImage: "./assets/covers/iClaudius.webp"
	},
    {
		title: "To the Lighthouse",
		author: "Virginia Woolf",
		publicationDate: "1927",
		description: "A family holiday becomes a meditation on time, art, and loss.",
		quote: "Yes, of course",
		show: true,
		coverImage: "./assets/covers/lighthouse.webp"
	},
    {
		title: "An American Tragedy",
		author: "Theodore Dreiser",
		publicationDate: "1925",
		description: "Ambition, desire, and class pressure drive a young man toward crime.",
		quote: "He wanted so much",
		show: true,
		coverImage: "./assets/covers/americanTragedy.webp"
	},
    {
		title: "The Heart Is a Lonely Hunter",
		author: "Carson McCullers",
		publicationDate: "1940",
		description: "Lonely Southerners seek connection around a silent confidant.",
		quote: "The heart is a lonely hunter",
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
		quote: "I am invisible",
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
		quote: "I want, I want",
		show: true,
		coverImage: "./assets/covers/hendersonRainKing.webp"
	},
    {
		title: "Appointment in Samarra",
		author: "John O'Hara",
		publicationDate: "1934",
		description: "One reckless act sends a socialite toward ruin.",
		quote: "He had done it",
		show: true,
		coverImage: "./assets/covers/appointmentSamarra.webp"
	},
    {
		title: "U.S.A. (trilogy)",
		author: "John Dos Passos",
		publicationDate: "1930",
		description: "A collage of lives maps America’s first half-century.",
		quote: "All right, we're going",
		show: true,
		coverImage: "./assets/covers/usa.webp"
	},
    {
		title: "Winesburg, Ohio",
		author: "Sherwood Anderson",
		publicationDate: "1919",
		description: "Linked stories expose loneliness and longing in a small town.",
		quote: "He wanted to talk",
		show: true,
		coverImage: "./assets/covers/winesburg.webp"
	},
    {
		title: "A Passage to India",
		author: "E. M. Forster",
		publicationDate: "1924",
		description: "Friendship and empire collide after a trip to the Marabar Caves.",
		quote: "Only connect",
		show: true,
		coverImage: "./assets/covers/passageIndia.webp"
	},
    {
		title: "The Wings of the Dove",
		author: "Henry James",
		publicationDate: "1902",
		description: "Love, illness, and money entwine in a refined moral drama.",
		quote: "She waited",
		show: true,
		coverImage: "./assets/covers/wingsDove.webp"
	},
    {
		title: "The Ambassadors",
		author: "Henry James",
		publicationDate: "1903",
		description: "A middle-aged envoy discovers a richer life in Europe.",
		quote: "Live all you can",
		show: true,
		coverImage: "./assets/covers/ambassadors.webp"
	},
    {
		title: "Tender Is the Night",
		author: "F. Scott Fitzgerald",
		publicationDate: "1934",
		description: "A glamorous marriage decays on the Riviera.",
		quote: "Tender is the night",
		show: true,
		coverImage: "./assets/covers/tenderNight.webp"
	},
    {
		title: "The Studs Lonigan Trilogy",
		author: "James T. Farrell",
		publicationDate: "1932",
		description: "A Chicago youth comes of age amid brutality and disappointment.",
		quote: "He kept going",
		show: true,
		coverImage: "./assets/covers/studsLonigan.webp"
	},
    {
		title: "The Good Soldier",
		author: "Ford Madox Ford",
		publicationDate: "1915",
		description: "An unreliable narrator untangles adultery, deception, and collapse.",
		quote: "This is the saddest story",
		show: true,
		coverImage: "./assets/covers/goodSoldier.webp"
	},
    {
		title: "Animal Farm",
		author: "George Orwell",
		publicationDate: "1945",
		description: "A barnyard revolution turns into tyranny.",
		quote: "All animals are equal",
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
		quote: "She looked out",
		show: true,
		coverImage: "./assets/covers/sisterCarrie.webp"
	},
    {
		title: "A Handful of Dust",
		author: "Evelyn Waugh",
		publicationDate: "1934",
		description: "A savage satire of marriage, class, and modern emptiness.",
		quote: "Dust everywhere",
		show: true,
		coverImage: "./assets/covers/handfulDust.webp"
	},
    {
		title: "As I Lay Dying",
		author: "William Faulkner",
		publicationDate: "1930",
		description: "A poor family carries their mother’s body across Mississippi.",
		quote: "My mother is a fish",
		show: true,
		coverImage: "./assets/covers/layDying.webp"
	},
    {
		title: "All the King's Men",
		author: "Robert Penn Warren",
		publicationDate: "1946",
		description: "A populist politician rises and rots in power.",
		quote: "The end of man is knowledge",
		show: true,
		coverImage: "./assets/covers/kingsMen.webp"
	},
    {
		title: "The Bridge of San Luis Rey",
		author: "Thornton Wilder",
		publicationDate: "1927",
		description: "Five deaths prompt a search for meaning and providence.",
		quote: "Either we live by accident",
		show: true,
		coverImage: "./assets/covers/bridgeOfSanLuisRey.webp"
	},
    {
		title: "Howards End",
		author: "E. M. Forster",
		publicationDate: "1910",
		description: "Three families embody class, culture, and connection in England.",
		quote: "Only connect",
		show: true,
		coverImage: "./assets/covers/howardsEnd.webp"
	},
    {
		title: "Go Tell It on the Mountain",
		author: "James Baldwin",
		publicationDate: "1953",
		description: "A Harlem boy wrestles with faith, family, and identity.",
		quote: "John would be a preacher",
		show: true,
		coverImage: "./assets/covers/tellMountain.webp"
	},
    {
		title: "The Heart of the Matter",
		author: "Graham Greene",
		publicationDate: "1948",
		description: "Duty, pity, and sin entrap a colonial officer.",
		quote: "He was too honest",
		show: true,
		coverImage: "./assets/covers/heartMatter.webp"
	},
    {
		title: "Lord of the Flies",
		author: "William Golding",
		publicationDate: "1954",
		description: "Schoolboys on an island build a society that turns savage.",
		quote: "Maybe there is a beast",
		show: true,
		coverImage: "./assets/covers/lordFlies.webp"
	},
    {
		title: "Deliverance",
		author: "James Dickey",
		publicationDate: "1970",
		description: "A wilderness trip becomes a fight for survival and conscience.",
		quote: "This is not my life",
		show: true,
		coverImage: "./assets/covers/deliverance.webp"
	},
    {
		title: "A Dance to the Music of Time",
		author: "Anthony Powell",
		publicationDate: "1951",
		description: "A many-volume social chronicle of Britain between the wars and after.",
		quote: "Time's music",
		show: true,
		coverImage: "./assets/covers/danceMusicTime.webp"
	},
    {
		title: "Point Counter Point",
		author: "Aldous Huxley",
		publicationDate: "1928",
		description: "Interlocking lives create a satirical symphony of ideas and desire.",
		quote: "So many voices",
		show: true,
		coverImage: "./assets/covers/pointCounterPoint.webp"
	},
    {
		title: "The Sun Also Rises",
		author: "Ernest Hemingway",
		publicationDate: "1926",
		description: "Disillusioned expatriates drift through Paris and Pamplona.",
		quote: "Isn't it pretty to think so",
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
		quote: "Material interests",
		show: true,
		coverImage: "./assets/covers/nostromo.webp"
	},
    {
		title: "The Rainbow",
		author: "D. H. Lawrence",
		publicationDate: "1915",
		description: "Three generations pursue desire, freedom, and selfhood.",
		quote: "She wanted to live",
		show: true,
		coverImage: "./assets/covers/rainbow.webp"
	},
    {
		title: "Women in Love",
		author: "D. H. Lawrence",
		publicationDate: "1920",
		description: "Two sisters test love, sex, and modern life.",
		quote: "One must be free",
		show: true,
		coverImage: "./assets/covers/womenInLove.webp"
	},
    {
		title: "Tropic of Cancer",
		author: "Henry Miller",
		publicationDate: "1934",
		description: "A raw, unruly Paris novel of poverty, art, and appetite.",
		quote: "I have no money",
		show: true,
		coverImage: "./assets/covers/tropicCancer.webp"
	},
    {
		title: "The Naked and the Dead",
		author: "Norman Mailer",
		publicationDate: "1948",
		description: "A platoon in the Pacific reveals war’s machinery and fear.",
		quote: "The dead know nothing",
		show: true,
		coverImage: "./assets/covers/nakedDead.webp"
	},
    {
		title: "Portnoy's Complaint",
		author: "Philip Roth",
		publicationDate: "1969",
		description: "A comic, confessional monologue about sex, family, and neurosis.",
		quote: "Doctor, I feel sick",
		show: true,
		coverImage: "./assets/covers/portnoysComplaint.webp"
	},
    {
		title: "Pale Fire",
		author: "Vladimir Nabokov",
		publicationDate: "1962",
		description: "A poem and its deranged commentary become a literary labyrinth.",
		quote: "pale fire",
		show: true,
		coverImage: "./assets/covers/paleFire.webp"
	},
    {
		title: "Light in August",
		author: "William Faulkner",
		publicationDate: "1932",
		description: "Strangers and outcasts cross paths in a haunted Southern town.",
		quote: "Memory believes",
		show: true,
		coverImage: "./assets/covers/lightAugust.webp"
	},
    {
		title: "On the Road",
		author: "Jack Kerouac",
		publicationDate: "1957",
		description: "Friends chase speed, freedom, and revelation across America.",
		quote: "the only people for me",
		show: true,
		coverImage: "./assets/covers/onRoad.webp"
	},
    {
		title: "The Maltese Falcon",
		author: "Dashiell Hammett",
		publicationDate: "1930",
		description: "A private detective hunts a jewel-encrusted bird through lies and murder.",
		quote: "the stuff that dreams are made of",
		show: true,
		coverImage: "./assets/covers/malteseFalcon.webp"
	},
    {
		title: "Parade's End",
		author: "Ford Madox Ford",
		publicationDate: "1924",
		description: "An honorable Englishman endures war, marriage, and social change.",
		quote: "He was the last Tory",
		show: true,
		coverImage: "./assets/covers/paradesEnd.webp"
	},
    {
		title: "The Age of Innocence",
		author: "Edith Wharton",
		publicationDate: "1920",
		description: "Desire and duty clash in old New York society.",
		quote: "It was less trouble",
		show: true,
		coverImage: "./assets/covers/ageInnocence.webp"
	},
    {
		title: "Zuleika Dobson",
		author: "Max Beerbohm",
		publicationDate: "1911",
		description: "Oxford vanity and romantic absurdity spiral into satire.",
		quote: "She was fatal",
		show: true,
		coverImage: "./assets/covers/zuleikaDobson.webp"
	},
    {
		title: "The Moviegoer",
		author: "Walker Percy",
		publicationDate: "1961",
		description: "A drifting New Orleans broker searches for authentic life.",
		quote: "The search",
		show: true,
		coverImage: "./assets/covers/movieGoer.webp"
	},
    {
		title: "Death Comes for the Archbishop",
		author: "Willa Cather",
		publicationDate: "1927",
		description: "Two clerics build a diocese across the New Mexican frontier.",
		quote: "The land said more",
		show: true,
		coverImage: "./assets/covers/deathComesArchbishop.webp"
	},
    {
		title: "From Here to Eternity",
		author: "James Jones",
		publicationDate: "1951",
		description: "Soldiers in Hawaii confront violence, loyalty, and fate before Pearl Harbor.",
		quote: "A man can take only so much",
		show: true,
		coverImage: "./assets/covers/hereEternity.webp"
	},
    {
		title: "The Wapshot Chronicle",
		author: "John Cheever",
		publicationDate: "1957",
		description: "An eccentric New England family navigates generational change.",
		quote: "The river kept on",
		show: true,
		coverImage: "./assets/covers/wapshot.webp"
	},
    {
		title: "The Catcher in the Rye",
		author: "J. D. Salinger",
		publicationDate: "1951",
		description: "A grieving teenager wanders New York railing against phoniness.",
		quote: "Don't ever tell anybody anything",
		show: true,
		coverImage: "./assets/covers/catcherRye.webp"
	},
    {
		title: "A Clockwork Orange",
		author: "Anthony Burgess",
		publicationDate: "1962",
		description: "A violent youth meets state-engineered reform in a slangy dystopia.",
		quote: "What's it going to be then",
		show: true,
		coverImage: "./assets/covers/clockworkOrange.webp"
	},
    {
		title: "Of Human Bondage",
		author: "W. Somerset Maugham",
		publicationDate: "1915",
		description: "An orphan’s painful education in love, art, and freedom.",
		quote: "He longed to escape",
		show: true,
		coverImage: "./assets/covers/humanBondage.webp"
	},
    {
		title: "Heart of Darkness",
		author: "Joseph Conrad",
		publicationDate: "1902",
		description: "A river journey into colonial brutality becomes a voyage inward.",
		quote: "The horror!",
		show: true,
		coverImage: "./assets/covers/heartDarkness.webp"
	},
    {
		title: "Main Street",
		author: "Sinclair Lewis",
		publicationDate: "1920",
		description: "A reform-minded woman battles small-town complacency.",
		quote: "Main Street",
		show: true,
		coverImage: "./assets/covers/mainStreet.webp"
	},
    {
		title: "The House of Mirth",
		author: "Edith Wharton",
		publicationDate: "1905",
		description: "A brilliant woman without money is crushed by society.",
		quote: "I can’t be happy",
		show: true,
		coverImage: "./assets/covers/houseMirth.webp"
	},
    {
		title: "The Alexandria Quartet",
		author: "Lawrence Durrell",
		publicationDate: "1957",
		description: "Four linked novels revisit the same passions from shifting perspectives.",
		quote: "Alexandria",
		show: true,
		coverImage: "./assets/covers/alexandria.webp"
	},
    {
		title: "A High Wind in Jamaica",
		author: "Richard Hughes",
		publicationDate: "1929",
		description: "Children kidnapped by pirates reveal the darkness of innocence.",
		quote: "They were children",
		show: true,
		coverImage: "./assets/covers/highWindJamaica.webp"
	},
    {
		title: "A House for Mr Biswas",
		author: "V. S. Naipaul",
		publicationDate: "1961",
		description: "A Trinidad man pursues dignity through the dream of owning a home.",
		quote: "How terrible it would be",
		show: true,
		coverImage: "./assets/covers/houseMrBiswas.webp"
	},
    {
		title: "The Day of the Locust",
		author: "Nathanael West",
		publicationDate: "1939",
		description: "Hollywood desperation curdles into grotesque apocalypse.",
		quote: "Burning of Los Angeles",
		show: true,
		coverImage: "./assets/covers/dayLocust.webp"
	},
    {
		title: "A Farewell to Arms",
		author: "Ernest Hemingway",
		publicationDate: "1929",
		description: "Love blooms and breaks against the chaos of war.",
		quote: "the world breaks everyone",
		show: true,
		coverImage: "./assets/covers/farewellArms.webp"
	},
    {
		title: "Scoop",
		author: "Evelyn Waugh",
		publicationDate: "1938",
		description: "A bumbling reporter stumbles into an absurd media circus.",
		quote: "Up to a point, Lord Copper",
		show: true,
		coverImage: "./assets/covers/scoop.webp"
	},
    {
		title: "The Prime of Miss Jean Brodie",
		author: "Muriel Spark",
		publicationDate: "1961",
		description: "A charismatic teacher shapes and damages her chosen girls.",
		quote: "Give me a girl",
		show: true,
		coverImage: "./assets/covers/primeJeanBrodie.webp"
	},
    {
		title: "Finnegans Wake",
		author: "James Joyce",
		publicationDate: "1939",
		description: "A dreamlike verbal universe turns Dublin into myth and pun.",
		quote: "riverrun",
		show: true,
		coverImage: "./assets/covers/finnegansWake.webp"
	},
    {
		title: "Kim",
		author: "Rudyard Kipling",
		publicationDate: "1901",
		description: "An orphan roams colonial India through espionage and spiritual quest.",
		quote: "Who is Kim",
		show: true,
		coverImage: "./assets/covers/kim.webp"
	},
    {
		title: "A Room with a View",
		author: "E. M. Forster",
		publicationDate: "1908",
		description: "A young woman chooses feeling over convention.",
		quote: "One doesn't like one’s emotions",
		show: true,
		coverImage: "./assets/covers/roomView.webp"
	},
    {
		title: "Brideshead Revisited",
		author: "Evelyn Waugh",
		publicationDate: "1945",
		description: "Memory, class, faith, and desire haunt an aristocratic family.",
		quote: "Et in Arcadia ego",
		show: true,
		coverImage: "./assets/covers/bridesheadRevisted.webp"
	},
    {
		title: "The Adventures of Augie March",
		author: "Saul Bellow",
		publicationDate: "1953",
		description: "A Chicago-born drifter improvises his way through modern America.",
		quote: "I am an American",
		show: true,
		coverImage: "./assets/covers/augieMarch.webp"
	},
    {
		title: "Angle of Repose",
		author: "Wallace Stegner",
		publicationDate: "1971",
		description: "A historian reconstructs a marriage and the making of the West.",
		quote: "The past is always a rebuke",
		show: true,
		coverImage: "./assets/covers/angleRepose.webp"
	},
    {
		title: "A Bend in the River",
		author: "V. S. Naipaul",
		publicationDate: "1979",
		description: "A merchant watches a postcolonial nation slide into danger.",
		quote: "The world is what it is",
		show: true,
		coverImage: "./assets/covers/bendRiver.webp"
	},
    {
		title: "The Death of the Heart",
		author: "Elizabeth Bowen",
		publicationDate: "1938",
		description: "A young girl’s first love exposes adult cruelty and self-deception.",
		quote: "She felt everything",
		show: true,
		coverImage: "./assets/covers/deathHeart.webp"
	},
    {
		title: "Lord Jim",
		author: "Joseph Conrad",
		publicationDate: "1900",
		description: "A disgraced seaman seeks redemption after a single cowardly act.",
		quote: "He was one of us",
		show: true,
		coverImage: "./assets/covers/lordJim.webp"
	},
    {
		title: "Ragtime",
		author: "E. L. Doctorow",
		publicationDate: "1975",
		description: "History and fiction mingle in a restless portrait of America.",
		quote: "There was no Negro problem",
		show: true,
		coverImage: "./assets/covers/ragtime.webp"
	},
    {
		title: "The Old Wives' Tale",
		author: "Arnold Bennett",
		publicationDate: "1908",
		description: "Two sisters age through modernity, marriage, and regret.",
		quote: "Life had gone on",
		show: true,
		coverImage: "./assets/covers/oldWivesTale.webp"
	},
    {
		title: "The Call of the Wild",
		author: "Jack London",
		publicationDate: "1903",
		description: "A stolen dog answers the pull of instinct and survival.",
		quote: "the call",
		show: true,
		coverImage: "./assets/covers/callOfTheWild.webp"
	},
    {
		title: "Loving",
		author: "Henry Green",
		publicationDate: "1945",
		description: "Servants and aristocrats circle one another in wartime Ireland.",
		quote: "Loving",
		show: true,
		coverImage: "./assets/covers/loving.webp"
	},
    {
		title: "Midnight's Children",
		author: "Salman Rushdie",
		publicationDate: "1981",
		description: "Children born at India’s independence carry the nation’s fate.",
		quote: "I was born",
		show: true,
		coverImage: "./assets/covers/mindnightsChildren.webp"
	},
    {
		title: "Tobacco Road",
		author: "Erskine Caldwell",
		publicationDate: "1932",
		description: "Grotesque Depression-era poverty devastates a Georgia family.",
		quote: "Hungry all the time",
		show: true,
		coverImage: "./assets/covers/tobaccoRoad.webp"
	},
    {
		title: "Ironweed",
		author: "William Kennedy",
		publicationDate: "1983",
		description: "An alcoholic drifter in Albany is haunted by guilt and ghosts.",
		quote: "The dead remember",
		show: true,
		coverImage: "./assets/covers/ironweed.webp"
	},
    {
		title: "The Magus",
		author: "John Fowles",
		publicationDate: "1965",
		description: "A young Englishman is drawn into elaborate psychological games.",
		quote: "Nothing is as it seems",
		show: true,
		coverImage: "./assets/covers/magus.webp"
	},
    {
		title: "Wide Sargasso Sea",
		author: "Jean Rhys",
		publicationDate: "1966",
		description: "A Caribbean prequel restores the voice of Rochester’s first wife.",
		quote: "There is always the other side",
		show: true,
		coverImage: "./assets/covers/wideSargassoSea.webp"
	},
    {
		title: "Under the Net",
		author: "Iris Murdoch",
		publicationDate: "1954",
		description: "A comic London quest tests art, language, and friendship.",
		quote: "Words are not enough",
		show: true,
		coverImage: "./assets/covers/underNet.webp"
	},
    {
		title: "Sophie's Choice",
		author: "William Styron",
		publicationDate: "1979",
		description: "A writer befriends two troubled lovers shadowed by Auschwitz.",
		quote: "I can’t choose",
		show: true,
		coverImage: "./assets/covers/sophiesChoice.webp"
	},
    {
		title: "The Sheltering Sky",
		author: "Paul Bowles",
		publicationDate: "1949",
		description: "Travel in North Africa becomes existential disintegration.",
		quote: "Because we don't know",
		show: true,
		coverImage: "./assets/covers/shelteringSky.webp"
	},
    {
		title: "The Postman Always Rings Twice",
		author: "James M. Cain",
		publicationDate: "1934",
		description: "An affair turns murderous in a lean noir classic.",
		quote: "I loved her", 
		show: true,
		coverImage: "./assets/covers/postmanRings.webp"
	},
    {
		title: "The Ginger Man",
		author: "J. P. Donleavy",
		publicationDate: "1955",
		description: "A reckless American law student drinks and blunders through Dublin.",
		quote: "Dangerfield was here",
		show: true,
		coverImage: "./assets/covers/gingerMan.webp"
	},
    {
		title: "The Magnificent Ambersons",
		author: "Booth Tarkington",
		publicationDate: "1918",
		description: "An old family declines as modern America remakes its world.",
		quote: "Major Amberson had been magnificent",
		show: true,
		coverImage: "./assets/covers/magnificentAmbersons.webp"

	}
];
