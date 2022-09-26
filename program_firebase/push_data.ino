void push_data(int data_1, int data_2, int data_3, int data_4, int data_5, int data_6, int data_7, int data_8, int data_9, int data_10, int data_11, int data_12, int data_13, int data_14, int data_15, int data_16){
  // Push data in database path 1-3
  Firebase.setInt(firebaseData, path_1, data_1);
  delay(5);
  Firebase.setInt(firebaseData, path_2, data_2);
  delay(5);
  Firebase.setInt(firebaseData, path_3, data_3);
  delay(10);
  
  // Push data in database path 4-6
  Firebase.setInt(firebaseData, path_4, data_4);
  delay(5);
  Firebase.setInt(firebaseData, path_5, data_5);
  delay(5);
  Firebase.setInt(firebaseData, path_6, data_6);
  delay(10);
  
  // Push data in database path 7-9
  Firebase.setInt(firebaseData, path_7, data_7);
  delay(5);
  Firebase.setInt(firebaseData, path_8, data_8);
  delay(5);
  Firebase.setInt(firebaseData, path_9, data_9);
  delay(10);
  
  // Push data in database path 10-12
  Firebase.setInt(firebaseData, path_10, data_10);
  delay(5);
  Firebase.setInt(firebaseData, path_11, data_11);
  delay(5);
  Firebase.setInt(firebaseData, path_12, data_12);
  delay(10);

  // Push data in database path 13-15
  Firebase.setInt(firebaseData, path_13, data_13);
  delay(5);
  Firebase.setInt(firebaseData, path_14, data_14);
  delay(5);
  Firebase.setInt(firebaseData, path_15, data_15);
  delay(5);
  Firebase.setInt(firebaseData, path_15, data_16);
  delay(10);

}

void set_data_sensor(){
  Firebase.setInt(firebaseData, path_1, 0);
  Firebase.setInt(firebaseData, path_2, 0);
  Firebase.setInt(firebaseData, path_3, 0);
  Firebase.setInt(firebaseData, path_4, 0);
  Firebase.setInt(firebaseData, path_5, 0);
  Firebase.setInt(firebaseData, path_6, 0);
  Firebase.setInt(firebaseData, path_7, 0);
  Firebase.setInt(firebaseData, path_8, 0);
  Firebase.setInt(firebaseData, path_9, 0);
  Firebase.setInt(firebaseData, path_10, 0);
  Firebase.setInt(firebaseData, path_11, 0);
  Firebase.setInt(firebaseData, path_12, 0);
  Firebase.setInt(firebaseData, path_13, 0);
  Firebase.setInt(firebaseData, path_14, 0);
  Firebase.setInt(firebaseData, path_15, 0);
  delay(10);
}
