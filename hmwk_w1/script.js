const synth = window.speechSynthesis;

const speak = () => {
  let noun = document.querySelector("#noun").value;
  let verb = document.querySelector("#verb").value;
  let adj = document.querySelector("#adj").value;
  let utterThis = new SpeechSynthesisUtterance(
    "There once was a " +
      adj +
      " programmer who wanted to use JavaScript to " +
      verb +
      " the " +
      noun
  );
  synth.speak(utterThis);
};

const lib = () => {
  let noun = document.querySelector("#noun").value;
  let verb = document.querySelector("#verb").value;
  let adj = document.querySelector("#adj").value;
  let story =
    '<h3 style="text-align:center">There once was a ' +
    adj +
    ' programmer who wanted to use JavaScript to ' +
    verb +
    ' the ' +
    noun + '.</h3>';

    document.getElementById("story").innerHTML = story;
  // document.write(story);
  // document.write('<div id="story">' + story + '</div>');
};


document.querySelector("#button").onclick = () => {
  console.log("button clicked");
  speak();
  lib();
};
