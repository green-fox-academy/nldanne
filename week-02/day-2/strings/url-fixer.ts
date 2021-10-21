'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let index: number = url.indexOf('s');
url.replace(/bots/, 'odds');

console.log(url.substr(0, index+1) + ':' + url.substr(index+1));