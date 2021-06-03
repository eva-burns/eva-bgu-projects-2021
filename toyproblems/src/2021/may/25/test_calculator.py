from calculator import calculator

def test_first():
    assert calculator("1+1+1+2") == 5

def test_second():
    assert calculator("7-2+(5-2)") == 8

def test_third():
    assert calculator("(4/2)(3-1)") == 4

def test_fourth():
    assert calculator("6-3/1") == 3

def test_five():
    assert calculator("45-10*2-1") == 24

def test_six():
    assert calculator("100*2") == 200

def test_seven():
    assert calculator("812/2*(5-3)") == 812

def test_eight():
    assert calculator("7-4-1+8(3)/2") == 14

def test_nine():
    assert calculator("(5-2*0-9*0)*0") == 0

def test_ten():
    assert calculator("8-7*(12+100/2)*9-2") == -3900



