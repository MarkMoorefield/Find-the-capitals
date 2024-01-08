var capitals = function (word) {
    var count = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) {
              count.push(i);
      }
    }
    return count;
  };