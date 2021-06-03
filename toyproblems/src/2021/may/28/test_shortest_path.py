from shortest_path import shortest_path

def test_first():
    assert shortest_path(["3", "A", "B", "C", "B-C", "A-B"]) == "A-B-C"

def test_second():
    assert shortest_path([
        "5",
        "A",
        "B",
        "C",
        "Z",
        "Y",
        "B-C",
        "A-B",
        "A-Z",
        "C-Y",
        "Z-Y",
      ]) == "A-Z-Y"

def test_third():
    assert shortest_path([
        "6",
        "A",
        "B",
        "C",
        "Z",
        "Y",
        "Q",
        "B-C",
        "A-B",
        "A-Z",
        "C-Y",
        "Z-Y",
        "C-Q",
      ]) == "A-B-C-Q"

def test_fourth():
    assert shortest_path([
        "6",
        "Z",
        "B",
        "C",
        "A",
        "Y",
        "Q",
        "B-C",
        "A-B",
        "A-Z",
        "C-Y",
        "Z-Y",
        "C-Q",
      ]) == "Z-Y-C-Q"

def test_five():
    assert shortest_path(["5", "c", "h", "d", "s", "m", "c-s", "s-h", "d-m", "h-d"]) == "c-s-h-d-m"

def test_six():
    assert shortest_path(["2", "First Street", "Third Street"]) == -1

def test_seven():
    assert shortest_path([
        "7",
        "D",
        "A",
        "N",
        "I",
        "E",
        "L",
        "B",
        "D-A",
        "A-N",
        "E-B",
        "E-L",
      ]) == -1

def test_eight():
    assert shortest_path([
        "7",
        "C",
        "B",
        "A",
        "D",
        "E",
        "G",
        "F",
        "A-B",
        "B-E",
        "E-G",
        "C-D",
        "D-B",
        "D-E",
        "E-F",
      ]) == "C-D-E-F"

def test_nine():
    assert shortest_path([
        "9",
        "Z",
        "B",
        "C",
        "D",
        "R",
        "A",
        "Y",
        "Q",
        "E",
        "A-Z",
        "A-R",
        "Z-Y",
        "Z-C",
        "C-B",
        "Y-Q",
        "Q-D",
        "D-E",
        "R-E",
      ]) == "Z-A-R-E"

def test_ten():
    assert shortest_path([
        "5",
        "N1",
        "N2",
        "N3",
        "N4",
        "N5",
        "N1-N3",
        "N3-N4",
        "N4-N5",
        "N5-N2",
        "N2-N1",
      ]) == "N1-N2-N5"



