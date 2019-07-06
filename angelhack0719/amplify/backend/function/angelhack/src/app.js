/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var hostingS3AndCloudFrontHostingBucketName = process.env.HOSTING_S3ANDCLOUDFRONT_HOSTINGBUCKETNAME

Amplify Params - DO NOT EDIT */

var express = require('express');
var bodyParser = require('body-parser');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

/**********************
 * Example get method *
 **********************/

app.get('/channels', function(req, res) {
  // Add your code here
  res.json({
    channels: [
      'SpeedRunners',
      'Move or Die',
      'Holodrive',
      'GRIP',
      'Hellion',
      'Divinity Original Sin 2',
      'Foxhole',
      'Unturned',
      'Battlerite',
      'League of Legends',
      "PLAYERUNKNOWN'S BATTLEGROUNDS",
      'Counter-Strike: Global Offensive',
      'Overwatch',
      'Minecraft',
      'World of Warcraft',
      'Hearthstone',
      'Dota 2',
      'Grand Theft Auto V',
      "Tom Clancy's Rainbow Six Siege",
      'Rocket League',
      'Heroes of the Storm',
      "Garry's Mod",
      'H1Z1: King of the Kill',
      'ARK: Survival Evolved',
      'Path of Exile',
      'Team Fortress 2',
      'Rust',
      'World of Tanks',
      'FINAL FANTASY XIV',
      'Geometry Dash',
      'Dolphin',
      'Terraria',
      'Brawlhalla',
      'The Walking Dead',
      'Sonic Mania',
      'Golf With Your Friends',
      'Cities: Skylines',
      'Arma 3',
      'Left 4 Dead 2',
      'Project 64',
      'RuneScape',
      'Dead by Daylight',
      'War Thunder',
      'World of Warships',
      'Duelyst',
      'Battlefield 1',
      'The Binding of Isaac: Rebirth',
      'Black Desert Online',
      'Black Squad',
      'HIVESWAP: ACT 1',
      'Hearts of Iron IV',
      'Monaco',
      'Blade & Soul',
      "Sid Meier's Civilization V",
      'SMITE',
      'Factorio',
      'Diablo III',
      'StarCraft II',
      'The Elder Scrolls V: Skyrim',
      "Tom Clancy's The Division",
      "Don't Starve Together",
      'ShellShock Live',
      'Space Engineers',
      'Euro Truck Simulator 2',
      'Portal 2',
      'The Sims 4',
      'Call of Duty: Black Ops III',
      'Stardew Valley',
      'DARK SOULS III',
      'Counter-Strike: Source',
      'Fallout 4',
      'Fallout: New Vegas',
      'MapleStory',
      'The Witcher 3: Wild Hunt',
      'Half-Life 2',
      'Battlefield 4',
      'XCOM 2',
      'Guild Wars 2',
      'The Elder Scrolls V: Skyrim Special Edition',
      'Tooth and Tail',
      'Outlast',
      'Depth',
      'Tabletop Simulator',
      'Stellaris',
      'Trove',
      'Gang Beasts',
      'The Forest',
      'Insurgency',
      'Europa Universalis IV',
      'Town of Salem',
      'Robocraft',
      'Golf It!',
      'Shadowverse',
      '7 Days to Die',
      'Killing Floor 2',
      'StarCraft',
      'Undertale',
      'Duck Game',
      'Dirty Bomb',
      'Business Tour - Online Multiplayer Board Game',
      'Fallout Shelter',
      'Slime Rancher',
      'Last Man Standing',
      'Titanfall 2',
      'STAR WARS Battlefront',
      'Mount & Blade: Warband',
      'STAR WARS: The Old Republic',
      'PlanetSide 2',
      'Clicker Heroes',
      'Psychonauts',
      'American Truck Simulator',
      'Call of Duty: World at War',
      'Crossout',
      'Dofus',
      'Comedy Night',
      'Enter the Gungeon',
      'Elite Dangerous',
      'Wizard101',
      'AdVenture Capitalist',
      'Age of Empires II: HD Edition',
      'EVE Online',
      'Heat Signature',
      'RimWorld',
      'WarThunder',
      'Rivals of Aether',
      'BeamNG.drive',
      'Subnautica',
      "Sid Meier's Civilization VI",
      'The Elder Scrolls Online',
      'DOOM',
      'FTL: Faster Than Light',
      'Realm of the Mad God',
      'Just Cause 3',
      'Portal',
      'Dead Cells',
      'FIFA 17',
      'DRAGON BALL XENOVERSE 2',
      'Friday the 13th: The Game',
      'Prison Architect',
      'TEKKEN 7',
      'The Escapists 2',
      'Crusader Kings II',
      'Microtransaction Simulator',
      'Middle-earth: Shadow of Mordor',
      'METAL GEAR SOLID V: THE PHANTOM PAIN',
      'Idle Champions of the Forgotten Realms',
      'HuniePop',
      'Ultimate Chicken Horse',
      'NieR:Automata',
      'DARK SOULS II: Scholar of the First Sin',
      'Total War: WARHAMMER II',
      'Skullgirls',
      'Farming Simulator 17',
      '100% Orange Juice',
      'Crypt of the NecroDancer'
    ]
  });
});

app.get('/channels/*', function(req, res) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post('/channels', function(req, res) {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});

app.post('/channels/*', function(req, res) {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put('/channels', function(req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});

app.put('/channels/*', function(req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete('/channels', function(req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

app.delete('/channels/*', function(req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

app.listen(3000, function() {
  console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
