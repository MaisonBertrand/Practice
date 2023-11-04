/*
build a message generator program. 
Every time a user runs a program, they should get a new, randomized output.
*/
Pmessage = [
    `Keep your face always toward the sunshine—and shadows will fall behind you. —Walt Whitman`
    ,`Extraordinary things are always hiding in places people never think to look. —Jodi Picoul`
    ,`Setting goals is the first step in turning the invisible into the visible. —Tony Robbins`
    ,`You can have it all. Just not all at once. —Oprah Winfrey`
    ,`I’ve missed more than 9000 shots in my career I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. —Michael Jordan`
    ,`Say something positive, and you’ll see something positive. —Jim Thompson`
    ,`All you need is the plan, the road map, and the courage to press on to your destination. —Earl Nightingale`
    ,`Only in the darkness can you see the stars." —Martin Luther King, Jr.`
    ,`I dwell in possibility. —Emily Dickinson`
    ,`A goal is not always meant to be reached, it often serves simply as something to aim at. – Bruce Lee`
    ,`A No. 2 pencil and a dream can take you anywhere. —Joyce Meyer`
    ,`In a gentle way, you can shake the world. —Mahatma Gandhi`
    ,`Be yourself and people will like you. —Jeff Kinney`
    ,`Each day provides its own gifts. —Marcus Aurelius`
    ,`Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you. —Nathaniel Hawthorne`
    ,`You do not find the happy life. You make it. —Thomas S. Monson`
]

positiveMessages = () => {
    let i = Math.floor(Math.random() * 15);
    return Pmessage[i]
}

console.log(positiveMessages())