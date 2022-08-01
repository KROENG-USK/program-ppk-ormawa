
void sensor_setup(int sensor1, int sensor2, int sensor3, int sensor4){
  pinMode(sensor1, INPUT);
  pinMode(sensor2, INPUT);
  pinMode(sensor3, INPUT);
  pinMode(sensor4, INPUT);
  
}

String get_nilai(int sensor1, int sensor2, int sensor3, int sensor4){
  // membuat pohon objeck DynamicJsonBuffer untuk menyimpan data
  DynamicJsonBuffer jsonBuffer;
  String data_json;

  // membuat akar untuk mengisi nilai sensor
  JsonObject& data = jsonBuffer.createObject();

  // mengubah sinyal analog 0 - 1023 ke 0 - 100
  int nilai_1 = map(analogRead(sensor1), 0, 1023, 0, 100);
  int nilai_2 = map(analogRead(sensor2), 0, 1023, 0, 100);
  int nilai_3 = map(analogRead(sensor3), 0, 1023, 0, 100);
  int nilai_4 = map(analogRead(sensor4), 0, 1023, 0, 100);

  // masukan nilai sensor ke dalam akar data (json Object)
  data["kelembaban_1"] = nilai_1;
  data["kelembaban_2"] = nilai_2;
  data["kelembaban_3"] = nilai_3;
  data["kelembaban_4"] = nilai_4;

  // kirim data json ke dalam data_json
  data.printTo(data_json);
  data.printTo(atmega);
  jsonBuffer.clear();

  return data_json;
  
}
