function Entry(title, body){
  this.title = title,
  this.body = body
}

Entry.prototype.bodySplit = function(){
  var split = this.body.split(" ");

  return split;
}

Entry.prototype.wordCount = function(){

  var words = this.body.bodySplit();

  return words.length;

}

Entry.prototype.count = function(){

  var count = {
    vowelCount: 0,
    consonantCount: 0
  }

  var vowels = ["a", "e", "i", "o", "u"];

  if (this.body.includes(vowels)) {

    count.vowelCount++;

  } else {

    count.consonantCount++;

  }

  return count;

}

Entry.prototype.getTeaser = function() {

  var words = this.body.bodySplit();

  return words.splice(0,7);

}