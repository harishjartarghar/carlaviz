#!/bin/bash
echo "Make sure you have launched the carla server."	
echo "Launching backend."
cd ../backend/bin/  && echo "directorysearch" &&  ls -R && ./backend ${CARLA_SERVER_IP} ${CARLA_SERVER_PORT}
sleep 5


echo "Backend launched."
