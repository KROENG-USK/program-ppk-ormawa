/* 
 * Program Pengambilan dan Mengirim data ke server Raspberry Pi (Web Server Local)
 * Version : 1.0
 * NAMA    : FATHUL BASYAIR
 * NPM     : 1904105010004
 * PRODI   : TEKNIK ELEKTRO (BIDANG TEKNIK TENAGA LISTRIK)
 */
 
#include <ESP8266WiFi.h> // library board esp8266
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <SoftwareSerial.h> // library komunikasi mcu
#include <ArduinoJson.h> // library json format

// Setting find WiFi Hotspot
#ifndef STASSID
//#define STASSID "server_rpi3b"
//#define STAPSK "GH_server"
#define STASSID "@Wifi.com"
#define STAPSK "Hostpot_ahul7"
//#define STASSID "Private"
//#define STAPSK "Rumahmiruk_37"
#endif

// pin serial komunikasi atmega328p
#define pinRX D1
#define pinTX D2

const char* ssid = STASSID;
const char* password = STAPSK;

// membuat object softwareserial
SoftwareSerial atmega(pinRX, pinTX);

// membuat object ESP8266WebServer
//ESP8266WebServer server(80);

String page = "";

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200); // kecepatan transfer data dari nodemcu ke serial monitor 115200 bit per seconds
  // setup wifi connection
  //Register event handlers
//  wifiConnectHandler = WiFi.onStationModeGotIP(onWifiConnect);
//  wifiDisconnectHandler = WiFi.onStationModeDisconnected(onWifiDisconnect);
//   
//  initWiFi();
//  Serial.print("RRSI: ");
//  Serial.println(WiFi.RSSI());
  
  atmega.begin(115200); // kecepatan transfer data dari nodemcu ke atmega 9600 bit per seconds
  // cek koneksi serial, jika tidak terkoneksi maka program terulang kembali
//  while(!Serial) continue;
  
}

void loop() {
  // put your main code here, to run repeatedly:
  // Mengambil data arduinoJson
  DynamicJsonBuffer jsonBuffer;
  JsonObject& data = jsonBuffer.parseObject(atmega);
  // cek JsonObject, jika data rusak maka data json invalid
  if (data == JsonObject::invalid()){
    jsonBuffer.clear();
    atmega.flush();
    Serial.println(F("Data Json invalid"));
    
  }
  
  // mengambil data dari data arduinoJson
  String kelembaban_1 = data["kelembaban_1"];
  String kelembaban_2 = data["kelembaban_2"];
  String kelembaban_3 = data["kelembaban_3"];
  String kelembaban_4 = data["kelembaban_4"];
  
  Serial.print(F("Kelembaban 1 : "));
  Serial.println(kelembaban_1);
  Serial.print(F("Kelembaban 2 : "));
  Serial.println(kelembaban_2);
  Serial.print(F("Kelembaban 3 : "));
  Serial.println(kelembaban_3);
  Serial.print(F("Kelembaban 4 : "));
  Serial.println(kelembaban_4);
  Serial.println(F("------------------------------------------------------------------------------------------"));

  // bersihkan serial data
  atmega.flush();
  // update data di lokal server
//  server.handleClient();
//  MDNS.update();
  delay(50);
}
