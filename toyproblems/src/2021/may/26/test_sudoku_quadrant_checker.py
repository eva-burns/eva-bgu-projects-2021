from sudoku_quadrant_checker import sudoku_quadrant_checker

def test_first():
    assert sudoku_quadrant_checker([
        "(1,2,3,4,5,6,7,8,1)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(1,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
      ]) == "1,3,4"

def test_second():
    assert sudoku_quadrant_checker([
        "(1,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,1,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,9)",
      ]) == "3,4,5,9"

def test_third():
    assert sudoku_quadrant_checker([
        "(1,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,1,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
      ]) == "4,5"

def test_fourth():
    assert sudoku_quadrant_checker([
        "(1,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,5,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,8)",
      ]) == "legal"

def test_five():
    assert sudoku_quadrant_checker([
        "(1,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,5,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,4)",
        "(9,1,2,3,4,5,6,7,8)",
      ]) == "legal"

def test_six():
    assert sudoku_quadrant_checker([
        "(1,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,5,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,9)",
        "(9,1,2,3,4,5,6,7,8)",
      ]) == "3,9"

def test_seven():
    assert sudoku_quadrant_checker([
        "(1,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,5,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,9)",
        "(9,1,2,3,4,5,6,7,8)",
      ]) == "3,6,9"

def test_eight():
    assert sudoku_quadrant_checker([
        "(9,2,3,4,5,6,7,8,9)",
        "(x,x,x,x,x,x,x,x,x)",
        "(6,x,5,x,3,x,x,4,x)",
        "(2,x,1,5,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,1)",
        "(x,x,x,x,x,x,x,x,2)",
        "(9,1,2,3,4,5,6,7,8)",
      ]) == "1,3,7"

def test_nine():
    assert sudoku_quadrant_checker([
        "(1,2,3,4,5,6,7,8,9)",
        "(4,5,6,x,x,x,x,x,x)",
        "(7,8,9,x,x,x,x,x,x)",
        "(2,3,4,x,x,x,x,x,x)",
        "(5,6,7,x,x,x,x,x,x)",
        "(8,9,1,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,1)",
      ]) == "legal"

def test_ten():
    assert sudoku_quadrant_checker([
        "(1,2,3,4,5,6,7,8,9)",
        "(4,5,6,1,2,3,x,x,x)",
        "(7,8,9,x,x,6,x,x,x)",
        "(2,3,4,x,x,x,x,x,x)",
        "(5,6,7,x,x,x,x,x,x)",
        "(8,9,1,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,x)",
        "(x,x,x,x,x,x,x,x,1)",
      ]) == "2"



