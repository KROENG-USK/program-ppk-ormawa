#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#include <ArduinoJson.h>
#include <SoftwareSerial.h>

// konfigurasi komunikasi arduino
SoftwareSerial atmega(5, 4);

// buat variable sensor
// Setting find WiFi Hotspot
#ifndef STASSID
// #define STASSID "@Wifi.com"
// #define STAPSK "Hostpot_ahul7"
#define STASSID "awp_wifi"
#define STAPSK "ppkormawa2022"
// #define STASSID "semangat"
// #define STAPSK "simollana"

#endif

const char* ssid = STASSID;
const char* password = STAPSK;

// Setting Firebase database
#define FIREBASE_HOST "https://awp-ppk-ormawa-default-rtdb.asia-southeast1.firebasedatabase.app"
#define FIREBASE_AUTH "xMWgf2mYFHhnzizl4PJrzt8c7JpQe8ctWtIWUW7c"

// root json firebase data
const String path_1 = "data_sensor/kelembaban_1";
const String path_2 = "data_sensor/kelembaban_2";
const String path_3 = "data_sensor/kelembaban_3";
const String path_4 = "data_sensor/kelembaban_4";
const String path_5 = "data_sensor/kelembaban_5";
const String path_6 = "data_sensor/kelembaban_6";
const String path_7 = "data_sensor/kelembaban_7";
const String path_8 = "data_sensor/kelembaban_8";
const String path_9 = "data_sensor/kelembaban_9";
const String path_10 = "data_sensor/kelembaban_10";
const String path_11 = "data_sensor/kelembaban_11";
const String path_12 = "data_sensor/kelembaban_12";
const String path_13 = "data_sensor/kelembaban_13";
const String path_14 = "data_sensor/kelembaban_14";
const String path_15 = "data_sensor/kelembaban_15";
const String path_16 = "data_sensor/kelembaban_16";
const String path_kran_1 = "saklar_kran/kran_1";
const String path_kran_2 = "saklar_kran/kran_2";
const String path_kran_3 = "saklar_kran/kran_3";
const String path_kran_4 = "saklar_kran/kran_4";

FirebaseData firebaseData; //firebase function

// reconnect wifi if disconnect
WiFiEventHandler wifiConnectHandler;
WiFiEventHandler wifiDisconnectHandler;

//void ICACHE_RAM_ATTR loop(); // jika nodemcu intrrupt

void setup() {
  Serial.begin(115200);
  atmega.begin(115200);
  // setup wifi connection
  // Register event handlers
  wifiConnectHandler = WiFi.onStationModeGotIP(onWifiConnect);
  wifiDisconnectHandler = WiFi.onStationModeDisconnected(onWifiDisconnect);

  initWiFi();
  Serial.print(F("RRSI : "));
  Serial.println(WiFi.RSSI());
    
  // Setup firebase auth & host link
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);
  //firebaseData.setBSSLBufferSize(1024, 1024);
  //firebaseData.setResponseSize(1024);
  Firebase.setReadTimeout(firebaseData, 1000 * 60);
  //Firebase.setwriteSizeLimit(firebaseData, "tiny");

  while(!Serial) continue;

  set_data_sensor();

  // randomSeed(analogRead(0));
  
}

void loop() {
  DynamicJsonBuffer jsonBuffer;
  JsonObject& data = jsonBuffer.parseObject(Serial);
  if(data == JsonObject::invalid()){
    jsonBuffer.clear();
    // atmega.flush();
    // Serial.println(F("Data Json Invalid"));
    return;
  }

  int getdata_1 = data["sensor_1"]; int getdata_2 = data["sensor_2"];
  int getdata_3 = data["sensor_3"]; int getdata_4 = data["sensor_4"];
  int getdata_5 = data["sensor_5"]; int getdata_6 = data["sensor_6"];
  int getdata_7 = data["sensor_7"]; int getdata_8 = data["sensor_8"];
  int getdata_9 = data["sensor_9"]; int getdata_10 = data["sensor_10"];
  int getdata_11 = data["sensor_11"]; int getdata_12 = data["sensor_12"];
  int getdata_13 = data["sensor_13"]; int getdata_14 = data["sensor_14"];
  int getdata_15 = data["sensor_15"]; int getdata_16 = data["sensor_16"];
  
  // kirim data ke firebase
  push_data(getdata_1, getdata_2, getdata_3, getdata_4, getdata_5, getdata_6, getdata_7, getdata_8, getdata_9, getdata_10, getdata_11, getdata_12, getdata_13, getdata_14, getdata_15, getdata_16);

  // kirim perintah ke arduino
  program_relay();

  delay(15);
}

