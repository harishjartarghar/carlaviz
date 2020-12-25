import glob
import os
import sys

try:
    sys.path.append(glob.glob('../carla/dist/carla-*%d.%d-%s.egg' % (
        sys.version_info.major,
        sys.version_info.minor,
        'win-amd64' if os.name == 'nt' else 'linux-x86_64'))[0])
except IndexError:
    pass

import carla

import random
import time

from flask import Flask
from flask import request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

client = carla.Client('localhost', 3000)
client.set_timeout(2.0)


world=client.get_world()
vehicle=world.get_actor(85)




@app.route('/movement',methods=["POST"])
def move_vehicle():
    # #data = request.json
    print("inside func ")
    direction=json.loads(request.data)["data"]
    print(direction)

    
    

    throttle = vehicle.get_acceleration()
    print(throttle)
    
    #steer_temp = vehicle.angular_velocity()
    #print(steer_temp)

  

    if direction == 'ArrowUp' or direction=='w':
        vehicle.apply_control(carla.VehicleControl(throttle=throttle.z+0.5))
        print("moving up")
    elif direction== 'ArrowDown' or direction=='s':
        vehicle.apply_control(carla.VehicleControl(throttle=throttle.z-0.5))
        print("moving down")
    elif direction=='ArrowLeft' or direction=='a':
        vehicle.apply_control(carla.VehicleControl(steer=-0.3))
        print("moving left")
    elif direction=='ArrowRight' or direction=='d':
        vehicle.apply_control(carla.VehicleControl(steer=0.3))
        print("moving right")
        print("RIGHT")
    elif direction=='p':
        vehicle.set_autopilot(True)
    elif direction=='o':
        vehicle.set_autopilot(False)
        vehicle.apply_control(carla.VehicleControl(velocity=0))
    elif direction=='r':
        vehicle.apply_control(carla.VehicleControl(reverse=True, throttle=0.5))
    elif direction=='t':
        vehicle.apply_control(carla.VehicleControl(reverse=False))



    # else:
    #     if throttle > 0:
    #         throttle -= 0.1
    #     else:
    #         throttle += 0.1
    #     if steer > 0:
    #         steer -= 0.1
    #     else:
    #         steer += 0.1
    #     vehicle.apply_control(carla.VehicleControl(
    #         throttle=throttle, steer=steer))
    

    return 'Success'


app.run(host="0.0.0.0",port=5000)
