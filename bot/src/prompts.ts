const prompts = [
  "A futuristic city ruled by Spider-Man",
  "Batman sipping coffee in a cozy café",
  "Harry Potter in a modern business suit",
  "Darth Vader baking cookies in a kitchen",
  "A Minion working as a barista",
  "The Hulk teaching yoga",
  "Spongebob in a sci-fi space suit",
  "A robot version of Homer Simpson",
  "Mario and Luigi running a sushi restaurant",
  "Iron Man designing a luxury sports car",
  "Yoda running for president with a witty campaign slogan",
  "Winnie the Pooh as a martial artist",
  "Pikachu as a DJ at a music festival",
  "Elsa from Frozen skateboarding in a modern city",
  "The Joker painting a happy mural",
  "Sherlock Holmes as a futuristic hacker",
  "Superman enjoying a sunny day at the beach",
  "A pirate ship sailing in a sea of orange soda",
  "Godzilla doing karaoke in Tokyo",
  "A unicorn playing video games",
  "Shrek as a king in a medieval painting style",
  "Thor working as a stand-up comedian",
  "A dinosaur eating ice cream in a park",
  "The Avengers in a rock band",
  "A stormtrooper shopping for groceries",
  "Scooby-Doo and the gang solving mysteries in the metaverse",
  "A panda surfing on a giant wave",
  "Deadpool hosting a cooking show",
  "A penguin driving a monster truck",
  "Homer Simpson as a ninja warrior",
  "A sloth exploring a futuristic city",
  "The cast of Friends at a cyberpunk coffee shop",
  "A dragon dancing in a disco club",
  "A robot chef cooking gourmet meals",
  "Dobby from Harry Potter running a taco truck",
  "Captain Jack Sparrow in a science lab",
  "A giraffe skateboarding in a half-pipe",
  "Optimus Prime working as a construction worker",
  "Snoopy flying a futuristic drone",
  "Tom and Jerry in a steampunk world",
  "Gandalf casting spells in a video game",
  "A polar bear as a sushi chef",
  "Mickey Mouse as a graffiti artist",
  "A mermaid attending a rock concert",
  "Simba from The Lion King as a race car driver",
  "An alien playing basketball in space",
  "Chewbacca teaching a dance class",
  "E.T. riding a hoverboard",
  "Sonic the Hedgehog as a fitness trainer",
  "A knight in shining armor on a jet ski",
  "A robot petting a cat on Mars",
  "Buzz Lightyear shopping for new gadgets",
  "A medieval king with a smartphone",
  "A futuristic samurai battling robots",
  "Rapunzel with LED hair lights",
  "A T-Rex as a professional wrestler",
  "A vampire working at a donut shop",
  "A cowboy riding a hover-horse",
  "A talking cactus hosting a podcast",
  "A werewolf as a personal trainer",
  "A zombie playing a grand piano",
  "The cast of Stranger Things in a fantasy RPG world",
  "A robot dog exploring an underwater city",
  "A cyborg cowboy in a desert duel",
  "A ninja turtle painting a masterpiece",
  "A dragon roasting marshmallows",
  "Sully and Mike from Monsters, Inc. in a space opera",
  "A robot barista serving coffee to aliens",
  "A wizard using a laptop to cast spells",
  "A unicorn DJing at a rave",
  "A steampunk version of Hogwarts",
  "A detective dog solving crimes in New York",
  "A robot building sandcastles on the beach",
  "A superhero eating tacos in their costume",
  "A robot playing chess against a human",
  "Santa Claus in a sci-fi sleigh",
  "A ghost chef running a haunted restaurant",
  "An octopus running a sushi bar",
  "A teddy bear as an MMA fighter",
  "A mermaid reading a book in a library",
  "A raccoon as a race car driver",
  "A robot making balloon animals",
  "A cyborg cat chasing laser pointers",
  "A futuristic elf designing fashion",
  "A ninja fighting robots in a neon city",
  "A robot orchestra performing in space",
  "A robot superhero saving the day",
  "A talking toaster giving life advice",
  "A sloth racing in a futuristic hoverboard competition",
  "A panda flying a spaceship",
  "A dragon guarding a treasure in a modern bank",
  "A robot chef competing on a cooking show",
  "A koala as a tech startup CEO",
  "A dog astronaut exploring an alien planet",
  "A shark as a stand-up comedian",
  "A dinosaur attending a disco party",
  "A wizard summoning pizza",
  "A penguin working as a delivery driver",
  "A ghost playing video games",
  "A robot writing poetry",
  "A cat leading a rock band",
  "A hamster as an astronaut",
  "A robot artist painting a sunset",
  "A futuristic wizard using VR to cast spells",
  "A knight battling a robot dragon",
  "A robot bartender mixing glowing cocktails",
  "A dinosaur running a tech company",
  "A robot exploring an ancient ruin",
  "A superhero on vacation in Hawaii",
  "A robot solving a Rubik's cube",
  "A cat playing the piano in a jazz club",
  "A robot lifeguard at the beach",
  "A monkey astronaut in a space station",
  "A raccoon burglar stealing shiny objects",
  "A robot gardener tending a futuristic garden",
  "A penguin as a private investigator",
  "A robot dancer performing in a neon-lit club",
  "A wizard teaching a robot to use magic",
  "A dinosaur as a pop music star",
  "A robot exploring a haunted house",
  "A pirate ghost on a treasure hunt",
  "A dragon as a high school teacher",
  "A cat detective solving mysteries",
  "A robot scientist inventing new gadgets",
  "A sloth running a marathon",
  "A dragon librarian organizing books",
  "A robot fish swimming in a digital ocean",
  "A superhero teaching kids how to fly",
  "A robot bee pollinating flowers",
  "A raccoon chef making gourmet dishes",
  "A robot dog competing in an agility contest",
  "A monkey DJ mixing tunes at a jungle party",
  "A penguin artist painting a masterpiece",
  "A wizard running a coffee shop",
  "A dinosaur cooking in a kitchen",
  "A robot knight battling for justice",
  "A superhero working at a bakery",
  "A robot adventurer exploring space",
  "A dragon as a pop culture icon",
  "A ghost dog as a friendly pet",
  "A robot as a professional photographer",
  "A raccoon in a spaceship adventure",
  "A cat wizard casting magical spells",
  "A robot creating futuristic art",
  "A superhero designing their own gadgets",
  "A robot solving ancient mysteries",
  "A dragon learning how to play guitar",
  "A robot traveling through time",
  "A penguin as a tech entrepreneur",
  "A dinosaur solving crimes in a detective story",
  "A wizard experimenting with technology",
  "A robot competing in a futuristic sports game",
  "A superhero saving the city from a robot invasion",
  "A robot rebuilding a post-apocalyptic world",
  "A dragon cooking barbecue",
  "A robot racing in a hovercar competition",
  "A penguin leading an expedition to the Arctic",
  "A dinosaur as a professional surfer",
  "A wizard using AI to enhance magic spells",
  "A robot climbing a futuristic skyscraper",
  "A raccoon competing in a cooking competition",
  "A superhero teaming up with a robot sidekick",
  "A robot learning how to play piano",
  "A dragon as a movie star",
  "A wizard exploring a digital universe",
  "A robot creating a futuristic city",
  "A superhero inventing a new kind of energy source",
  "A dragon protecting a magical artifact",
  "A wizard teaming up with a robot",
  "A robot artist designing futuristic sculptures",
  "A penguin learning how to fly",
  "A dinosaur as a professional athlete",
  "A superhero designing their own headquarters",
  "A robot helping to rebuild a futuristic world",
];

export const animePopCulturePrompts = [
  "Naruto eating ramen with SpongeBob in Bikini Bottom",
  "Luffy from One Piece teaching Goku how to sail",
  "Sasuke and Batman teaming up to solve a mystery",
  "Deku from My Hero Academia training with Captain America",
  "Eren Yeager turning into a Titan at a comic convention",
  "Tanjiro and Nezuko from Demon Slayer at a cherry blossom festival",
  "Levi Ackerman from Attack on Titan as a barista in Starbucks",
  "Sailor Moon and Wonder Woman fighting a giant robot",
  "Ash Ketchum catching Pokémon in Jurassic Park",
  "Kirito and Asuna from Sword Art Online fighting with lightsabers",
  "Light Yagami from Death Note playing chess with Sherlock Holmes",
  "Edward Elric from Fullmetal Alchemist fixing Iron Man's suit",
  "Jiraiya writing a manga with Stan Lee",
  "Ichigo Kurosaki from Bleach battling a xenomorph from Alien",
  "Gon and Killua from Hunter x Hunter exploring Hogwarts",
  "Inuyasha fighting a zombie horde alongside Daryl Dixon",
  "Saitama from One Punch Man competing in a food-eating contest",
  "Zoro from One Piece lost in the Star Wars galaxy",
  "Sakura Haruno designing outfits with Barbie",
  "Vegeta and Thor sparring in Asgard",
  "Natsu Dragneel from Fairy Tail lighting the Olympic torch",
  "Goku and Superman arm wrestling on the moon",
  "Ryuk from Death Note at a haunted house with Ghostbusters",
  "Hinata from Haikyuu playing volleyball with the Avengers",
  "Spike Spiegel from Cowboy Bebop bounty hunting in Gotham City",
  "Kenshin Himura from Rurouni Kenshin fighting ninjas in New York City",
  "Mikasa Ackerman training with Black Widow",
  "Shoto Todoroki from My Hero Academia battling Elsa from Frozen",
  "All Might lifting the Millennium Falcon",
  "Rem and Ram from Re:Zero baking cookies for Cookie Monster",
  "Rengoku from Demon Slayer roasting marshmallows with Deadpool",
  "L from Death Note analyzing a crime scene with Scooby-Doo",
  "Violet Evergarden delivering letters to characters from Studio Ghibli",
  "Alphonse Elric playing chess with WALL-E",
  "Chuuya Nakahara and Dazai Osamu from Bungou Stray Dogs debating philosophy",
  "Tengen Uzui hosting a karaoke night with Taylor Swift",
  "Armin Arlert from Attack on Titan playing a strategy game with Yoda",
  "Asta from Black Clover flying on a Nimbus cloud with Goku",
  "Senku from Dr. Stone rebuilding the Batmobile with Tony Stark",
  "Gojou Satoru from Jujutsu Kaisen teaching a Jedi how to fight",
  "Itachi Uchiha mentoring Doctor Strange in illusion techniques",
  "Erza Scarlet from Fairy Tail wearing Iron Man's armor",
  "Shinobu Kocho crafting potions with Professor Snape",
  "Sanji from One Piece cooking sushi for Gordon Ramsay",
  "Dazai and Chuuya on a buddy cop adventure in Tokyo",
  "Killua Zoldyck fighting alongside Spider-Man against villains",
  "Yuno Gasai from Future Diary cosplaying Harley Quinn",
  "Eren and Mikasa shopping for Titan-sized clothes",
  "Levi Ackerman cleaning the TARDIS from Doctor Who",
  "Shikamaru Nara teaching a Jedi strategy",
  "Bakugo Katsuki sparring with the Hulk in a boxing ring",
  "Gintoki from Gintama delivering pizza on a hoverboard",
  "Ryuk eating pizza with Teenage Mutant Ninja Turtles",
  "Nezuko from Demon Slayer sleeping in a Pokéball",
  "Dio Brando from JoJo’s Bizarre Adventure and Voldemort plotting world domination",
  "Reigen Arataka from Mob Psycho 100 giving ghost-hunting advice to Luigi",
  "Edward Elric using alchemy to fix the TARDIS",
  "Sailor Moon shopping for moon-themed accessories with Luna Lovegood",
  "Shoto Todoroki chilling drinks for Frozone",
  "Hinata from Haikyuu spiking volleyballs with Captain Marvel",
  "Makunouchi Ippo boxing with Rocky Balboa",
  "Kaname Tosen from Bleach meditating with Avatar Aang",
  "Guts from Berserk forging a sword with Thorin Oakenshield",
  "Tengen Uzui organizing a disco party in the Stranger Things universe",
  "Levi and Mikasa hosting a survival boot camp with Katniss Everdeen",
  "Aang and Naruto competing in a ninja obstacle course",
  "Zoro teaching Deadpool how to use katanas",
  "Rukia Kuchiki from Bleach painting landscapes with Bob Ross",
  "Gon Freecss learning archery from Legolas",
  "Rimuru Tempest cooking with Ratatouille",
  "Asuka Langley piloting a Jaeger from Pacific Rim",
  "Misato Katsuragi from Evangelion hosting a futuristic podcast",
  "Kakashi Hatake reading a novel with Tyrion Lannister",
  "Luffy and Thor sharing a meal at a Viking feast",
  "Saber from Fate/stay night jousting with King Arthur",
  "Dazai from Bungou Stray Dogs counseling Tony Stark on existential crises",
  "Ryuk selling apples at a farmer's market",
  "Spike Spiegel teaching John Wick how to use futuristic weapons",
  "Tanjiro and Frodo Baggins battling a Balrog",
  "Goku and Naruto fishing in a serene lake",
  "Kyojuro Rengoku from Demon Slayer at a medieval fair",
  "Natsu and Happy flying alongside Toothless from How to Train Your Dragon",
  "Bakugo and Iron Man designing explosive gadgets",
  "Killua and Gon exploring the Upside Down from Stranger Things",
  "Ichigo Kurosaki battling an alien invasion alongside Rick and Morty",
  "Yuno Gasai hacking into Tony Stark's systems",
  "Sakura Haruno and Hermione Granger teaming up for a magical duel",
  "Nezuko and Baby Yoda on an intergalactic adventure",
  "Eren Jaeger confronting a Kaiju in Pacific Rim",
  "Shikamaru Nara strategizing with Captain Picard",
  "Light Yagami debating ethics with Walter White",
  "Rem from Re:Zero gardening with Poison Ivy",
  "Koro-sensei mentoring the Avengers",
  "Shinji Ikari piloting a Gundam with Amuro Ray",
  "Tanjirou and Pikachu on a Pokémon adventure",
  "Dio and Kylo Ren in a power duel",
  "Bakugo leading a training session with Storm from X-Men",
  "Reigen from Mob Psycho running a reality TV show",
  "Rukia summoning her Zanpakuto in the Matrix",
  "Asuna from SAO battling VR creatures with Tracer from Overwatch",
  "All Might teaching health class at Xavier’s School",
  "Asta fighting off aliens in Independence Day",
  "Spike Spiegel and Han Solo racing spaceships",
  "Tengen Uzui hosting a 1980s themed rave",
  "Sasuke meeting Darth Vader in a lightsaber duel",
  "Naruto and Tanjiro hosting a ramen-eating contest",
  "Vegeta challenging All Might to a strength competition",
  "Nezuko crafting cosplay outfits with Harley Quinn",
  "Deku joining the Justice League",
  "Rimuru Tempest negotiating peace with Magneto",
  "Shoto Todoroki building a snowman with Elsa and Olaf",
  "Sailor Moon fighting evil with Wonder Woman on the moon",
  "Hinata and Spider-Man swinging through the city",
  "Levi sparring with Captain Levi from Attack on Titan",
  "Shikamaru playing chess against Light Yagami",
  "Tanjiro learning blacksmithing from Thor",
  "Deku and Mario teaming up to save a castle",
  "Bakugo cooking an explosive dish with Ramsay",
  "Nezuko dancing on stage with Hatsune Miku",
  "Reigen hosting a paranormal cooking show",
  "Kakashi Hatake teaching swordsmanship to Aragorn",
  "Gintoki and Deadpool trolling villains",
  "Spike Spiegel in a western shootout with Clint Eastwood",
  "Tengen Uzui organizing a musical battle with Beethoven",
  "Levi leading a Titan attack simulation with Hawkeye",
  "Edward Elric analyzing ancient artifacts with Indiana Jones",
  "Naruto competing in a quidditch match",
  "Mikasa and Katniss hunting in the Hunger Games arena",
  "Dio and Loki scheming for world domination",
  "All Might mentoring Steven Universe",
  "Sasuke forging a blade with Sauron",
  "Eren Yeager building a city in Attack on Titan VR",
  "Light Yagami teaching philosophy to Hannibal Lecter",
  "Nezuko befriending the Minions",
  "Tanjiro exploring Spirited Away's bathhouse",
  "Bakugo competing on Top Chef",
  "Ichigo facing Venom in a dark alley",
  "Asta training with Bruce Lee in a magical dojo",
];

const morePrompts = [
  "A robot butler serving afternoon tea",
  "A dinosaur in a tuxedo hosting a gala",
  "A superhero knitting a scarf",
  "A dragon as a taxi driver in a futuristic city",
  "A robot juggling planets in space",
  "A wizard brewing potions in a modern chemistry lab",
  "A ninja turtle playing in a symphony orchestra",
  "A robot babysitting alien children",
  "A sloth working as a software developer",
  "A penguin modeling for a fashion magazine",
  "A dinosaur playing basketball with aliens",
  "A wizard teaching a dragon how to read",
  "A robot DJing at a retro party",
  "A superhero fishing in a mountain lake",
  "A dragon running a coffee shop",
  "A cat wearing VR goggles exploring a digital jungle",
  "A robot flying a kite in a storm",
  "A ghost haunting a movie theater",
  "A superhero riding a mechanical bull",
  "A wizard competing in a video game tournament",
  "A dinosaur as a master chef on a cooking show",
  "A robot repairing a futuristic train",
  "A penguin leading a parade in a big city",
  "A superhero designing eco-friendly gadgets",
  "A dragon participating in a talent show",
  "A wizard writing a book about modern technology",
  "A robot exploring underwater ruins",
  "A dinosaur painting graffiti in a city",
  "A superhero organizing a charity event",
  "A dragon protecting a hidden treasure",
  "A robot playing table tennis with a human",
  "A ghost running a detective agency",
  "A penguin flying an experimental jet",
  "A dinosaur playing a rock concert",
  "A wizard solving crimes with magic",
  "A robot planting trees in a futuristic forest",
  "A superhero giving a motivational speech",
  "A dragon competing in a cooking competition",
  "A cat as a secret agent",
  "A robot walking a pack of robotic dogs",
  "A dinosaur as a professional skateboarder",
  "A wizard riding a hoverboard in a futuristic city",
  "A robot playing virtual reality games",
  "A dragon hosting a live talk show",
  "A superhero volunteering at an animal shelter",
  "A penguin ice skating in an Olympic competition",
  "A robot as a photographer in a neon city",
  "A dinosaur as a professional DJ",
  "A wizard teaching at a futuristic academy",
  "A robot organizing a party on Mars",
  "A superhero building a treehouse for kids",
  "A dragon baking a giant cake for a festival",
  "A cat as a professional gamer",
  "A robot exploring the surface of an alien planet",
  "A penguin performing magic tricks",
  "A dinosaur as a pirate captain",
  "A wizard crafting enchanted musical instruments",
  "A superhero rescuing a kitten from a tree",
  "A robot competing in a futuristic dance competition",
  "A dragon painting a portrait of a knight",
  "A ghost running a bakery",
  "A penguin as a chef in a luxury restaurant",
  "A robot coding a futuristic app",
  "A dinosaur performing a comedy routine",
  "A wizard taming wild unicorns",
  "A superhero delivering pizzas",
  "A dragon learning how to snowboard",
  "A robot writing music with AI",
  "A penguin solving mysteries on a cruise ship",
  "A dinosaur attending a wedding in a tuxedo",
  "A wizard building a magical theme park",
  "A superhero working as a barista",
  "A dragon decorating a Christmas tree",
  "A robot as a lifeguard in a futuristic pool",
  "A penguin leading a marching band",
  "A dinosaur as a referee in a sports game",
  "A wizard running a tech startup",
  "A superhero playing chess against a robot",
  "A dragon roasting marshmallows with kids",
  "A cat as a scientist experimenting with lasers",
  "A robot teaching yoga to humans",
  "A penguin winning an award for acting",
  "A dinosaur riding a bicycle in a park",
  "A wizard competing in a cooking contest",
  "A superhero designing a futuristic city",
  "A dragon teaching a painting class",
  "A robot leading a band of musicians",
  "A penguin studying in a library",
  "A dinosaur exploring a jungle",
  "A wizard fixing a spaceship",
  "A superhero building a sandcastle",
  "A dragon learning to play the drums",
  "A robot creating art with light projections",
  "A penguin climbing a snowy mountain",
  "A dinosaur as a magician performing tricks",
  "A wizard attending a sci-fi convention",
  "A superhero rescuing a stranded whale",
  "A dragon reading bedtime stories to children",
  "A robot gardening on a space station",
  "A penguin riding a unicycle in a circus",
  "A dinosaur playing soccer in a futuristic stadium",
  "A wizard exploring a virtual reality world",
  "A superhero working as a scientist in a lab",
  "A dragon hosting a talent competition",
  "A robot inventing new musical instruments",
  "A penguin designing ice sculptures",
  "A dinosaur acting in a blockbuster movie",
  "A wizard crafting enchanted furniture",
  "A superhero helping to build a school",
  "A dragon building a snow fort",
  "A robot baking bread in a futuristic oven",
  "A penguin conducting an orchestra",
  "A dinosaur solving a puzzle with kids",
  "A wizard exploring a futuristic city",
  "A superhero building a robot sidekick",
  "A dragon hosting a tea party",
  "A robot designing futuristic architecture",
  "A penguin exploring an ancient temple",
  "A dinosaur teaching kids about history",
  "A wizard creating magical fireworks",
  "A superhero giving a tour of a futuristic museum",
  "A dragon singing in an opera",
  "A robot fishing with a high-tech rod",
  "A penguin hosting a TV cooking show",
  "A dinosaur writing a novel",
  "A wizard teaching a dragon to fly",
  "A superhero racing a futuristic car",
  "A dragon sculpting ice statues",
  "A robot composing music for a movie",
  "A penguin painting a snowy landscape",
  "A dinosaur leading a dance troupe",
  "A wizard enchanting everyday objects",
  "A superhero delivering packages by flying",
  "A dragon telling stories around a campfire",
  "A robot hosting a science fair",
  "A penguin building an igloo",
  "A dinosaur exploring the ocean in a submarine",
  "A wizard casting spells in a modern city",
  "A superhero mentoring young heroes",
  "A dragon as a lifeguard on a beach",
  "A robot hosting a game show",
  "A penguin discovering hidden treasure",
  "A dinosaur designing futuristic vehicles",
  "A wizard learning how to use modern gadgets",
  "A superhero rescuing a stranded spaceship",
  "A dragon creating a comic book series",
  "A robot building a futuristic theme park",
  "A penguin writing a travel blog",
  "A dinosaur studying astronomy",
  "A wizard designing magical clothing",
  "A superhero inventing new sports",
  "A dragon crafting jewelry",
  "A robot designing eco-friendly cities",
  "A penguin participating in a talent show",
  "A dinosaur painting a landscape",
  "A wizard experimenting with alchemy",
  "A superhero building a shelter for animals",
  "A dragon teaching a music class",
  "A robot creating animations for a movie",
  "A penguin competing in a snowball fight",
  "A dinosaur exploring a volcanic island",
  "A wizard crafting magical gadgets",
  "A superhero coaching a sports team",
  "A dragon rescuing lost hikers",
  "A robot hosting a live performance",
  "A penguin directing a movie",
  "A dinosaur as a teacher in a futuristic classroom",
  "A wizard learning modern dance",
  "A superhero as a motivational speaker",
  "A dragon starring in a fantasy movie",
  "A robot as an artist in a futuristic gallery",
  "A penguin exploring the deep sea",
  "A dinosaur conducting a science experiment",
  "A wizard traveling through a wormhole",
  "A superhero building a floating island",
  "A dragon knitting scarves for charity",
  "A robot playing in a futuristic orchestra",
  "A penguin designing eco-friendly homes",
  "A dinosaur exploring ancient ruins",
  "A wizard learning about robotics",
  "A superhero teaching survival skills",
  "A dragon decorating for a festival",
  "A robot writing poetry with AI",
  "A penguin learning to play guitar",
  "A dinosaur inventing new technology",
  "A wizard crafting magical tools",
  "A superhero guiding a team of heroes",
  "A dragon as a judge in a talent show",
  "A robot building a time machine",
  "A penguin sculpting with ice",
  "A dinosaur working as a historian",
  "A wizard creating illusions for a theater show",
  "A superhero building a futuristic vehicle",
  "A dragon participating in an art contest",
  "A robot creating AI-driven art",
  "A penguin designing futuristic furniture",
  "A dinosaur teaching kids about fossils",
  "A wizard experimenting with weather magic",
  "A superhero competing in a race against a robot",
  "A dragon designing costumes for a play",
  "A robot writing futuristic novels",
  "A penguin building an igloo with lights",
  "A dinosaur attending a futuristic conference",
  "A wizard discovering a new realm",
  "A superhero helping rebuild a city",
  "A dragon building a sandcastle on the beach",
];

export const genZBrainrotPrompts = [
  "A photorealistic Skibidi Toilet in a cyberpunk universe",
  "A Rizz God teaching a class on how to master 'unspoken rizz'",
  "An NPC from TikTok selling invisible hamburgers at a street market",
  "A gritty reboot of Skibidi Toilet as a dystopian thriller",
  "A 3D render of the Grimace Shake becoming sentient",
  "An anime girl cosplaying as a Skibidi Toilet character",
  "A crossover between Ohio memes and Skibidi Toilet lore",
  "A 'Certified Rizzologist' receiving a diploma from a university",
  "An evil Skibidi Toilet taking over a city with flying plungers",
  "A glamorized depiction of 'devious licks' heists from TikTok",
  "A Rizz Goblin living in a trendy Gen Z apartment",
  "A Skibidi Toilet and Capybara buddy-cop movie poster",
  "An NPC dance battle in a neon-lit arena",
  "A meme council meeting featuring Rizz, Sigma, and Giga Chad",
  "An anime boy with infinite rizz summoning an army of simps",
  "A Skibidi Toilet kaiju battle against a Giga Chad skyscraper",
  "The Grimace Shake running for president in 2024",
  "An Ohio-core crossover featuring Shrek and Skibidi Toilet",
  "A vintage-style poster advertising a Rizz seminar",
  "A dramatic scene where an NPC cries over being stuck in Ohio",
  "A majestic Skibidi Toilet leading a rebellion of animated bathrooms",
  "An anime villain monologuing about their ultimate rizz attack",
  "A dystopian society where everyone communicates via TikTok trends",
  "A whimsical NPC carnival featuring invisible objects",
  "A fusion of Skibidi Toilet and Wednesday Addams’ aesthetic",
  "An Instagram influencer posing next to a glowing Grimace Shake",
  "A futuristic Rizz Museum documenting the art of flirting",
  "A meme-style war between Sigma Males and Skibidi Toilet Army",
  "A Capybara DJ remixing the Ohio National Anthem",
  "An epic showdown between a Sigma Rizz Master and an NPC overlord",
  "A Skibidi Toilet army invading a Gen Z high school",
  "A graffiti wall featuring TikTok NPC catchphrases",
  "A Giga Chad rescuing someone from the dreaded backrooms of Ohio",
  "A 'Rizz or Fizz' dating show hosted by Grimace Shake",
  "A Skibidi Toilet-inspired mech suit for battling cringe",
  "A Vaporwave aesthetic featuring a glowing NPC vending machine",
  "An art deco Grimace Shake lounge in a futuristic city",
  "A meme-inspired Time Square billboard advertising Rizz energy drinks",
  "A plushie collection of NPC characters in quirky poses",
  "A 'Devious Lick' heist planning room with TikTok Easter eggs",
  "An NPC proposing a truce with Sigma Male in the form of rizz",
  "A Skibidi Toilet throne room in a high fantasy setting",
  "A pastel-colored Grimace Shake boba shop",
  "An 'Ohio-core' fashion show with bizarre yet iconic outfits",
  "A superhero parody where the power is 'unlimited rizz'",
  "A cozy room decorated with Skibidi Toilet plushies",
  "An epic battle scene between a Sigma Male and a Rizz Lord",
  "A dreamy NPC escape from Ohio fan art",
  "A surreal world where Grimace Shake is the moon",
  "A Vaporwave aesthetic TikTok NPC glitching out",
  "A Gen Z wizard casting TikTok dance spells",
  "A crossover between Skibidi Toilet and Attack on Titan",
  "A plush Grimace Shake becoming the town mascot",
  "A Rizz-infused anime-style protagonist in a neon city",
  "A TikTok NPC vending machine selling Ohio memorabilia",
  "A parody of 'Romeo and Juliet' featuring a Rizz Master and Sigma",
  "A grand painting of a Skibidi Toilet revolution",
  "A chaotic meme-style city populated with NPC TikTokers",
  "An art exhibit featuring 'Ohio-core' fashion from TikTok",
  "A knight with a glowing Rizz Sword fighting cringe monsters",
  "A nostalgic anime-inspired depiction of the Skibidi Toilet craze",
  "A school of NPCs learning the art of TikTok trolling",
  "A Gen Z dreamscape filled with dancing Grimace Shakes",
  "An NFT-styled Skibidi Toilet art collection",
  "A futuristic Rizz University campus with meme professors",
  "A Skibidi Toilet wedding officiated by a Sigma Male priest",
  "A glowing neon sign reading 'Rizz Bar' in a bustling city",
  "A fantasy RPG character with NPC dialogue quirks",
  "A majestic mural dedicated to Ohio memes and TikTok trends",
  "An art nouveau-inspired Grimace Shake goddess",
  "A time-traveling Sigma Rizz Warrior battling NPC overlords",
  "A whimsical anime-style village ruled by the Skibidi Toilet king",
  "A Gen Z superhero team consisting of Rizz, Sigma, and NPC",
  "A comic book cover featuring Skibidi Toilet: The Reckoning",
  "A vintage poster for 'Ohio World Fair 2077'",
  "An aesthetic TikTok-inspired museum exhibit",
  "A steampunk rendition of the Skibidi Toilet uprising",
  "A legendary creature born from Grimace Shake lore",
  "A graffiti-style tribute to the 'Devious Lick' heist era",
  "A soft pastel art style of NPC vending machine overlords",
  "An anime convention where Skibidi Toilet is the mascot",
  "A dramatic courtroom sketch featuring Sigma and Rizz disputes",
  "A cosmic Grimace Shake floating through space",
  "A Rizz Master teaching an online Zoom class",
  "A magical NPC kingdom with TikTok dance rituals",
  "A surreal dreamscape where Ohio is the center of the universe",
  "A poster for the 'Grimace Shake Apocalypse Movie'",
  "A TikTok NPC villain assembling a cringe army",
  "A graffiti-style TikTok trend mural for the Skibidi era",
  "A high-fashion editorial with Rizz-inspired outfits",
  "A superhero origin story involving Grimace Shake powers",
  "A fantasy RPG Skibidi Toilet boss battle",
  "A meme war featuring NPC TikTok, Sigma, and Giga Chad",
  "A dramatic scene of an NPC glitching into Ohio",
  "A retro anime poster inspired by the Grimace Shake trend",
  "A majestic temple dedicated to Rizzology studies",
  "An apocalyptic battle between Skibidi Toilet and Sigma warriors",
  "A glowing neon Grimace Shake nightclub in a futuristic city",
  "A romantic NPC escaping Ohio to find true love",
  "A magical portal leading to Skibidi Toilet's dimension",
  "A Gen Z influencer wielding the Rizz Sword in an anime world",
  "A legendary duel between Sigma Chad and Rizz Lord",
  "A dreamlike anime world ruled by TikTok NPC overlords",
  "A whimsical NPC carnival ride featuring floating Grimace Shakes",
  "A surreal vaporwave TikTok NPC theme park",
  "An art gallery featuring only Skibidi Toilet-inspired works",
  "A chaotic Ohio festival with NPC vendors selling invisible goods",
  "A dramatic Skibidi Toilet opera in the style of Phantom of the Opera",
  "A meme-styled TikTok wedding officiated by a Rizzologist",
  "A psychedelic journey through the Grimace Shake multiverse",
];

export const all = [
  ...prompts,
  ...animePopCulturePrompts,
  ...morePrompts,
  ...genZBrainrotPrompts,
];

export default prompts;