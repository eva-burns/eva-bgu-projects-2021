from blackjack_highest import blackjack_highest

def test_first():
    assert blackjack_highest(["king", "ace", "two"]) == "below king"

def test_second():
    assert blackjack_highest(["queen", "ace", "ten"]) == "blackjack queen"

def test_third():
    assert blackjack_highest(["queen", "ace", "seven"]) == "below queen"

def test_fourth():
    assert blackjack_highest(["five", "six", "king"]) == "blackjack king"

def test_five():
    assert blackjack_highest(["five", "eight", "jack"]) == "above jack"

def test_six():
    assert blackjack_highest(["four", "four", "four", "four", "four", "ace"]) == "blackjack four"

def test_seven():
    assert blackjack_highest(["three", "eight", "queen"]) == "blackjack queen"

def test_eight():
    assert blackjack_highest(["four", "seven", "ace"]) == "below seven"

def test_nine():
    assert blackjack_highest(["jack", "ace"]) == "blackjack ace"

def test_ten():
    assert blackjack_highest(["two", "three", "four", "five", "six", "ace"]) == "blackjack six"



