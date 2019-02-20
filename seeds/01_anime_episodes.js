
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          number:'01 ',
          name:'I\'m Luffy! The Man Who\'s Gonna Be King of the Pirates!',
          info:'The series begins with an attack on a cruise ship at the hands of Alvida. Coby, a slave of Alvida, discovers a barrel. One of Alvida\'s pirates attempts to open the barrel, but a young boy emerges and accidentally hits him. The remaining pirates attack him, but the stranger stops them and says that his name is Monkey D. Luffy. Luffy drags Coby to the storage cellar of the ship, where he eats and converses with Coby, who reveals his dream of being a marine. Alvida confronts Luffy, but he escapes and knocks her pirate crew down with his Devil Fruit power. Luffy explains that he ate the Gum-Gum Fruit, therefore he has the properties of rubber. Coby, inspired by Luffy, stands up for himself when Alvida confronts them. Luffy uses his Gum-Gum Pistol technique on Alvida. Luffy and Coby sail away in a "borrowed" boat from Alvida\'s crew. Luffy asks about the pirate hunter Coby mentioned earlier. Coby says that he was captured by the Marines, and Luffy announces his intention of asking him to join his crew. ',
          language:'Japanese, English'
        },
        {
          number:'02 ',
          name:'Enter the Great Swordsman! Pirate Hunter Roronoa Zoro! ',
          info:'Luffy and Coby arrive at an island with a large Marine base, where Luffy discovers the swordsman, Roronoa Zoro tied to a pole. Rika, a young girl, offers Zoro some rice balls that she made herself. Helmeppo, the son of Marine Captain Morgan, discovers this and has Rika thrown out. Luffy asks Zoro to join his crew, but Zoro refuses and has Luffy give him the rice balls. Luffy and Coby meet Rika in town, who is happy to hear that Zoro enjoyed the rice balls. She tells them how Helmeppo brought his vicious pet dog into their bar and that Zoro knocked it out to protect everyone inside. He then made a deal with Helmeppo: if he can survive being tied to a pole with no food or water for thirty days, then Helmeppo will spare the people in the bar. However, Helmeppo says that he will execute Zoro the next day despite his word. Luffy punches him, and Helmeppo runs off to tell his father. While Luffy invades the Navy base to find Zoro\'s swords, Coby attempts to untie Zoro and explains the situation to him. Morgan orders that they are both to be executed. The soldiers open fire, but before the bullets can reach them, Luffy leaps from the base and uses his rubber body to block the bullets. ',
          language:'Japanese, English'
        },
        {
          number:'01 ',
          name: 'In This Fantasy World, Everything\'s a Game — and These Gamer Siblings Play to Win!',
          info: 'Sora and Shiro are two siblings who are known in online games as Blank, an undefeated group of gamers. In real life, they are ostracized by the world and are hikikomoris. One day, they receive a challenge from Tet to a game of chess and are victorious. In response he offers to send them to a world which revolves around games and they accept, believing it to be a joke. They are then summoned to a reality known as Disboard where a spell, called the Ten Pledges, prevents violence and enforces the rules and outcomes of games. They travel to Elkia, the nation of humans, and befriend Stephanie Dola who is the granddaughter of the deceased king. Learning the nation is in steady decline, Sora and Shiro enter the contest to be the next king where they win against Kurami Zell in a war simulator. After they are inaugurated to the throne, Sora publicly declares his intentions to conquer the other nations and help Elkia flourish. Tet meets and congratulates them, declaring he will be waiting for them to unite the sixteen species. ',
          language: 'Japanese, English '
        },
        {
          number:'02 ',
          name: 'The Gamer Siblings Have Their Eyes on a New Target — the Land of the Animal Girls... ',
          info: 'Sora and Shiro begin researching the Eastern Federation, nation of the werebeasts. They challenge a flügel named Jibril for information and the two play a game of shiritori where their spoken objects will either materialize or disappear. The game concludes when Sora and Shiro induce a hypernova by removing coulomb\'s law, making Jibril unable to continue; by the Pledges, Jibril becomes their slave. However, the information from Jibril and her library prove to be useless. Stephanie discloses her grandfather\'s will to Sora, leading them to discover a hidden library in the castle containing her grandfather\'s research. Realizing the Eastern Federation are using video games, Sora and Shiro formalize their challenge by betting everything humanity owns. As they await the game\'s date, Sora tells Shiro the missing piece to their victory will soon arrive; the next day, Shiro discovers everyone has forgotten about Sora. ',
          language: 'Japanese, English'
        },
        {
          number:'01 ',
          name: 'Crime Coefficient ',
          info: 'On her first day as the new Inspector of Unit One, Inspector Akane Tsunemori has been assigned to handle a hostage situation: a man named Nobuo Okura whose Crime Coefficient has determined he is likely to commit a crime and is confirmed when he kidnaps an innocent woman. While looking for him, Akane learns about the nature of the Dominator, and the relationship between Enforcers and Inspectors. Enforcer Shuusei Kagari finds Okura, but due to Okura\'s drug use, the Dominator\'s ability to paralyze is rendered useless. Okura flees, and Unit One pursues him. After Enforcer Shinya Kogami disposes of Okura, the unit learns that the hostage\'s Crime Coefficient has risen to a high level. Before Kogami can execute her, Akane stops him with the Dominator\'s paralyzer. In the end, Akane manages to calm the woman down, letting her Crime Coefficient reduce to the point where she can be paralyzed and taken away. Akane must explain her actions in a report to her superiors. ',
          language: 'Japanese '
        },
        {
          number:'02 ',
          name: 'Those Capable ',
          info: 'Kogami remains hospitalized as he recovers from the Dominator-enforced paralysis; Akane begins a normal work day after meeting with friends and checks on his condition. Enforcer Tomomi Masaoka teams up with Akane to take out a threat in the mall, and after they return, Akane shares a meal and some revealing conversation with Kagari. Later, she greets Kogami, who reinforces her belief she made the right call during the hostage situation; she turns in her report with no regrets. ',
          language: 'Japanese '
        },
        {
          number:'01',
          name:'Kill the Darkness',
          info:'A swordsman named Tatsumi travels to the Capital in hopes of raising money for his impoverished village. After he is robbed by a blonde girl in a tavern, he is forced to sleep in the streets, but he is soon invited by a rich girl named Aria to stay at her manor. While waiting for his best friends, Sayo and Ieyasu, to arrive at the Capital, Tatsumi learns of Night Raid, a group of assassins known to attack at night. Come nightfall, Night Raid appears at the manor and kills Aria\'s guards and parents. During this time, Tatsumi shields Aria while facing off against Night Raid member Akame, only to be interrupted by Night Raid member Leone, the blonde girl from the tavern. Leone reveals to Tatsumi that Aria and her parents have tortured several people from the countryside, including Sayo and Ieyasu. With Sayo already dead, Tatsumi kills Aria without hesitation or mercy, just before Ieyasu dies. Leone invites Tatsumi to join Night Raid against his will. ',
          language:'Japanese, English '
        },
        {
          number:'02',
          name:'Kill Authority ',
          info:'Leone takes Tatsumi to the hideout of Night Raid and introduces him to the other members, all of whom Tatsumi views as freaks. Night Raid leader Najenda convinces Tatsumi to join Night Raid, since it is their mission to overthrow the Empire and to set up a new democratic government in its place. Najenda assigns Akame to train Tatsumi, but Tatsumi ends up merely cooking and fishing. Tatsumi is later given the assignment to assassinate the corrupt captain of the Imperial Police named Ogre, who often framed innocent people as criminals. At night, Tatsumi finds Ogre in the streets, where they draw swords at each other. When Ogre becomes arrogant, Tatsumi kills Ogre with the slash of his sword. As a cocky Tatsumi reports back to the hideout, Akame does a strip search on him, making sure he was not wounded. Since he has survived thus far, she accepts him as a member of Night Raid. ',
          language: 'Japanese, English '
        },
        {
          number:'01 ',
          name: 'The Handsome Swordsman of Legend: A Man who Fights for Love ',
          info: 'After rumors of a man calling himself Hitokiri Battousai terrorizing the citizens of Tokyo begin, Kaoru Kamiya, the owner of a small dojo, takes it upon herself to catch him. After confronting a swordsman with a cross-shaped scar but dismissing him as a simple wanderer, she takes him into her family\'s dojo. After a confrontation, the wanderer defeats the man posing as Battousai and after some prompting reveals his real name to be Kenshin Himura, as well as his identity as the true Battousai, once a well-known and well-feared hitokiri during the Bakumatsu. Kaoru urges him to stay and declares that it is the wanderer she invites to stay at her place, not the assassin. ',
          language: 'Japanese, English  '
        },
        {
          number:'02 ',
          name: 'Kid Samurai: A Big Ordeal and a New Student ',
          info: 'After nearly being victimized in pickpocketing by a young street urchin Yahiko Myojin, Kenshin takes sympathy on the boy who declares himself to be from a samurai family. After his mother\'s death, Yahiko has been forced into working for the yakuza to pay off his deceased mother\'s debt. Kaoru goes to rescue the boy but finds herself in a perilous situation until Kenshin appears and defeats the yakuza single-handedly. Kaoru then takes Yahiko as her student at Kenshin\'s prompting despite the reluctance of both of them. ',
          language: 'Japanese, English  '
        },
        {
          number:'01 ',
          name: 'The Strongest Man ',
          info: 'Vaccine Man wreaks havoc in a city. But as he is about to kill a young girl, Saitama arrives and saves her. Saitama has been living a boring life, as he has extraordinary strength in which he can defeat enemies in one punch. He recalls three years ago, when he was leaving a job interview, he had saved a boy with a cleft-chin from Crablante. Back at the present time, he faces The Brain and Brawn Brothers, one of whom is a huge giant, and defeats them easily. One night, he has a dream about a subterranean race who invade and pose a challenge, but when he wakes, he finds that the subterraneans are extremely weak. ',
          language: 'Japanese, English '
        },
        {
          number:'02 ',
          name: 'The Lone Cyborg ',
          info: 'Mosquito Girl attacks the city with her swarms which suck the blood out of everyone alive. A cyborg named Genos tries to stop her but is having a difficult time. After dealing with a single pesky mosquito, Saitama sees Genos and Mosquito Girl fighting, and defeats Mosquito Girl. Despite Genos\'s extremely boring explanation of his past, Saitama agrees to make Genos his apprentice. Some monsters from a group called the House of Evolution try to capture Saitama, but fail. Saitama questions Armored Gorilla about what\'s going on. ',
          language: 'Japanese, English '
        },
        {
          number:'01 ',
          name: 'The Girl Who Overcame Time... and the Boy Who Was Just Overcome ',
          info: 'Kagome Higurashi, a 15-year-old girl living in present day Japan of 1997, goes searching for her lost cat in her family shrine only to find that a terrible demon has revived in the shrine well. The demon, named Mistress Centipede, grabs Kagome and drags her down the well. After falling through the well, she finds herself transported back in time to a village in Feudal Japan. There, Kagome encounters the Priestess Kaede, who senses Kagome is the reincarnation of Kikyo, Kaede\'s dead sister who was a powerful priestess. The village is soon attacked by Mistress Centipede who followed Kagome through the well and who is searching for the Shikon Jewel, a stone of unbelievable power. While in Feudal Japan, Kagome also crosses paths with the dog hanyō Inuyasha. She first encounters him nailed to a huge tree by arrows and believes he is dead. When she removes the arrows, she is surprised to find he is alive. He explains that he was imprisoned by Sacred Arrows and bound to the Sacred Tree until she released him. Now released, Inuyasha is able to defeat Mistress Centipede with his super human powers. During the fight with Mistress Centipede, Kaede sees a jewel emerge from Kagome\'s chest. Kaede recognizes the stone as the Shikon Jewel and bestows in on Kagome, because Kaede says Kagome is the rightful heir to its power. ',
          language: 'Japanese, English '
        },
        {
          number:'02',
          name: 'Seekers of the Sacred Jewel ',
          info: 'After being released from the Sacred Tree by Kagome, Inuyasha plans to steal the Shikon Jewel, using its powers to become a yōkai. Kaede casts the Beads of Subjugation onto Inuyasha, allowing Kagome the power to control him with a spoken word. Inuyasha and Kagome later chase a crow demon that steals and absorbs the Shikon Jewel. Kagome is able to shoot the crow with a bow and arrow, which consequently shatters the Shikon Jewel. ',
          language: 'Japanese, English '
        },
        {
          number:'01 ',
          name: 'The $$60 Billion Man ',
          info: 'After another "Humanoid Typhoon" incident, this time in Felnarl, Vash is tracked and captured by a group of thugs looking to collect the $$60 billion bounty on his head. He\'s also being tracked down by a pair of investigators, Meryl Stryfe and Milly Thompson from the Bernardelli Insurance Society, and by a bounty hunter named Loose Ruth. Due to the inconsistency in rumors surrounding Vash The Stampede, the bounty hunters confuse each other for the Stampede, and Vash, Meryl, and Milly are able to escape. However, Meryl and Milly must go back, as their duty is to watch over Vash and make sure he doesn\'t cause any more damage that affects their company. ',
          language: 'Japanese, English '
        },
        {
          number:'02 ',
          name: 'Truth of Mistake ',
          info: 'Meryl and Milly arrive in a town that has completely dried up. They stop by the Cesar Mansion to ask about the whereabouts of Vash the Stampede, where they discover that Vash is already there, acting as a bodyguard for Cliff Cesar, a man who has monopolozed and sells the water in town. Vash was hired to protect a young lady named Maryann, the granddaughter of a wealthy entrepreneur. After finding out that Cliff is being threatened by a blonde man with a large silver gun, Meryl and Milly decide to stay at the mansion to find out if the man is Vash. During their stay, it quickly becomes apparent that Maryann is not what she seems. ',
          language: 'Japanese, English '
        },
        {
          number:'01 ',
          name: 'Tempestuous Temperaments ',
          info: 'Fuu, a waitress who is being intimidated by the village prefect\'s son and his guard, begs 19-year-old vagabond Mugen for help. Across town, skilled 20-year-old rōnin Jin kills the prefect\'s bodyguards as they prepare to kill a peasant. Jin enters the restaurant, where Mugen mistakes him for the prefect\'s elite bodyguards and, seeking a worthy adversary, engages him in combat. One of the prefect\'s son\'s guards sets the restaurant on fire and it burns to the ground. The local authorities capture both Mugen and Jin, who were knocked unconscious by coal gas, and sentence them to death. After escaping their execution with some help from Fuu, she asks them to join her on a quest to find a mysterious man who smells of sunflowers. ',
          language: 'Japanese, English '
        },
        {
          number:'02 ',
          name: 'Redeye Reprisal ',
          info: 'Following the previous episode, a bodyguard of the prefect\'s son plots revenge against Mugen after he sliced off his arm in the restaurant. To do so, he convinces his large, ogre-like companion from his remote hut in the woods to kidnap Fuu. ',
          language: 'Japanese, English '
        },
        {
          number:'01 ',
          name: 'Resonance of the Soul – Will Soul Eater Become a Death Scythe? ',
          info: 'Meister Maka Albarn and her weapon partner Soul Eater have collected 99 kishin souls, souls of weapon meisters and death scythes who have eaten human souls, causing their souls to become corrupt and turn into what they call kishin, and only need the soul of a witch to turn Soul into a death scythe. The two seek out the witch Blair, who frequently gets the better of them and tries to seduce Soul. During a battle, Soul tricks Blair into thinking he wants to abandon Maka and become her weapon, allowing Maka to take her soul. Unfortunately, nothing happens when Soul eats it, as Blair turns out to be a magical cat rather than a witch and had merely lost one of her nine souls. As penalty for this mistake, Lord Death confiscates all the souls they\'ve collected, forcing them to start over. ',
          language: 'Japanese, English  '
        },
        {
          number:'02 ',
          name: 'I Am the Star! The Big Man Is Showing Up Here? ',
          info: 'Following a failed attempt at collecting the 99 souls of mobster Al Capone and his men, assassin Black Star and his weapon Tsubaki track them down to the residence of the witch Angela, only to find they have all been killed by Angela\'s bodyguard Mifune. Black Star fights Mifune, but is easily beaten due to his lack of skill as an assassin. When Mifune insults him, however, Black Star accuses him of trying to upstage him and successfully utilizes a surprise attack that defeats him. However, Black Star decides not to kill him or Angela once he discovers the witch to be a helpless young girl. In addition, he declines collecting the mobsters\' souls since he himself did not defeat them. ',
          language: 'Japanese, English '
        },
        {
          number:'01 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'01 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'01 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'01 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'01 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'01 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'01 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'01 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'01 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'01 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'01 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'01',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'01',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'01 ',
          name: ' ',
          info: ' ',
          language: ' '
        },
        {
          number:'02',
          name: ' ',
          info: ' ',
          language: ' '
        }
      ]);
    });
};
