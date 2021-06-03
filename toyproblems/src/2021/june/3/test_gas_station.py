from gas_station import gas_station

def test_first():
    assert gas_station(["4", "1:1", "2:2", "1:2", "0:1"]) == "impossible"

def test_second():
    assert gas_station(["4", "0:1", "2:2", "1:2", "3:1"]) == 4

def test_third():
    assert gas_station(["4", "0:1", "2:2", "1:2", "1:1"]) == "impossible"

def test_fourth():
    assert gas_station(["3", "2:3", "2:1", "4:4"]) == 2

def test_five():
    assert gas_station(["5", "3:3", "1:2", "2:2", "3:2", "4:3"]) == 3

def test_six():
    assert gas_station("5", "0:1", "2:1", "3:2", "4:6", "4:3") == 2

def test_seven():
    assert gas_station(["2", "1:2", "3:2"]) == 2

def test_eight():
    assert gas_station(["2", "1:2", "1:2"]) == "impossible"

def test_nine():
    assert gas_station(["6", "3:2", "2:2", "10:6", "0:4", "1:1", "30:10"]) == 1

def test_ten():
    assert gas_station(["5", "2:3", "2:3", "2:3", "500:1", "0:495"]) == 4

