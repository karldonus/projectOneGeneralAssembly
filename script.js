// $(document).ready ( function() {
   alert("Welcome to the General Assembly Casino and Resort. We hope you enjoy your stay!");
var practiceArray = [1, 2, 3, 4, 5];
//Special Object For Deck

var cardNumArray = [2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11];
var cardFaceArray =["2 of Hearts","3 of Hearts","4 of Hearts","5 of Hearts", "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts", "Jack of Hearts", "Queen of Hearts", "King of Hearts", "Ace of Hearts","2 of Clubs","3 of Clubs","4 of Clubs","5 of Clubs", "6 of Clubs", "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", "Jack of Clubs", "Queen of Clubs", "King of Clubs", "Ace of Clubs", "2 of Spades","3 of Spades","4 of Spades","5 of Spades", "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades", "Jack of Spades", "Queen of Spades", "King of Spades", "Ace of Spades", "2 of Diamonds","3 of Diamonds","4 of Diamonds","5 of Diamonds", "6 of Diamonds", "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds", "Jack of Diamonds", "Queen of Diamonds", "King of Diamonds", "Ace of Diamonds"];
var shuffleNumArray = [];
var shuffleFaceArray = [];

function shuffle(cardFaceArray) {
  var copy = [], n = 52, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * 52);

    // If not already shuffled, move it to the new array.
    if (i in cardNumArray) {
      shuffleNumArray.push(cardNumArray[i]);
      // shuffleFaceArray.push(cardFaceArray[i]);
      delete cardNumArray[i];
      // delete cardFaceArray[i];
      n--;
    }
  }

  return shuffleNumArray;
}


// var deck = {
//         //Spades
//         s2 : 2,
//         s3 : 3,
//         s4 : 4,
//         s5 : 5,
//         s6 : 6,
//         s7 : 7,
//         s8 : 8,
//         s9 : 9,
//         s10: 10,
//         sj : 10,
//         sq : 10,
//         sk : 10,
//         sa : 11,
//         //Hearts
//         h2 : 2,
//         h3 : 3,
//         h4 : 4,
//         h5 : 5,
//         h6 : 6,
//         h7 : 7,
//         h8 : 8,
//         h9 : 9,
//         h10: 10,
//         hj : 10,
//         hq : 10,
//         hk : 10,
//         ha : 11,
//
//         //Diamonds
//         d2 : 2,
//         d3 : 3,
//         d4 : 4,
//         d5 : 5,
//         d6 : 6,
//         d7 : 7,
//         d8 : 8,
//         d9 : 9,
//         d10: 10,
//         dj : 10,
//         dq : 10,
//         dk : 10,
//         da : 11,
//         //Clubs
//         c2 : 2,
//         c3 : 3,
//         c4 : 4,
//         c5 : 5,
//         c6 : 6,
//         c7 : 7,
//         c8 : 8,
//         c9 : 9,
//         c10: 10,
//         cj : 10,
//         cq : 10,
//         ck : 10,
//         ca : 11,
// };

//Global Object Storage
var els = {
        chipDisplay    : 200,
        dealerTotal    : 0,
        wagerDisplay   : 0,
        dealerCardCount: 2,
        playerCardCount: 2,
        playerTotal    : 0,

};

var checker = function () {
  console.log("hello");
};
checker();
//Ace Function
// var acePlayerCalc = function () {
//   if (els.playerTotal > 21) {
//     deck.ca = 1;
//     deck.sa = 1;
//     deck.ha = 1;
//     deck.da = 1;
//     calcPlayerTotal();
//     console.log(els.playerTotal);
//     console.log(deck.ca);
//   }
// };

//Loan Shark Mod
var loanShark = function () {
    if (els.wagerDisplay > els.chipDisplay) {
        alert("Oh no! It looks like you're trying to bet more chips than you have...don't worry my friend! Tony the Loan Shark would be more than happy to provide you with a short-term loan. Just don't lose! ");
    }
};

//Calc Player Total
var calcPlayerTotal = function () {
       els.playerTotal = 0;
       for (var i = 0; i < $(".playerSpace").children().length; i++) {
           els.playerTotal = els.playerTotal + parseInt($(".playerSpace").children().eq(i).text());
}};

//Calc Dealer Total
var calcDealerTotal = function () {
       els.dealerTotal = 0;
       for (var i = 1; i < $(".dealerSpace").children().length; i++) {
           els.dealerTotal = els.dealerTotal + parseInt($(".dealerSpace").children().eq(i).text());
}};

//Calc Dealer Visible Total
var calcDealerVisibleTotal = function () {
       els.dealerTotal = 0;
       for (var i = 0; i < $(".dealerSpace").children().length; i++) {
           els.dealerTotal = els.dealerTotal + parseInt($(".dealerSpace").children().eq(i).text());
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
          $(".playerSpace").append("<div></div>");
          $(".playerSpace").children().eq(els.playerCardCount).html(deck.ha);
          calcPlayerTotal();
          acePlayerCalc();
              $(".playerHand").children().eq(0).html("Player Total :  " + els.playerTotal);
          checkBust();
          els.playerCardCount ++;
    }
});

//Stay Function
$("#stay").on("click", function(e){

    if (els.wagerDisplay !== 0) {
          $(".dealerSpace").children().eq(0).html(deck.c9);
          calcDealerVisibleTotal();
              while (els.dealerTotal <= 16) {
                  $(".dealerSpace").append("<div></div>");
                  $(".dealerSpace").children().eq(els.dealerCardCount).html(deck.c7);
                  calcDealerVisibleTotal();
}
          $(".dealerHand").children().eq(0).html("Dealer Total Shown :  " + els.dealerTotal);
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
    //Player Dealt -- Need to go back in later to replace deck.ca/etc with randm
    $(".playerSpace").append("<div></div>");
    $(".playerSpace").children().eq(0).html(deck.ca);
    $(".playerSpace").append("<div></div>");
    $(".playerSpace").children().eq(1).html(deck.c9);
    $(".playerHand").append("<div></div>");
        calcPlayerTotal();
            $(".playerHand").children().eq(0).html("Player Total :  " + els.playerTotal);
    //Dealer Dealt -- Need to go back in later to replace ? AND deck.h2 with randm
    $(".dealerSpace").append("<div></div>");
    $(".dealerSpace").children().eq(0).html("???");
    $(".dealerSpace").append("<div></div>");
    $(".dealerSpace").children().eq(1).html(deck.h10);
    $(".dealerHand").append("<div></div>");
        calcDealerTotal();
            $(".dealerHand").children().eq(0).html("Dealer Total Shown :  " + els.dealerTotal);
    blackJack();
};



  //  4. As a player, I should be able to expect the cards dealt to be randomized each hand so that I can have a new experience each hand

  //  5. As a player, I should be able to expect the same cards won't be dealt more than once per hand so that we don't end up with five aces on the table

  //  6. As a player, I should be able to expect the value of Ace fluctuate between 1 and 11 so that I don't needlessly exceed 21

  //  7. As a player, I should be able to expect the dealer to display one card and hide the other so that there's an element of surprise

  //  9. As a player, I should be able to click a button to hit so that I can indicate I want another card

  //  10. As a player, I should be able to see my additional card so that I can decide if I want to hit or stay
  //  14. As a player, I should be able to expect my wager to be returned in the event of a tie so that I can have my bet returned to my chip count


  //  16. As a player, I should be able to hit a button to allow a new round to be dealt



// });
