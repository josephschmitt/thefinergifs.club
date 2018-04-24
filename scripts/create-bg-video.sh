#!/usr/bin/env bash
#
# $1 = inputfile
# $2 = output size
# $3 = output file
INPUT_FILE=$1
OUTPUT_FILE=$2
SCALE=${3:-"1280:720"}

ffmpeg -an -i $INPUT_FILE -vcodec libx264 -vf scale=$SCALE -an -pix_fmt yuv420p -profile:v baseline -level 3 $OUTPUT_FILE
