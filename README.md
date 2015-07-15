# projectOneGeneralAssembly

Objective:
Blackjack

Welcome to Donus Donut's GA Project One
================================================

Technologies Used:
JS, CSS, HTML

Approach taken:
+Began with creating a laundry list of user stories (see below).

+Next, I constructed a skeleton HTML and CSS document with basic styling. Used combination of flex-box and fixed elements.

+In terms of JS, I relied on the user stories to compartmentalize functionality to make independent systems. Admittedly, this didn't make for the DRYest of code, but a post-MVP objective is to refactor.

+I decided to go after lowest-hanging fruit first - the betting system. Once that was created, I leapfrogged to game mechanics, rather than constructing the deck. Testing no-more than two new or modified lines of code at a time, I slowly constructed a complex intertwined game system.

+Eventually, I hit a roadblock (the ace function), that required me to build the deck. After many iterations, I opted for an array within an array for the deck. An object's unordered list nature made it difficult to find a way to sort it effectively. For a period, I was playing with two corresponding arrays, but that didn't conform to the Yates Fisher shuffle methodology.

Installation instructions:
+For maximum enjoyment, please ensure your web browser and extensions are up-to-date.

Unsolved Problems:
+While the Ace Function is robust in 99.9% of cases. It may not function properly if 2 or more Aces are dealt when hitting. Since our objective is an MVP, I put debugging this in the ice-box.

+Ideally, a new-hand wouldn't refresh the page. I opted for the quick and dirty method to achieve MVP. However, I know I'd rely on .empty() to ensure retention of chip count, but reset of all other arrays, classes appended, etc.

+No images for MVP, which is OK...but the silver or gold would certainly include images in-lieu of cards. I was having trouble with syntax when adding an image source to an array, but I'm confident I'll have that resolved in a short while.

+Code is WET. OK for MVP, but I'm confident I could refactor the JS file down to sub 150 lines with my existing JS knowledge.



================================================

MVP USER STORIES

1. As a player, I should be able to input a desired wager to be stored so that I can have the thrill of gambling

2. As a player, I should be able to see a numerical value represents my chip count so that I decide how much to wager

3. As a player, I should be able to see my cards so that I can decide whether to hit or stay

4. As a player, I should be able to expect the cards dealt to be randomized each hand so that I can have a new experience each hand

5. As a player, I should be able to expect the same cards won't be dealt more than once per hand so that we don't end up with five aces on the table

6. As a player, I should be able to expect the value of Ace fluctuate between 1 and 11 so that I don't needlessly exceed 21

7. As a player, I should be able to expect the dealer to display one card and hide the other so that there's an element of surprise

8. As a player, I should be able to expect the dealer to follow standard protocol: hit when under 17 / stay when 17 or over so that I can play by the same set of rules as in a casino

9. As a player, I should be able to click a button to hit so that I can indicate I want another card

10. As a player, I should be able to see my additional card so that I can decide if I want to hit or stay

11. As a player, I should be able to click a button to stay so that I can indicate it is the dealer's move

12. As a player, I should be able to expect if I receive 21 straight away, I receive 1.5 payout so that it reflects real life casino rules

13. As a player, I should be able to expect whichever party has the highest number 21 or under wins

14. As a player, I should be able to expect my wager to be returned in the event of a tie so that I can have my bet returned to my chip count

15. As a player, I should be able to see all the cards after my turn so that I understand why I won/lost

16. As a player, I should be able to hit a button to allow a new round to be dealt
