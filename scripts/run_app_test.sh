#! /bin/bash

set -e #it will stop the appTestData immediately if error found

#trap "echo Tests failed !" exit #give a message while exiting (if exit code fails with 1 or -1)

./scripts/run_test.sh ./createRectangle.js ./appTestData/inputs/inputForAllRectangles.txt ./appTestData/outputs/outputForAllRectangles.txt
./scripts/run_test.sh ./createTriangle.js ./appTestData/inputs/inputForAllTriangles.txt ./appTestData/outputs/outputForAllTriangles.txt
./scripts/run_test.sh ./createDiamond.js ./appTestData/inputs/inputForAllDiamonds.txt ./appTestData/outputs/outputForAllDiamonds.txt
