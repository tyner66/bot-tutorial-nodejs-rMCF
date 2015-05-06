var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexNO = /^\/no/; botRegexKISHK = /^\/kishk/; botRegexSOS = /^\/sos/; botRegexFUCK = /^\/idgaf/; botRegexSHOTS = /^\/shots fired/; botRegexDAMN = /^\/damn/; botRegexMIND = /^\/mind blown/; botRegexSORRY = /^\/sorry/; botRegexOK = /^\/ok/; botRegexLOL = /^\/lol/; botRegexARCHER = /^\/archer/; botRegexPLAYER = /^\/player stats/; botRegexSTATS = /^\/team stats/; botRegexGAMES = /^\/games/; botRegexSTANDINGS = /^\/standings/; botRegexPOWER = /^\/power/; botRegexSTATEMENT = /^\/statement/; botRegexTRADES =/^\/trades/;  botRegexOWNERS = /^\/owner/; botRegexDADDY = /^\/dl/; botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexYub = /^\/yubnub/
      botRegexAd=/^\/advance/; botRegexSC = /^\/SDL/i;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; 
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexNO.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.giphy.com/media/9hQH6Ge447Xt6/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexKISHK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://giphy.com/gifs/maddengiferator-cardinals-arizona-larry-fitzgerald-5wWf7H6s5NgBvofUA00");
    this.res.end();
  }
  else if(request.text && botRegexSOS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/MML/schedules/strength");
    this.res.end();
  }
  else if(request.text && botRegexFUCK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.giphy.com/media/sRmCHLizC6dkA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexSHOTS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.giphy.com/media/13sRJH9ZJmJz5C/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexDAMN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.giphy.com/media/ddd0HBTakik00/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexMIND.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.giphy.com/media/FVgxG3xlhzHC8/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexSORRY.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i251.photobucket.com/albums/gg294/wafpaf/graphics/sorry/sorry6.jpg");
    this.res.end();
  }
  else if(request.text && botRegexOK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/42G7fd8.jpg");
    this.res.end();
  }
  else if(request.text && botRegexLOL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.giphy.com/media/oIR6xeOffCEBa/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexARCHER.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1rArdgW-u3jx2ZPR_a69HZ_qwjP0-6GDpE8emx6ds-NQ/edit?usp=sharing");
    this.res.end();
  }
  else if(request.text && botRegexPLAYER.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/MML/stats/player");
    this.res.end();
  }
  else if(request.text && botRegexSTATS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/MML/stats/team");
    this.res.end();
  }
  else if(request.text && botRegexGAMES.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/MML/schedules");
    this.res.end();
  }
  else if(request.text && botRegexSTANDINGS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/MML/standings/league");
    this.res.end();
  }
  else if(request.text && botRegexPOWER.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/MML/standing/ranking");
    this.res.end();
  } 
  else if(request.text && botRegexSTATEMENT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.virtualsportsnetwork.com/forum/showthread.php?137005-Inaugural-Year-1-Statement-from-Da-Commisioners-Office!");
    this.res.end();
  } 
  else if(request.text && botRegexTRADES.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.virtualsportsnetwork.com/forum/forumdisplay.php?1693-Completed-Trades");
    this.res.end();
  } 
  else if(request.text && botRegexOWNERS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.virtualsportsnetwork.com/forum/showthread.php?138559-The-MCL-(Master-Contact-List)&p=2453502#post2453502");
    this.res.end();
  } 
  else if(request.text && botRegexDADDY.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mml");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mml/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/q3ohLtD.gif");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.kno.com/images/store/knoadvance/overview.png");
    this.res.end();
  }
  else if(request.text && botRegexYub.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.quickmeme.com/img/9f/9f3720469d1ce6c2d20130ed0750935a394df80ffcddec6d16e091d95efea854.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mml/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/mml/players?name="+rep+"&position=all&team=all");
    this.res.end();
  } 

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
