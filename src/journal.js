export function Entry(title, body){
  this.title = title,
  this.body = body;
}

Entry.prototype.bodySplit = function(){
  var split = this.body.split(" ");
  return split;
};

Entry.prototype.wordSplit = function() {
  var characters = this.body.split("");
  return characters;
};

Entry.prototype.sentenceSplit = function() {
  var sentences = this.body.split(".");
  var sentenceWords = sentences[0].split(" ");
  return sentenceWords;
};


Entry.prototype.wordCount = function(){
  var words = this.bodySplit();
  return words.length;
};

Entry.prototype.count = function(){
  var count = {
    vowelCount: 0,
    consonantCount: 0
  };

  var vowels = ["a", "e", "i", "o", "u"];
  var letters = this.wordSplit();

  for ( var i =0; i<letters.length; i++) {
    if (vowels.includes(letters[i])) {
      count.vowelCount++;
    } else {
      count.consonantCount++;
    }
  }

  return count;
};

Entry.prototype.getTeaser = function() {
  var firstSentenceWords = this.sentenceSplit();
  var teaser = "";
  if (firstSentenceWords.length <=8) {
    for (var i=0; i<firstSentenceWords.length; i++){
      teaser += firstSentenceWords[i] + " ";
    }
    teaser += ".";
  } else {
    var words = this.bodySplit();
    var teaserWords = words.splice(0,8);
    for (var j=0; j<teaserWords.length; j++){
      teaser += teaserWords[j] + " ";
    }
    teaser += ". . .";
  }
  return teaser;
};