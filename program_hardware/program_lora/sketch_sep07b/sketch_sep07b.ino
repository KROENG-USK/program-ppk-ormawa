#include <SPI.h>
#include <LoRa.h>
int packetSize;
String baca, sinyal;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  while (!Serial);
  
  Serial.println("Waiting lora");

  if (!LoRa.begin(433E6)) {
    Serial.println("Starting LoRa failed!");
    while (1);
  }
}

void loop() {
  // put your main code here, to run repeatedly:
  terima();
  if(packetSize == 0){
    packetSize = 0;
    return;
  }
  Serial.print("Diterima : ");
  Serial.println(baca);
  Serial.print("Sinyal : ");
  Serial.println(sinyal);
  if (baca.toInt() <= 30){
    Serial.println("Air penuh");
  }
  baca = "";
  sinyal = "";
  delay(5000);
  
  
}

void terima(){
  packetSize = LoRa.parsePacket();
  if (packetSize == 0) return;
  
  while(LoRa.available()){
    baca += (char)LoRa.read();
  }

  sinyal = LoRa.packetRssi();
}
