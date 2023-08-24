//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 24; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "pg"; //what you'll name all your comic pages
const imgPart = "_" //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "png"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/thumbs" //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = maxpg;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "Prequel 01: 'Watching'", //the title of the page (leaving this blank will default it to "Page X")
        date: writeDate(2021, 4, 22), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        altText: "Silently, she watched, as she had for a while now. Seemingly motionless, focussing on what lay before her.", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 1, //how many image files this page is split into
        authorNotes: `
            <p>Silently, she watched, as she had for a while now. Seemingly motionless, focussing on what lay before her.</p>
            `,
    },
    {
        pgNum: 2,
        title: "Prequel 02: 'Apprehension'",
        date: writeDate(2021, 4, 26),
        altText: "Her gaze swept across the Voidlander and his companion. What were those foul creatures doing in the forest? She prepared for encounter.",
        imageFiles: 1,
        authorNotes: `
            <p>Her gaze swept across the Voidlander and his companion. What were those foul creatures doing in the forest? She prepared for encounter.</p>
            `,
    },
    {
        pgNum: 3,
        title: "Prequel 03, 'Falling'",
        date: writeDate(2021, 6, 14),
        altText: "A nightly friend turned unwanted foe by accident, leading to disaster. The Voidlander and his companion rose from their calm fire, highly alerted.",
        imageFiles: 1,
        authorNotes: `
            <p>A nightly friend turned unwanted foe by accident, leading to disaster. The Voidlander and his companion rose from their calm fire, highly alerted.</p>
            `,
    },
    {
        pgNum: 4,
        title: "Prequel 04, 'Betrayal'",
        date: writeDate(2021, 8, 25),
        altText: "Her knife, trusted tool and provider of safety, turned on her due to the Voidlander's foul powers. Her only option for now was to evade.",
        imageFiles: 1,
        authorNotes: `
            <p>Her knife, trusted tool and provider of safety, turned on her due to the Voidlander's foul powers. Her only option for now was to evade.</p>
            `,
    },
    {
        pgNum: 5,
        title: "Prequel 05, 'Reflexes'",
        date: writeDate(2021, 9, 5),
        altText: "Only her innate lightning-quick reflexes saved her life - but the struggle was far from over.",
        imageFiles: 1,
        authorNotes: `
            <p>Only her innate lightning-quick reflexes saved her life - but the struggle was far from over.</p>
            `,
    },
    {
        pgNum: 6,
        title: "Prequel 06, 'Flight'",
        date: writeDate(2021, 11, 7),
        altText: "The next step sent her tumbling over the edge. The Tired Forest was not a kind place.",
        imageFiles: 1,
        authorNotes: `
            <p>The next step sent her tumbling over the edge. The Tired Forest was not a kind place.</p>
            `,
    },
	{
        pgNum: 7,
        title: "Prequel 07, 'Plummet'",
        date: writeDate(2021, 11, 22),
        altText: "She saw an image of her father before her eyes, reminding her again and again to not be totally reckless. What would he say right now? Even in this dire situation, the thought alone sparked her defiance.",
        imageFiles: 1,
        authorNotes: `
            <p>She saw an image of her father before her eyes, reminding her again and again to not be totally reckless. What would he say right now? Even in this dire situation, the thought alone sparked her defiance.</p>
            `,
    },
	{
        pgNum: 8,
        title: "Prequel 08, 'Impact'",
        date: writeDate(2021, 12, 2),
        altText: "They say, cats always land on their feet. Elves however, do not. This realization hit her with full force.",
        imageFiles: 1,
        authorNotes: `
            <p>They say, cats always land on their feet. Elves however, do not. This realization hit her with full force.</p>
            `,
    },
	{
        pgNum: 9,
        title: "Prequel 09, 'Need'",
        date: writeDate(2022, 2, 19),
        altText: "Given her condition, she desperately needed a moment of respite to establish a Conduit. She knew that an attempt at Mending was no trivial feat, but what choice did she have?",
        imageFiles: 1,
        authorNotes: `
            <p>Given her condition, she desperately needed a moment of respite to establish a Conduit. She knew that an attempt at Mending was no trivial feat, but what choice did she have?</p>
            `,
    },
	{
        pgNum: 10,
        title: "Prequel 10, 'In-Between'",
        date: writeDate(2022, 2, 25),
        altText: "She arrived in the In-Between, as she had done countless times before. Far, far below she already saw The Core, radiating with power, as if it was waiting for her.",
        imageFiles: 1,
        authorNotes: `
            <p>She arrived in the In-Between, as she had done countless times before. Far, far below she already saw The Core, radiating with power, as if it was waiting for her.</p>
            `,
    },
	{
        pgNum: 11,
        title: "Prequel 11, 'Contact'",
        date: writeDate(2022, 4, 18),
        altText: "Although there was only a loose concept of coherent space in the In-Between, she felt a sense of urge.  As she (or - for lack of a better term - her inner being) came closer to The Core, she could feel its almost overwhelming radiance - pure dark power, sickly sweet and oh so inviting, like a planet covered in boiling molasses. Little did she know how fast she was running out of time indeed, as her forceful descent didn't go unnoticed.",
        imageFiles: 1,
        authorNotes: `
            <p>Although there was only a loose concept of coherent space in the In-Between, she felt a sense of urge.  As she (or - for lack of a better term - her inner being) came closer to The Core, she could feel its almost overwhelming radiance - pure dark power, sickly sweet and oh so inviting, like a planet covered in boiling molasses.<br>
			<br>
			Little did she know how fast she was running out of time indeed, as her forceful descent didn't go unnoticed.</p>
            `,
    },
	{
        pgNum: 12,
        title: "Prequel 12, 'Close'",
        date: writeDate(2022, 4, 25),
        altText: "Going into the darkness of The Core's atmosphere felt like diving into thick oil, as always. By now, it was second nature to hold her breath while being inside - it was common dark elf knowledge to do so due to nasty accidents in the past. Usually, she was able to make the whole travel to establish a Conduit within a few seconds, but she was in a weakened state. The palpitating radiation of The Core was overwhelming.",
        imageFiles: 1,
        authorNotes: `
            <p>Going into the darkness of The Core's atmosphere felt like diving into thick oil, as always. By now, it was second nature to hold her breath while being inside - it was common dark elf knowledge to do so due to nasty accidents in the past. Usually, she was able to make the whole travel to establish a Conduit within a few seconds, but she was in a weakened state. The palpitating radiation of The Core was overwhelming.</p>
            `,
    },
	{
        pgNum: 13,
        title: "Prequel 13, 'Mystery'",
        date: writeDate(2021, 4, 28),
        altText: "He was used to the sounds of the Tired Forest. It was never calm, never peaceful - but this kind of ruckus was unusual. What he found confirmed his suspicions. He was not the sharpest thinker, but his instincts never failed him.",
        imageFiles: 1,
        authorNotes: `
            <p>He was used to the sounds of the Tired Forest. It was never calm, never peaceful - but this kind of ruckus was unusual. What he found confirmed his suspicions. He was not the sharpest thinker, but his instincts never failed him.</p>
            `,
    },
	{
        pgNum: 14,
        title: "Prequel 14, 'The Core'",
        date: writeDate(2021, 5, 15),
        altText: "The Core was as terrifying as it was familiar, given the fact she had visited it almost daily since learning how to establish a Conduit.  Bluhaziel welcomed it. As always, she could feel an incomprehensibly enormous presence. With her mind, she reached out for it.",
        imageFiles: 1,
        authorNotes: `
            <p>The Core was as terrifying as it was familiar, given the fact she had visited it almost daily since learning how to establish a Conduit.  Bluhaziel welcomed it. As always, she could feel an incomprehensibly enormous presence. With her mind, she reached out for it.</p>
            `,
    },
	{
        pgNum: 15,
        title: "Prequel 15, 'Mending'",
        date: writeDate(2021, 5, 21),
        altText: "HER: She touched The Core with her mind, which was so close now that she could feel its thoughts - alien, slow and huge, like boiling thunderstorm clouds - too huge for any normal creature to understand. But still, in some way it responded, by letting her mind connect. As soon as the Conduit was established, she started pulling gently. Immediately, raw power surged through her. Mending was a very costly effect, so she needed to draw more than usual, at the expense of her body's energy reserves. HIM: The last thing he had expected this night was a bloody dark elf going crazy at the border of what he considered his part of the Tired Forest - but there she was, totally oblivious to his presence so far.",
        imageFiles: 1,
        authorNotes: `
            <p>She touched The Core with her mind, which was so close now that she could feel its thoughts - alien, slow and huge, like boiling thunderstorm clouds - too huge for any normal creature to understand. But still, in some way it responded, by letting her mind connect. As soon as the Conduit was established, she started pulling gently. Immediately, raw power surged through her. Mending was a very costly effect, so she needed to draw more than usual, at the expense of her body's energy reserves.<br>
			----<br>
			The last thing he had expected this night was a bloody dark elf going crazy at the border of what he considered his part of the Tired Forest - but there she was, totally oblivious to his presence so far.</p>
            `,
    },
	{
        pgNum: 16,
        title: "Prequel 16, 'Discovered'",
        date: writeDate(2022, 9, 23),
        altText: "The last sliver of energy was used up and she felt her senses failing. Even while dizzyness started to engulf her, she hoped that she was able to keep up the Mending for a long enough time. A sound at the entrance of her hiding place confronted her with the fact she had been discovered, but there was nothing left she could do now. The last thing she saw was the hulking shape of a mountain orc. He looked, as was typical for his sort, very much not amused. Then she sank into blackness.",
        imageFiles: 1,
        authorNotes: `
            <p>The last sliver of energy was used up and she felt her senses failing. Even while dizzyness started to engulf her, she hoped that she was able to keep up the Mending for a long enough time. A sound at the entrance of her hiding place confronted her with the fact she had been discovered, but there was nothing left she could do now. The last thing she saw was the hulking shape of a mountain orc. He looked, as was typical for his sort, very much not amused. Then she sank into blackness.</p>
            `,
    },
	{
        pgNum: 17,
        title: "01, 'Dissonance'",
        date: writeDate(2022, 9, 24),
        altText: "Unsure of what to do with his unexpected bounty, he decided to not leave her to the night forest and its inhabitants. She seemed like a nice prize, even though he couldn't shake the feeling that all of this would lead to more troubles than he ever wanted.",
        imageFiles: 1,
        authorNotes: `
            <p>Unsure of what to do with his unexpected bounty, he decided to not leave her to the night forest and its inhabitants. She seemed like a nice prize, even though he couldn't shake the feeling that all of this would lead to more troubles than he ever wanted.</p>
            `,
    },
	{
        pgNum: 18,
        title: "02, 'Waking up'",
        date: writeDate(2022, 10, 31),
        altText: "She woke up in a completely unknown place, with only a fractured memory of what had happened after entering the cave for Mending. She remembered how hard it had been to establish a proper Conduit, and that she had been discovered. Where was she? Who had brought her here? ",
        imageFiles: 1,
        authorNotes: `
            <p>She woke up in a completely unknown place, with only a fractured memory of what had happened after entering the cave for Mending. She remembered how hard it had been to establish a proper Conduit, and that she had been discovered. Where was she? Who had brought her here?</p>
            `,
    },
	{
        pgNum: 19,
        title: "03, 'Footsteps'",
        date: writeDate(2022, 11, 4),
        altText: "Smelling the dubious food didn't bring her any knowledge, but her drained body's desperate instincts took over and she began to eat hastily. It was nowhere close to elf standards, but better than she thought - a chunky, fatty mixture of meat, roots and vegetables, bland but nourishing. She stopped when she heard footsteps approaching, rather quickly. She knew that it was most probably a very dumb move, but she had one last weapon - and staying in this cell was not an option.",
        imageFiles: 1,
        authorNotes: `
            <p>Smelling the dubious food didn't bring her any knowledge, but her drained body's desperate instincts took over and she began to eat hastily. It was nowhere close to elf standards, but better than she thought - a chunky, fatty mixture of meat, roots and vegetables, bland but nourishing.<br>
			<br>
			She stopped when she heard footsteps approaching, rather quickly. She knew that it was most probably a very dumb move, but she had one last weapon - and staying in this cell was not an option.</p>
            `,
    },
	{
        pgNum: 20,
        title: "04, 'Lurking'",
        date: writeDate(2021, 11, 11),
        altText: "If there was one rule about dark elf clothing, then it could be: \"there is always another concealed weapon\" - and even though Bluhaziel had chosen very light clothing for her exploration trip, lost her knife and was probably too weak to enhance her abilities with a Conduit, she wasn't helpless. As the heavy wooden cell door opened, she was already lurking in the shadows behind - wound up like a feral cat, waiting for the moment to strike.",
        imageFiles: 1,
        authorNotes: `
            <p>If there was one rule about dark elf clothing, then it could be: "there is always another concealed weapon" - and even though Bluhaziel had chosen very light clothing for her exploration trip, lost her knife and was probably too weak to enhance her abilities with a Conduit, she wasn't helpless.<br>
			<br>
			As the heavy wooden cell door opened, she was already lurking in the shadows behind - wound up like a feral cat, waiting for the moment to strike.</p>
            `,
    },
	{
        pgNum: 21,
        title: "05, 'Slicing'",
        date: writeDate(2023, 4, 24),
        altText: "She was trembling with fear, but her mind was made up. With all her strength, she attacked her captor - trying to do as much damage as possible to prevent him from trying to follow her.",
        imageFiles: 1,
        authorNotes: `
            <p>She was trembling with fear, but her mind was made up. With all her strength, she attacked her captor - trying to do as much damage as possible to prevent him from trying to follow her.</p>
            `,
    },
	{
        pgNum: 22,
        title: "06, 'Fleeing'",
        date: writeDate(2023, 3, 21),
        altText: "The fortress seemed to be small - she quickly found a gate, which even stood wide open. Luck shone on her as did the sun while she fled as fast as possible.",
        imageFiles: 1,
        authorNotes: `
            <p>The fortress seemed to be small - she quickly found a gate, which even stood wide open. Luck shone on her as did the sun while she fled as fast as possible.</p>
            `,
    },
	{
        pgNum: 23,
        title: "07 - 'Back in the Forest'",
        date: writeDate(2023, 5, 5),
        altText: "To her surprise, she was able to reach the fortress exit without being held up. Heart pounding, she made her way down the mountainside and into the Tired Forest - although a part she had never been to. When she looked back, it seemed like nobody was following her.",
        imageFiles: 1,
        authorNotes: `
            <p>To her surprise, she was able to reach the fortress exit without being held up. Heart pounding, she made her way down the mountainside and into the Tired Forest - although a part she had never been to.<br>
			When she looked back, it seemed like nobody was following her.</p>
            `,
    },
	{
        pgNum: 24,
        title: "08 - 'Step by Step'",
        date: writeDate(2023, 6, 22),
        altText: "Step by step she got closer to freedom - or so she thought.",
        imageFiles: 1,
        authorNotes: `
            <p>Step by step she got closer to freedom - or so she thought.</p>
            `,
    }
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date
}
