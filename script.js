$(document).ready ( function() {
   alert("Welcome to the General Assembly Casino and Resort. We hope you enjoy your stay!");

//Special Object For Deck
var deck = {
        //Spades
        s2 : 2,
        s3 : 3,
        s4 : 4,
        s5 : 5,
        s6 : 6,
        s7 : 7,
        s8 : 8,
        s9 : 9,
        s10: 10,
        sj : 10,
        sq : 10,
        sk : 10,
        sa : 11,
        //Hearts
        h2 : 2,
        h3 : 3,
        h4 : 4,
        h5 : 5,
        h6 : 6,
        h7 : 7,
        h8 : 8,
        h9 : 9,
        h10: 10,
        hj : 10,
        hq : 10,
        hk : 10,
        ha : 11,

        //Diamonds
        d2 : 2,
        d3 : 3,
        d4 : 4,
        d5 : 5,
        d6 : 6,
        d7 : 7,
        d8 : 8,
        d9 : 9,
        d10: 10,
        dj : 10,
        dq : 10,
        dk : 10,
        da : 11,
        //Clubs
        c2 : 2,
        c3 : 3,
        c4 : 4,
        c5 : 5,
        c6 : 6,
        c7 : 7,
        c8 : 8,
        c9 : 9,
        c10: 10,
        cj : 10,
        cq : 10,
        ck : 10,
        ca : 11,
};

//Global Object Storage
var els = {
        chipDisplay    : 200,
        wagerDisplay   : 0,
        dealerCardCount: 2,
        playerCardCount: 2,
        playerTotal    : 0,
        dealerTotal    : 0,
        dealerDummy    : 0,
};
//Calc Player Total
var calcPlayerTotal = function () {
       for (var i = 0; i < $(".playerSpace").children().length; i++) {
           els.playerTotal = els.playerTotal + parseInt($(".playerSpace").children().eq(i).text());
}};

   //Calc Dealer Total
var calcDealerHiddenTotal = function () {
       for (var i = 1; i < $(".dealerSpace").children().length; i++) {
           els.dealerTotal = els.dealerTotal + parseInt($(".dealerSpace").children().eq(i).text());
}};

//Initial Bet Function
$("#bet").on("click", function(e) {
    if (els.wagerDisplay === 0) {
          els.wagerDisplay = $("#form").val();
          els.chipDisplay  = els.chipDisplay - els.wagerDisplay;
          $("#chipCount").html("Chip Count: " + els.chipDisplay);
          $("#wager").html("Wager: " + els.wagerDisplay);
          $("#form").val("");
          deal();
}});

//BlackJack
var blackJack = function () {
    if (els.playerTotal === 21) {
          alert("Congratulations You Hit Blackjack!");
          els.wagerDisplay = els.wagerDisplay * 2.5;
          els.chipDisplay  = els.chipDisplay + els.wagerDisplay;
          els.wagerDisplay = 0;
          $("#chipCount").html("Chip Count: " + els.chipDisplay);
          $("#wager").html("Wager: " + els.wagerDisplay);
}};

//Check If Winner or Bust at END
var checkWinner = function () {
  //wins
    if (els.playerTotal <= 21 && els.playerTotal > els.dealerTotal) {
          alert("Congratulations You Won! Play Another Hand.");
          els.wagerDisplay = els.wagerDisplay * 2;
          els.chipDisplay  = els.chipDisplay + els.wagerDisplay;
          els.wagerDisplay = 0;
          $("#chipCount").html("Chip Count: " + els.chipDisplay);
          $("#wager").html("Wager: " + els.wagerDisplay);
}
    else if (els.dealerTotal > 21) {
          alert("Congratulations You Won! Dealer Bust. Play Another Hand.");
          els.wagerDisplay = els.wagerDisplay * 2;
          els.chipDisplay  = els.chipDisplay + els.wagerDisplay;
          els.wagerDisplay = 0;
          $("#chipCount").html("Chip Count: " + els.chipDisplay);
          $("#wager").html("Wager: " + els.wagerDisplay);
}
  //looses
    else if (els.playerTotal <= 21 && els.playerTotal < els.dealerTotal) {
          alert("Oh No! You Lost. Play Another Hand.");
          els.wagerDisplay = 0;
          $("#wager").html("Wager: " + els.wagerDisplay);
}
  //tie
    else if (els.playerTotal <= 21 && els.playerTotal > els.dealerTotal) {
          alert("A tie! Play Another Hand.");
          els.chipDisplay  = els.chipDisplay + els.wagerDisplay;
          els.wagerDisplay = 0;
          $("#chipCount").html("Chip Count: " + els.chipDisplay);
          $("#wager").html("Wager: " + els.wagerDisplay);
}};

//Check Bust
var checkBust = function () {
    if (els.playerTotal > 21) {
          alert("Oh No! You Bust. Play Another Hand.");
          els.wagerDisplay = 0;
          $("#wager").html("Wager: " + els.wagerDisplay);
}};

//Display first four "cards" and their totals
var deal = function () {
    //Player Dealt -- Need to go back in later to replace deck.s2/etc with randm
    $(".playerSpace").append("<div></div>");
    $(".playerSpace").children().eq(0).html(deck.ca);
    $(".playerSpace").append("<div></div>");
    $(".playerSpace").children().eq(1).html(deck.ck);
    $(".playerHand").append("<div></div>");
        calcPlayerTotal();
            $(".playerHand").children().eq(0).html("Player Total: " + els.playerTotal);
    //Dealer Dealt -- Need to go back in later to replace ? AND deck.h2 with randm
    $(".dealerSpace").append("<div></div>");
    $(".dealerSpace").children().eq(0).html("?");
    $(".dealerSpace").append("<div></div>");
    $(".dealerSpace").children().eq(1).html(deck.h2);
    $(".dealerHand").append("<div></div>");
        calcDealerHiddenTotal();
            $(".dealerHand").children().eq(0).html("Dealer Total Shown: " + els.dealerTotal);
    blackJack();
};



  //  4. As a player, I should be able to expect the cards dealt to be randomized each hand so that I can have a new experience each hand
   //
  //  5. As a player, I should be able to expect the same cards won't be dealt more than once per hand so that we don't end up with five aces on the table
   //
  //  6. As a player, I should be able to expect the value of Ace fluctuate between 1 and 11 so that I don't needlessly exceed 21
   //
  //  7. As a player, I should be able to expect the dealer to display one card and hide the other so that there's an element of surprise
   //
  //  8. As a player, I should be able to expect the dealer to follow standard protocol: hit when under 17 / stay when 17 or over so that I can play by the same set of rules as in a casino
   //
  //  9. As a player, I should be able to click a button to hit so that I can indicate I want another card
   //
  //  10. As a player, I should be able to see my additional card so that I can decide if I want to hit or stay
   //
  //  11. As a player, I should be able to click a button to stay so that I can indicate it is the dealer's move
   //
  //  12. As a player, I should be able to expect if I receive 21 straight away, I receive 1.5 payout so that it reflects real life casino rules
   //
  //  13. As a player, I should be able to expect whichever party has the highest number 21 or under wins
   //
  //  14. As a player, I should be able to expect my wager to be returned in the event of a tie so that I can have my bet returned to my chip count
   //
  //  15. As a player, I should be able to see all the cards after my turn so that I understand why I won/lost
   //
  //  16. As a player, I should be able to hit a button to allow a new round to be dealt



})
