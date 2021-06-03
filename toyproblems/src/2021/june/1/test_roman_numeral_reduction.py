from roman_numeral_reduction import roman_numeral_reduction

def test_first():
    assert roman_numeral_reduction("LLLXXXVVVV") == "CC"

def test_second():
    assert roman_numeral_reduction("XXXVVIIIIIIIIII") == "L"

def test_third():
    assert roman_numeral_reduction("DDLL") == "MC"

def test_fourth():
    assert roman_numeral_reduction("CCCCLL") == "D"

def test_five():
    assert roman_numeral_reduction("CCCCCCCCLLLL") == "M"

def test_six():
    assert roman_numeral_reduction("IIIII") == "V"

def test_seven():
    assert roman_numeral_reduction("IIIIIIIIII") == "X"

def test_eight():
    assert roman_numeral_reduction("XXXVVVIIIII") == "L"

def test_nine():
    assert roman_numeral_reduction("LXXXVVVIIIII") == "C"


