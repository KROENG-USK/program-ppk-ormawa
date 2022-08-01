#include <ArduinoJson.h> //versi 5.13.5
#include <SoftwareSerial.h>

// definisi pin sensor
#define soil_sensor_1 A0
#define soil_sensor_2 A1
#define soil_sensor_3 A2
#define soil_sensor_4 A3
#define soil_sensor_5 A4
#define soil_sensor_6 A5
#define soil_sensor_7 A6
#define soil_sensor_8 A7
#define soil_sensor_9 A8
#define soil_sensor_10 A9
#define soil_sensor_11 A10
#define soil_sensor_12 A11
#define soil_sensor_13 A12
#define soil_sensor_14 A13
#define soil_sensor_15 A14
#define soil_sensor_16 A15

//#define pompa_air 4

SoftwareSerial atmega(8, 7); // RX : 8, TX : 7

void setup() {
  // put your setup code here, to run once:
  
  Serial.begin(115200); 
  atmega.begin(115200);
  //utk kecepatan kirim dan terima data dalam 9660 bit per detik.
  
  Serial.setTimeout(1);
  atmega.setTimeout(1); 
  //set batas maks waktu tunggu transmisi data.
  
  //konfigurasi/set pin yang bekerja pada posisi in atau out
  sensor_setup(soil_sensor_1, soil_sensor_2, soil_sensor_3, soil_sensor_4);
//  relay_pin(pompa_air);
  

}

void loop() {
  // put your main code here, to run repeatedly:
  // Program mengambil data sensor
  String serialdata = get_nilai(soil_sensor_1, soil_sensor_2, soil_sensor_3, soil_sensor_4);
  Serial.print(serialdata);
  Serial.println();
  
  //memanggil fungsi relay
//  relay_2(pompa_air);

//  delayMicroseconds(500);
    delay(500);

}
