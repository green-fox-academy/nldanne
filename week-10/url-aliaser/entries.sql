CREATE TABLE entries (
    id INT NOT NULL AUTO_INCREMENT, 
    url VARCHAR(255) NOT NULL, 
    alias VARCHAR(28) NOT NULL UNIQUE, 
    hitCount INT NOT NULL DEFAULT 0, 
    secretCode INT NOT NULL,
    PRIMARY KEY(id));


postman 
{
    "url": "https://www.reddit.com",
    "alias": ""
}