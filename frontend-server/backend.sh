#!/bin/bash


echo "Launching example.py"
cd /home/carla/carlaviz/examples  && python3 example.py


echo "Make sure you have launched the carla server."	
echo "Launching backend."
cd /home/carla/carlaviz/backend/bin  && echo "directorysearch" &&  ls -R && ./backend ${CARLA_SERVER_IP} ${CARLA_SERVER_PORT}
sleep 5


echo "Backend launched."
