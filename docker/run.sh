
cleanup() {
    echo "Cleaning up... Don't forcefully exit"
    echo "All clear! Exit"
    exit
}

trap cleanup SIGINT
trap cleanup SIGTERM
trap cleanup KILL

echo -e "CARLAVIZ_HOST_IP=${CARLAVIZ_HOST_IP}" >> /home/carla/.env

echo "Frontend server application launching"
sleep 2
cd ./frontend-server/
npm install & 
sleep 30
node index.js &
sleep 10
echo "Frontend server application launched"


echo "Launching frontend"

sleep 2
cd ../frontend/
yarn start &
sleep 10
echo "Frontend launched. Please open your browser"


sleep infinity