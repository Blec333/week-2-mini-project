


var timeEl = document.querySelector(".time");
var timerInterval;
var isEnterKey;
var guessedWord;
var hiddenWord;
var secondsLeft;
var visibleLetterCount = 0;
var wins = 0;
var losses = 0;
var playButton = document.querySelector("#click-to-play");
var lettersContainer = document.querySelector(".letters-container");
var guessText = document.querySelector("#guess-text");
var submitButton = document.querySelector("#commit-guess");
var lossesValue = document.querySelector("#loss-value");
var winsValue = document.querySelector("#win-value");


function scoreCard() {
  if (localStorage.getItem("wins") > 0 || localStorage.getItem("losses") > 0) {
    if (confirm("Would you like to load your scorecard?")) {
      wins = localStorage.getItem("wins");
      winsValue.textContent = wins;
      losses = localStorage.getItem("losses");
      lossesValue.textContent = losses;
    }
  }
}
scoreCard();



document.addEventListener("keydown", function (event) {
  if (event.key.toUpperCase() === "ENTER") {
    guessText.textContent = "";
  }
}
);


var arrayOfWords = ["kettle", "settle", "create", "timber", "buffet", "lesson", "devote", "wonder", "summit", "mosque", "normal", "winner", "market", "harbor", "unfair", "report", "border", "pastel", "battle", "credit", "clique", "height", "sector", "marble", "season", "notion", "coffee", "proper", "tactic", "twitch", "define", "father", "expose", "sleeve", "repeat", "efflux", "random", "prayer", "wander", "admire", "ribbon", "breeze", "bullet", "belong", "retire", "ethics", "morale", "threat", "deadly", "squash", "exempt", "scream", "retain", "galaxy", "matrix", "active", "vacuum", "switch", "horror", "collar", "vision", "tenant", "studio", "pillow", "driver", "danger", "deputy", "theory", "filter", "manage", "facade", "impact", "extort", "suffer", "bishop", "spider", "reader", "census", "corner", "chance", "monkey", "sticky", "budget", "insist", "worker", "choose", "letter", "silver", "hammer", "injury", "needle", "school", "behead", "drawer", "annual", "ignite", "career", "afford", "dollar", "advice", "virtue", "ethnic", "valley", "appeal", "engine", "assume", "infect", "bucket", "burial", "canvas", "colony", "method", "cheque", "direct", "helmet", "artist", "instal", "sample", "remind", "planet", "mirror", "arrest", "immune", "velvet", "agenda", "depend", "accept", "stream", "aspect", "follow", "hiccup", "summer", "update", "unrest", "memory", "subway", "detail", "cinema", "profit", "polish", "decide", "differ", "relate", "stride", "bloody", "matter", "leader", "appear", "acquit", "broken", "affair", "single", "latest", "number", "palace", "action", "sacred", "safari", "shiver", "linear", "gravel", "island", "refuse", "suntan", "review", "string", "margin", "volume", "social", "rocket", "coerce", "pepper", "trance", "tumble", "branch", "degree", "kidney", "shorts", "parade", "exceed", "expect", "remark", "sphere", "forest", "cattle", "ensure", "ignore", "Europe", "resist", "insure", "length", "lonely", "mother", "polite", "marine", "defend", "animal", "absent", "slogan", "resort", "agency", "cancer", "second", "escape", "divide", "gallon", "cousin", "packet", "flight", "cherry", "master", "barrel", "rotate", "common", "throat", "glance", "linger", "please", "empire", "treaty", "nuance", "harass", "ballet", "tissue", "castle", "kidnap", "sermon", "porter", "viable", "borrow", "chorus", "church", "return", "offend", "sister", "senior", "double", "resign", "grudge", "banner", "manner", "occupy", "safety", "mutual", "answer", "forbid", "pardon", "ladder", "banana", "ground", "revive", "hotdog", "stitch", "prefer", "tablet", "desert", "poetry", "honest", "debate", "cellar", "speech", "remain", "bridge", "bundle", "reform", "gossip", "offset", "layout", "rhythm", "regret", "excuse", "cereal", "revise", "relief", "tumour", "guitar", "reject", "quaint", "corpse", "useful", "behave", "makeup", "charge", "stable", "figure", "heroin", "thanks", "rotten", "elapse", "closed", "patent", "ballot", "heaven", "moving", "fossil", "health", "finish", "carbon", "rabbit", "peanut", "jockey", "sketch", "thread", "object", "flavor", "window", "suburb", "affect", "effort", "format", "embark", "reduce", "junior", "betray", "locate", "course", "thrust", "expand", "doctor", "output", "attack", "garlic", "cotton", "native", "bottom", "critic", "formal", "misery", "vessel", "crouch", "sodium", "indoor", "family", "screen", "desire", "writer", "couple", "bitter", "estate", "trench", "favour", "belief", "mobile", "flower", "foster", "weapon", "morsel", "square", "turkey", "adjust", "poison", "dealer", "crisis", "global", "button", "spring", "outlet", "scheme", "effect", "listen", "weight", "friend", "embryo", "demand", "origin", "future", "employ", "cancel", "center", "revoke", "middle", "system", "happen", "public", "ritual", "pledge"];


playButton.addEventListener("click", function () {
  clearInterval(timerInterval);
  hiddenWord = arrayOfWords.at(Math.floor(Math.random() * arrayOfWords.length)).toUpperCase();
  console.log(hiddenWord);
  for (i = 0; i < hiddenWord.length; i++) {
    lettersContainer.children[i].textContent = "_";
    lettersContainer.children[i].setAttribute("data-state", "hidden");
    visibleLetterCount = 0;
  }
  secondsLeft = 300;
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left to guess!.";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      losses++;
      localStorage.setItem("losses", losses);
      timeEl.textContent = "Oh no! Out of time...";
    }
  }, 1000);
}
);

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  var guessedWord = guessText.value.toUpperCase();
  guessText.textContent = "";
  if (secondsLeft > 0 && visibleLetterCount < 6) {
    for (i = 0; i < hiddenWord.length; i++) {
      var state = lettersContainer.children[i].getAttribute("data-state");
      if (hiddenWord.charAt(i) === guessedWord.charAt(i) && state === "hidden") {
        lettersContainer.children[i].textContent = hiddenWord[i];
        lettersContainer.children[i].setAttribute("data-state", "visible");
        visibleLetterCount = visibleLetterCount + 1
      } else {
        lettersContainer.children[i].setAttribute("data-state", "hidden");
      }
    }
    if (visibleLetterCount === 6) {
      wins++;
      winsValue.textContent = wins;
      clearInterval(timerInterval);
      timeEl.textContent = "WIN WIN WIN!";
      guessText.textContent = "";
      localStorage.setItem("wins", wins);
    } else if (secondsLeft === 0 && visibleLetterCount < 6) {
      losses++;
      lossesValue.textContent = losses;
      clearInterval(timerInterval);
      timeEl.textContent = "Oh no! Out of time...";
      guessText.textContent = "";
    }
  }
}
);



