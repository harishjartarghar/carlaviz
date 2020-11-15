
echo "Make sure you have launched the carla server."
echo "Launching backend."
cd ../backend/bin/ && ls && ./backend &&
#./carlaviz/backend/bin/backend ${CARLA_SERVER_IP} ${CARLA_SERVER_PORT} &
sleep 5

echo "Backend launched."
