#include <ArduinoJson.h>
#include <MemoryFree.h>
// #include <SoftwareSerial.h>

// konfigurasi komunikasi nodemcu
// SoftwareSerial nodemcu(36,38);

// buat variabel sensor
#define pinSensor_1 A0
#define pinSensor_2 A1
#define pinSensor_3 A2
#define pinSensor_4 A3
#define pinSensor_5 A4
#define pinSensor_6 A5
#define pinSensor_7 A6
#define pinSensor_8 A7
#define pinSensor_9 A8
#define pinSensor_10 A9
#define pinSensor_11 A10
#define pinSensor_12 A11
#define pinSensor_13 A12
#define pinSensor_14 A13
#define pinSensor_15 A14
#define pinSensor_16 A15
#define pinRelay_1 3
#define pinRelay_2 4
#define pinRelay_3 6
#define pinRelay_4 7

bool get_kran_1, get_kran_2, get_kran_3, get_kran_4;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial3.begin(115200);
  Serial2.begin(115200);
  // nodemcu.begin(115200);

  // randomSeed(analogRead(0));
  pinmode_setup();
}

void loop() {
  // put your main code here, to run repeatedly:
  pinmode_getdata();
  get_data_relay();
  // Serial.println(Serial3.readString());
  // delay(1000);
}