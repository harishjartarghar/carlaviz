
cleanup() {
    echo "Cleaning up... Don't forcefully exit"
    echo "All clear! Exit"
    exit
}

trap cleanup SIGINT
trap cleanup SIGTERM
trap cleanup KILL

echo -e "CARLAVIZ_HOST_IP=${CARLAVIZ_HOST_IP}" >> /home/carla/.env

echo "Launching frontend"

sleep 2
cd ./frontend/
yarn start &
sleep 10
echo "Frontend launched. Please open your browser"

sleep 2
cd ./frontend-server/
node index.js &
sleep 10
echo "Frontend server application launched"
sleep infinity