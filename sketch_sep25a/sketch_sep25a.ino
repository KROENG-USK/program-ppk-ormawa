#include <ArduinoJson.h>
#include <MemoryFree.h>
#include <SoftwareSerial.h>

// konfigurasi komunikasi nodemcu
SoftwareSerial nodemcu(9,8);

// buat variabel sensor
#define pinSensor_0 A0
#define pinSensor_1 A1
#define pinSensor_2 A2
#define pinSensor_3 A3
#define pinSensor_4 A4
#define pinSensor_5 A5
#define pinSensor_6 A6
#define pinSensor_7 A7
#define pinSensor_8 A8
#define pinSensor_9 A9
#define pinSensor_10 A10
#define pinSensor_11 A11
#define pinSensor_12 A12
#define pinSensor_13 A13
#define pinSensor_14 A14
#define pinSensor_15 A15

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  // Serial3.begin(9600);
  nodemcu.begin(9600);

  // randomSeed(analogRead(0));
  pinmode_setup();
}

void loop() {
  // put your main code here, to run repeatedly:
  pinmode_getdata();
  delay(1000);
}