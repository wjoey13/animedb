
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('anime_title').del()
    .then(function () {
      // Inserts seed entries
      return knex('anime_title').insert([
        {
          title:'One Piece',
          genre:'Adventure, Fantasy ',
          description:' The series focuses on Monkey D. Luffy, a young man who, inspired by his childhood idol and powerful pirate "Red Haired" Shanks, sets off on a journey from the East Blue Sea to find the famed treasure One Piece and proclaim himself the King of the Pirates. In an effort to organize his own crew, the Straw Hat Pirates (麦わら海賊団篇 Mugiwara Kaizoku-danhen), Luffy rescues and befriends a swordsman named Roronoa Zoro, and they head off in search of the One Piece. They are joined in their journey by Nami, a navigator and thief; Usopp, a sniper and a liar; and Sanji, a womanizing chef. They acquire a ship named the Going Merry and engage in confrontations with notorious pirates of the East Blue. As Luffy and his crew set out on their adventures, others join the crew later in the series, including Tony Tony Chopper, a doctor and anthropomorphized reindeer; Nico Robin, an archaeologist and former assassin; Franky, a cyborg shipwright; Brook, a skeletal musician; and Jimbei, a fishman helmsman; and they also acquire a new ship named the Thousand Sunny. ',
          cover:'https://i.pinimg.com/236x/91/30/d6/9130d61988f1e6b7b811f4ff0ebb791e--childrens-books-comic-covers.jpg?b=t',
        },
        {
          title:'No Game No Life',
          genre:'Isekai, Fantasy, Science Fiction',
          description:'Sora and Shiro are two hikikomori step-siblings who are known in the online gaming world as Blank, an undefeated group of gamers. One day, they are challenged to a game of chess by Tet, a god from another reality. The two are victorious and are offered to live in a world that centers around games. They accept, believing it to be a joke, and are summoned to a reality known as Disboard.[Jp. 1] There, a spell known as the Ten Pledges prevents the citizens of Disboard from inflicting harm on one another, forcing them to resolve their differences by gambling with games whose rules and rewards are magically enforced. In-game, rule enforcement only occurs when the method of cheating is acknowledged and outed by the opponent, allowing players to cheat through discreet methods. Sora and Shiro traverse to Elkia,[Jp. 2] the nation inhabited by humans, and befriend the duchess Stephanie Dola. Learning about Elkia\'s decline, the two participate in a tournament to determine the next ruler; after winning the crown, they earn the right to challenge the Disboard\'s other species as humanity\'s representative.LN 1.4 Their next goal is to conquer all sixteen species in order to challenge Tet to a game; as of the sixth volume, five of the sixteen are under their control.',
          cover:'https://images-na.ssl-images-amazon.com/images/I/91UbSQOtBRL.jpg'
        },
        {
          title:'Psycho-Pass',
          genre:'Crime, Cyberpunk, Mystery',
          description:'Psycho-Pass is set in a futuristic era in Japan where the Sibyl System (Shibyura Shisutemu), a powerful network of psychometric scanners, actively measures the minds and mentalities of civilised populations using a \"cymatic scan\" of the brain. The resulting assessment is called a Psycho-Pass (Saikopasu). When the calculated likelihood of an individual committing a crime, measured by the Crime Coefficient (Hanzaikeisū) index, exceeds an accepted threshold, he or she is pursued, apprehended, and killed if necessary by police forces. Elite officers labelled \"Enforcers\" are equipped with large handguns called \"Dominators\"—special weapons that only activate when aimed at suspects with higher-than-acceptable Crime Coefficients. Enforcers are themselves selected for innately high Crime Coefficients, marking them as \"latent criminals\"; they are overseen by police Inspectors, who have the jurisdiction to shoot them with their Dominators should they pose a danger to the public.',
          cover:'https://i0.wp.com/doublesama.com/wp-content/uploads/2018/01/2e3d5e0f13da8c0eced54b573d883f0a1473358908_full.jpg?resize=640%2C960'
        },
        {
          title:'Akame ga Kill',
          genre:'Adventure, Dark Fantasy',
          description:'Night Raid is the covert assassination branch of the Revolutionary Army, an uprising assembled to overthrow Prime Minister Honest, whose avarice and greed for power has lead him to take advantage of the child emperor\'s inexperience. Without a strong and benevolent leader, the rest of the nation is left to drown in poverty, strife, and ruin. Though the Night Raid members are all experienced killers, they understand that taking lives is far from commendable and that they will likely face retribution as they mercilessly eliminate anyone who stands in the revolution\'s way. This merry band of assassins\' newest member is Tatsumi, a naïve boy from a remote village who had embarked on a journey to help his impoverished hometown and was won over by not only Night Raid\'s ideals, but also their resolve. Akame ga Kill! follows Tatsumi as he fights the Empire and comes face-to-face with powerful weapons, enemy assassins, challenges to his own morals and values, and ultimately, what it truly means to be an assassin with a cause',
          cover:'https://m.media-amazon.com/images/M/MV5BZWY5NTVjZWEtMjI5YS00OGMyLThhNTctMjk5NzVkNTZjYTM0XkEyXkFqcGdeQXVyNjkyODc3NjQ@._V1_.jpg'
        },
        {
          title:'Rurouni Kenshin: Wandering Samurai',
          genre:'Adventure, Martial Arts, Romance',
          description:'The adventures of a young wandering swordsman who stumbles upon a struggling martial arts school in Meiji era Japan.',
          cover:'https://www.anime-planet.com/images/anime/covers/rurouni-kenshin-movie-1253.jpg'
        },
        {
          title:'One-Punch Man',
          genre:'Action, Comedy, Superhero',
          description:'Saitama, the protagonist, is an exceptionally powerful hero who easily defeats the monsters or other villains with a single punch. However, due to his overwhelming strength, Saitama has become bored with his powers and is constantly trying to find stronger opponents who can fight him.',
          cover:'https://m.media-amazon.com/images/M/MV5BMzQxMzE5NzM2NV5BMl5BanBnXkFtZTgwMDQ4NTUyNzE@._V1_.jpg'
        },
        {
          title:'Inuyasha',
          genre:'Adventure, Fantasy, Romance',
          description:'InuYasha is the story of a dog half-demon who is constantly after a jewel of immense power, the Shikon jewel, also no as the Shikon no tama. He lives in the forest near the village where the jewel is protected by a priestess named Kikyo.',
          cover:'https://m.media-amazon.com/images/M/MV5BMGNmMWI4MGUtYmU0ZS00ZDkxLTgzMTAtZDU4YmQ1MDM3Y2IyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'
        },
        {
          title:'Trigun',
          genre:'Adventure, Science Fiction, Space Western',
          description:'Trigun revolves around a man known as "Vash the Stampede" and two Bernardelli Insurance Society employees, Meryl Stryfe and Milly Thompson, who follow him around in order to minimize the damages inevitably caused by his appearance.',
          cover:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Trigun_manga.jpg/220px-Trigun_manga.jpg'
        },
        {
          title:'Samurai Champloo',
          genre:'Adventure, Comedy',
          description:'A young woman named Fuu is working as a waitress in a tea shop when she is abused by a band of samurai. She is saved by a mysterious rogue named Mugen and a young rōnin named Jin. Mugen attacks Jin after he proves to be a worthy opponent. The pair begin fighting one another and inadvertently cause the death of Shibui Tomonoshina, the magistrate\'s son. For this crime, they are to be executed. With help from Fuu, they are able to escape execution. In return, Fuu asks them to travel with her to find \"the samurai who smells of sunflowers\".',
          cover:'https://m.media-amazon.com/images/M/MV5BOWNhMDMyMDYtNzJlOS00YzhhLWFiMjktYWY1MzMzZGZhOGRjXkEyXkFqcGdeQXVyNDYzNTI2ODc@._V1_.jpg'
        },
        {
          title:'Soul Eater',
          genre:'Adventure, Dark Fantasy',
          description:'The plot of the episodes follows Maka Albarn, a "meister" of the Death Weapon Meister Academy (DWMA), and her living weapon, Soul Eater, as she seeks to make the latter into a "death scythe" through absorbing the souls of evil humans.',
          cover:'https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Soul_Eater_manga_volume_1.jpg/220px-Soul_Eater_manga_volume_1.jpg'
        },
        {
          title:'Tokyo Ghoul',
          genre:'Dark Fantasy, Horror, Thriller',
          description:'In modern day Tokyo, society lives in fear of Ghouls: mysterious creatures who look exactly like humans-yet hunger insatiably for their flesh. None of this matters to Ken Kaneki, a bookish and ordinary young man, until a dark and violent encounter turns him into the first ever Ghoul-human half breed.',
          cover:'https://static.tvtropes.org/pmwiki/pub/images/tokyo_ghoul_5787.jpg'
        },
        {
          title:'Cowboy Bebop',
          genre:'Neo-noir, Space Western',
          description:'Cocky Spike Spiegel and the crew of his spaceship, Bebop, an intrepid band of bounty hunters, land on Mars in the year 2071 chasing an enormous cash reward. The four-person team, also including looming cyborg Jet Black, fearless Faye Valentine and tech expert Edward, are in search of ex-military officer Vincent. The former hero has become a biological terrorist with an arsenal of devastating nano-bots that he\'ll let loose on Alba City on the night before Halloween if his demands aren\'t met.',
          cover:'https://images-na.ssl-images-amazon.com/images/I/81Ong-2+m2L._RI_.jpg'
        },
        {
          title:'Fullmetal Alchemist',
          genre:'Adventure, Dark Fantasy, Science Fiction',
          description:' When a failed alchemical ritual leaves brothers Edward and Alphonse Elric with severely damaged bodies, they begin searching for the one thing that can save them; the fabled philosopher\'s stone. ... The resurrection failed, leaving Edward without an arm and a leg and Alphonse\'s soul attached to a suit of armor.',
          cover:'https://images-na.ssl-images-amazon.com/images/I/91fhhUusE1L.jpg'
        },
        {
          title:'Code Geass',
          genre:'Adventure, Alternate History, Mecha',
          description:'After invading Japan using giant robot weapons called Knightmares, the powerful Empire of Britannia takes over the country and renames it "Area 11" and its people, "Elevens." ... With the power of Geass now at his disposal, Lelouch creates his own rebel group called Order of the Black Nights.',
          cover:'https://img1.ak.crunchyroll.com/i/spire4/dbdf31ca078912e6cbdb048ba869296b1500579061_full.jpg'
        },
        {
          title:'Bleach',
          genre:'Adventure, Supernatural',
          description:'Ichigo Kurosaki is a teenager from Karakura Town who can see ghosts, a talent which lets him meet supernatural trespasser Rukia Kuchiki. Rukia is one of the Soul Reapers, soldiers trusted with ushering the souls of the dead from the World of the Living to the Soul Society',
          cover:'https://myanimelist.cdn-dena.com/images/anime/3/40451.jpg'
        },
        {
          title:'Fairy Tail',
          genre:'Adventure, Fantasy',
          description:'Lucy Heartfilia is an inexpert magician who wants to join the "Fairy Tail" guild. During this first adventure, she meets the fire magician called Natsu Dragneel and his blue and talking cat; Happy. ... There they run into Lucy, a young wizard who is determined to join the Fairy Tail Guild.',
          cover:'https://img1.ak.crunchyroll.com/i/spire2/f4ca1a545a471a9ce6e43eef8e8d72541539734102_full.jpg'
        },
        {
          title:'Sword Art Online',
          genre:'',
          description:'',
          cover:''
        },
        {
          title:'Dragon Ball Z',
          genre:'',
          description:'',
          cover:''
        },
        {
          title:'Naruto Shippuden',
          genre:'',
          description:'',
          cover:''
        },
        {
          title:'Attack on Titan',
          genre:'',
          description:'',
          cover:''
        },
        {
          title:'Fullmetal Alchemist: Brotherhood',
          genre:'',
          description:'',
          cover:''
        },
        {
          title:'Dragon Ball',
          genre:'',
          description:'',
          cover:''
        },
        {
          title:'Pokemon',
          genre:'',
          description:'',
          cover:''
        },
        {
          title:'Future Diary',
          genre:'',
          description:'',
          cover:''
        },
        {
          title:'Death Note',
          genre:'',
          description:'',
          cover:''
        }
      ]);
    });
};
