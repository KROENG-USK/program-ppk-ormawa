void pinmode_setup(){
  pinMode(pinSensor_0, INPUT);
  pinMode(pinSensor_1, INPUT);
  pinMode(pinSensor_2, INPUT);
  pinMode(pinSensor_3, INPUT);
  pinMode(pinSensor_4, INPUT);
  pinMode(pinSensor_5, INPUT);
  pinMode(pinSensor_6, INPUT);
  pinMode(pinSensor_7, INPUT);
  pinMode(pinSensor_8, INPUT);
  pinMode(pinSensor_9, INPUT);
  pinMode(pinSensor_10, INPUT);
  pinMode(pinSensor_11, INPUT);
  pinMode(pinSensor_12, INPUT);
  pinMode(pinSensor_13, INPUT);
  pinMode(pinSensor_14, INPUT);
  pinMode(pinSensor_15, INPUT);
}

void pinmode_getdata(){
  // String import_nodemcu = "";
  DynamicJsonBuffer jsonBuffer;
  JsonObject& data = jsonBuffer.createObject();
  data["sensor_1"] = map(analogRead(pinSensor_0), 0, 1024, 0, 100);
  data["sensor_2"] = map(analogRead(pinSensor_1), 0, 1024, 0, 100);
  data["sensor_3"] = map(analogRead(pinSensor_2), 0, 1024, 0, 100);
  data["sensor_4"] = map(analogRead(pinSensor_3), 0, 1024, 0, 100);
  data["sensor_5"] = map(analogRead(pinSensor_4), 0, 1024, 0, 100);
  data["sensor_6"] = map(analogRead(pinSensor_5), 0, 1024, 0, 100);
  data["sensor_7"] = map(analogRead(pinSensor_6), 0, 1024, 0, 100);
  data["sensor_8"] = map(analogRead(pinSensor_7), 0, 1024, 0, 100);
  data["sensor_9"] = map(analogRead(pinSensor_8), 0, 1024, 0, 100);
  data["sensor_10"] = map(analogRead(pinSensor_9), 0, 1024, 0, 100);
  data["sensor_11"] = map(analogRead(pinSensor_10), 0, 1024, 0, 100);
  data["sensor_12"] = map(analogRead(pinSensor_11), 0, 1024, 0, 100);
  data["sensor_13"] = map(analogRead(pinSensor_12), 0, 1024, 0, 100);
  data["sensor_14"] = map(analogRead(pinSensor_13), 0, 1024, 0, 100);
  data["sensor_15"] = map(analogRead(pinSensor_14), 0, 1024, 0, 100);
  data["sensor_16"] = map(analogRead(pinSensor_15), 0, 1024, 0, 100);

  data.printTo(nodemcu);
  // Serial.print(import_nodemcu);
  jsonBuffer.clear();
  // Serial3.flush();  
}