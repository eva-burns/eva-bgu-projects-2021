# Have the function BlackjackHighest(strArr) take the strArr parameter being passed which will be an array
# of numbers and letters representing blackjack cards. Numbers in the array will be written out. So for
# example strArr may be ["two","three","ace","king"]. The full list of possibilities for strArr is: two,
# three, four, five, six, seven, eight, nine, ten, jack, queen, king, ace. Your program should output below,
# above, or blackjack signifying if you have blackjack (numbers add up to 21) or not and the highest card in
# your hand in relation to whether or not you have blackjack. If the array contains an ace but your hand will
# go above 21, you must count the ace as a 1. You must always try and stay below the 21 mark. So using the
# array mentioned above, the output should be below king. The ace is counted as a 1 in this example because
# if it wasn't you would be above the 21 mark.
#
# Another example would be if strArr was ["four","ten","king"], the output here should be above king. If you
# have a tie between a ten and a face card in your hand, return the face card as the "highest card". If you
# have multiple face cards, the order of importance is jack, queen, king.

def blackjack_highest(str_in):
    card_to_num = {"two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7,
                   "eight": 8, "nine": 9, "ten": 10, "jack": 10, "queen": 10, "king": 10}
    sort_arr = sorted(str_in)[::-1]
    total = 0
    biggest_card = ""
    max = 0
    for card in sort_arr:
      if card != "ace":
        total += card_to_num[card]
        if card_to_num[card] > max:
          biggest_card = card
          max = card_to_num[card]
      else:
        if total + 11 > 21:
          total += 1
        else:
          total += 11
          biggest_card = "ace"
          max = 11
    if biggest_card == "ten" or biggest_card == "jack" or biggest_card == "queen":
      if "king" in sort_arr:
        biggest_card = "king"
      elif "queen" in sort_arr:
        biggest_card = "queen"
      elif "jack" in sort_arr:
        biggest_card = "jack"
    points = ""
    if total < 21:
      points = "below"
    elif total == 21:
      points = "blackjack"
    else:
      points = "above"
    return points + " " + biggest_card
