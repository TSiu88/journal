export function Entry(title, body){
  this.title = title,
  this.body = body
}

Entry.prototype.bodySplit = function(){
  var split = this.body.split(" ");

  return split;
}

Entry.prototype.wordSplit = function() {
  var charecters = this.body.split("");
  console.log(charecters);
  return charecters;
}


Entry.prototype.wordCount = function(){

  var words = this.bodySplit();
  console.log(words);

  return words.length;

}

Entry.prototype.count = function(){

  var count = {
    vowelCount: 0,
    consonantCount: 0
  }

  var vowels = ["a", "e", "i", "o", "u"];
  var letters = this.wordSplit();

  for ( var i =0; i<letters.length; i++) {


    if (vowels.includes(letters[i])) {

      count.vowelCount++;

    } else {

      count.consonantCount++;
    }
  }

  console.log(count);
  return count;

}

Entry.prototype.getTeaser = function() {

  var words = this.bodySplit();

  return words.splice(0,7);

}