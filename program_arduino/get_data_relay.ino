int HIDUP = LOW;
int MATI = HIGH;
unsigned long waktuSebelum_1 = 0;
void get_data_relay(){
  unsigned long waktuSekarang_1 = millis();
  if((unsigned long) (waktuSekarang_1 - waktuSebelum_1) >= 100){
    waktuSebelum_1 = waktuSekarang_1;
    DynamicJsonBuffer jsonBuffer_relay;
    // JsonObject& data_relay = jsonBuffer_relay.parseObject(Serial3);
    // JsonObject& data_relay = jsonBuffer_relay.parseObject(nodemcu);
    JsonObject& data_relay = jsonBuffer_relay.parseObject(Serial2);
    if(data_relay == JsonObject::invalid()){
      jsonBuffer_relay.clear();
      // Serial3.flush();
      Serial2.flush();
      // nodemcu.flush();
      
      Serial.println(F("Data Json Relay Invalid"));
      return;
    }
    get_kran_1 = data_relay["kran_1"];
    get_kran_2 = data_relay["kran_2"];
    get_kran_3 = data_relay["kran_3"];
    get_kran_4 = data_relay["kran_4"];

    if(get_kran_1 == true){
      digitalWrite(pinRelay_1, HIDUP);
      Serial.println("Kran 1 Hidup");
    } 
    else {
      digitalWrite(pinRelay_1, MATI);
      Serial.println("Kran 1 Mati");
    }
    
    if(get_kran_2 == true){
      digitalWrite(pinRelay_2, HIDUP);
      Serial.println("Kran 2 Hidup");
    } 
    else {
      digitalWrite(pinRelay_2, MATI);
      Serial.println("Kran 2 Mati");
    }
    
    if(get_kran_3 == true){
      digitalWrite(pinRelay_3, HIDUP);
      Serial.println("Kran 3 Hidup");
    } 
    else {
      digitalWrite(pinRelay_3, MATI);
      Serial.println("Kran 3 Mati");
    }
    
    if(get_kran_4 == true){
      digitalWrite(pinRelay_4, HIDUP);
      Serial.println("Kran 4 Hidup");
    } 
    else {
      digitalWrite(pinRelay_4, MATI);
      Serial.println("Kran 4 Mati");
    }
  }

  // delay(1000);
}