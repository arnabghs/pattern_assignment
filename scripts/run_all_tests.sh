#! /bin/bash

set -e #it will stop the appTestData immediately if error found

#trap "echo Tests failed !" exit #give a message while exiting (if exit code fails with 1 or -1)

./run_test.sh ../createRectangle.js ../appTestData/inputForAllRectangles.txt ../appTestData/outputForAllRectangles.txt
./run_test.sh ../createTriangle.js ../appTestData/inputForAllTriangles.txt ../appTestData/outputForAllTriangles.txt
./run_test.sh ../createDiamond.js ../appTestData/inputForAllDiamonds.txt ../appTestData/outputForAllDiamonds.txt
