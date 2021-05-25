from help import help
import unittest

class TestHelp(unittest.TestCase):
    def testthis(self):
        self.assertEqual(help(""), 0)

    def testthis2(self):
        self.assertEqual(help(""), 5)

if __name__ == '__main__':
    unittest.main()