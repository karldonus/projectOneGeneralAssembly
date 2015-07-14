// $(document).ready ( function() {
   alert("Welcome to the General Assembly Casino and Resort. We hope you enjoy your stay!");

//Special Array For Deck

var deckNum = [["Two of Clubs",2],["Three of Clubs",3],["Four of Clubs",4],["Five of Clubs",5],["Six of Clubs",6],["Seven of Clubs",7],["Eight of Clubs",8],["Nine of Clubs",9],["Ten of Clubs",10],["Jack of Clubs",10],["Queen of Clubs",10],["King of Clubs",10],["Ace of Clubs",11],["Two of Hearts",2],["Three of Hearts",3],["Four of Hearts",4],["Five of Hearts",5],["Six of Hearts",6],["Seven of Hearts",7],["Eight of Hearts",8],["Nine of Hearts",9],["Ten of Hearts",10],["Jack of Hearts",10],["Queen of Hearts",10],["King of Hearts",10],["Ace of Hearts",11],["Two of Spades",2],["Three of Spades",3],["Four of Spades",4],["Five of Spades",5],["Six of Spades",6],["Seven of Spades",7],["Eight of Spades",8],["Nine of Spades",9],["Ten of Spades",10],["Jack of Spades",10],["Queen of Spades",10],["King of Spades",10],["Ace of Spades",11],["Two of Diamonds",2],["Three of Diamonds",3],["Four of Diamonds",4],["Five of Diamonds",5],["Six of Diamonds",6],["Seven of Diamonds",7],["Eight of Diamonds",8],["Nine of Diamonds",9],["Ten of Diamonds",10],["Jack of Diamonds",10],["Queen of Diamonds",10],["King of Diamonds",10],["Ace of Diamonds",11]];

//Fisher Yates Method
function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}


//Global Object Storage
var els = {
        chipDisplay    : 200,
        dealerTotal    : 0,
        wagerDisplay   : 0,
        dealerCardCount: 2,
        playerCardCount: 2,
        playerTotal    : 0,
};

//Loan Shark Mod
var loanShark = function () {
    if (els.chipDisplay < 0) {
        alert("Oh no! It looks like you're trying to bet more chips than you have...don't worry my friend! Tony the Loan Shark would be more than happy to provide you with a short-term loan. Just don't lose! ");
    }
};

//Calc Player Total
var calcPlayerTotal = function () {
       els.playerTotal = 0;
       for (var i = 0; i < $(".playerHidden").children().length; i++) {
           els.playerTotal = els.playerTotal + parseInt($(".playerHidden").children().eq(i).text());
}};

//Calc Dealer Total
var calcDealerTotal = function () {
       els.dealerTotal = 0;
       for (var i = 0; i < $(".dealerHidden").children().length; i++) {
           els.dealerTotal = els.dealerTotal + parseInt($(".dealerHidden").children().eq(i).text());
}};

//Bet Function
$("#bet").on("click", function(e) {
    if (els.wagerDisplay === 0) {
          els.wagerDisplay = $("#form").val();
          els.chipDisplay  = els.chipDisplay - els.wagerDisplay;
          loanShark();
          $("#chipCount").html("Chip Count: " + els.chipDisplay);
          $("#wager").html("Wager: " + els.wagerDisplay);
          $("#form").val("");
          deal();
}});

//Hit Function
$("#hit").on("click", function(e){
    if (els.wagerDisplay !== 0) {
      $(".playerHand").prepend("<div></div>");
      $(".playerHand").children().eq(0).html(deckNum[3][0]);
      $(".playerHidden").prepend("<div></div>");
      $(".playerHidden").children().eq(0).html(deckNum[3][1]);

          calcPlayerTotal();
          // acePlayerCalc();
              $(".playerTitle").children().eq(0).html("Player's Hand:  " + els.playerTotal);
          checkBust();
          els.playerCardCount ++;
    }
});

// $(".playerSpace").append("<div></div>");
// $(".playerSpace").children().eq(1).html(deckNum[1][0]);
// $(".playerHidden").append("<div></div>");
// $(".playerHidden").children().eq(1).html(deckNum[1][1]);

//Stay Function
$("#stay").on("click", function(e){

    if (els.wagerDisplay !== 0) {
          $(".dealerHand").children().eq(0).html(deckNum[4][0]);
          $(".dealerHidden").prepend("<div></div>");
          $(".dealerHidden").children().eq(0).html(deckNum[4][1]);

          calcDealerTotal();
              while (els.dealerTotal <= 16) {
                  $(".dealerHand").prepend("<div></div>");
                  $(".dealerHand").children().eq(0).html(deckNum[5][0]);
                  $(".dealerHidden").prepend("<div></div>");
                  $(".dealerHidden").children().eq(0).html(deckNum[5][1]);

                  calcDealerTotal();
}
          $(".dealerTitle").children().eq(0).html("Dealer's Hand: " + els.dealerTotal);
          checkWinner();
    }
});

//BlackJack
var blackJack = function () {
    if (els.playerTotal === 21) {
          alert("Congratulations You Hit Blackjack!");
          els.wagerDisplay = els.wagerDisplay * 2.5;
          els.chipDisplay  = els.chipDisplay + els.wagerDisplay;
          els.wagerDisplay = 0;
          $("#chipCount").html("Chip Count: " + els.chipDisplay);
          $("#wager").html("Wager: " + els.wagerDisplay);
                    //reshuffle();
}};

//Check If Winner or Bust at END
var checkWinner = function () {
    //wins - 1st case
    if (els.playerTotal <= 21 && els.playerTotal > els.dealerTotal) {
          alert("Congratulations You Won! Play Another Hand.");
          els.wagerDisplay = els.wagerDisplay * 2;
          els.chipDisplay  = els.chipDisplay + els.wagerDisplay;
          els.wagerDisplay = 0;
          $("#chipCount").html("Chip Count: " + els.chipDisplay);
          $("#wager").html("Wager: " + els.wagerDisplay);
                    //reshuffle();
}
    //wins - 2nd case
    else if (els.dealerTotal > 21) {
          alert("Congratulations You Won! Dealer Bust. Play Another Hand.");
          els.wagerDisplay = els.wagerDisplay * 2;
          els.chipDisplay  = els.chipDisplay + els.wagerDisplay;
          els.wagerDisplay = 0;
          $("#chipCount").html("Chip Count: " + els.chipDisplay);
          $("#wager").html("Wager: " + els.wagerDisplay);
                    //reshuffle();
}

  //tie
    else if (els.playerTotal <= 21 && els.playerTotal === els.dealerTotal) {
          alert("A tie! Play Another Hand.");
          els.chipDisplay  = els.chipDisplay + parseInt(els.wagerDisplay);
          els.wagerDisplay = 0;
          $("#chipCount").html("Chip Count :  " + els.chipDisplay);
          $("#wager").html("Wager :  " + els.wagerDisplay);
                    //reshuffle();
}

//looses
  else if (els.playerTotal < 21 && els.playerTotal < els.dealerTotal) {
          if (els.chipDisplay < 0) {
              alert("Oh No! You Lost. Loan Shark Tony Broke Your Legs. Here's the Gambling Addiction Hotline: 1-800-522-4700.");
              els.wagerDisplay = 0;
              $("#wager").html("Wager: " + els.wagerDisplay);
                  //reshuffle();
}
          else if (els.chipDisplay >= 0) {
                alert("Oh No! You Lost. Play Another Hand.");
                els.wagerDisplay = 0;
                $("#wager").html("Wager: " + els.wagerDisplay);
                    //reshuffle();
}}};

//Check Bust
var checkBust = function () {
    if (els.playerTotal > 21) {
      if (els.chipDisplay < 0) {
            alert("Oh No! You Bust. Loan Shark Tony Broke Your Legs. Here's the Gambling Addiction Hotline: 1-800-522-4700.");
            els.wagerDisplay = 0;
            $("#wager").html("Wager: " + els.wagerDisplay);
                //reshuffle();
}
      else if (els.chipDisplay >= 0) {
            alert("Oh No! You Bust. Play Another Hand.");
            els.wagerDisplay = 0;
            $("#wager").html("Wager: " + els.wagerDisplay);
                //reshuffle();
}}};

//Display first four "cards" and their totals
var deal = function () {
    //shuffle first
    shuffle(deckNum);
    //Player Dealt -- Need to go back in later to replace deck.ca/etc with randm
    $(".playerHand").prepend("<div></div>");
    $(".playerHand").children().eq(0).html(deckNum[0][0]);
    $(".playerHidden").prepend("<div></div>");
    $(".playerHidden").children().eq(0).html(deckNum[0][1]);

    $(".playerHand").prepend("<div></div>");
    $(".playerHand").children().eq(0).html(deckNum[1][0]);
    $(".playerHidden").prepend("<div></div>");
    $(".playerHidden").children().eq(0).html(deckNum[1][1]);

        calcPlayerTotal();
            $(".playerTitle").children().eq(0).html("Player's Hand: " + els.playerTotal);
    //Dealer Dealt -- Need to go back in later to replace ? AND deck.h2 with randm
    $(".dealerHand").prepend("<div></div>");
    $(".dealerHand").children().eq(0).html(deckNum[2][0]);
    $(".dealerHidden").prepend("<div></div>");
    $(".dealerHidden").children().eq(0).html(deckNum[2][1]);

    $(".dealerHand").prepend("<div></div>");
    $(".dealerHand").children().eq(0).html("???");

        calcDealerTotal();
            $(".dealerTitle").children().eq(0).html("Dealer's Hand: " + els.dealerTotal);
                blackJack();
};

  //  6. As a player, I should be able to expect the value of Ace fluctuate between 1 and 11 so that I don't needlessly exceed 21

  //  16. As a player, I should be able to hit a button to allow a new round to be dealt

// });
