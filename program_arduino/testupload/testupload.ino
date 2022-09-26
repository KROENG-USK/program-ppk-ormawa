#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

// Update HOST URL HERE
String api = "https://whoami.jalurrempahaceh.com/app.php"; // masukan HOST URL tanpa "https://" dan "/" pada url terakhir
#define WIFI_SSID "@Wifi.com"
#define WIFI_PSK "Hostpot_ahul7"

// Declare global variables which will be uploaded to server

int val = 1;
int val2 = 7;

void setup() {
    Serial.begin(9600);
    WiFi.mode(WIFI_STA);
    WiFi.begin(WIFI_SSID, WIFI_PSK);
    Serial.print("Connecting to ");
    Serial.print(WIFI_SSID);
    while (WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(500);
    }

    Serial.println();
    Serial.print("Connected to ");
    Serial.println(WIFI_SSID);
    Serial.print("IP Address is : ");
    Serial.println(WiFi.localIP());

    delay(30);
    
}

void loop() {
    HTTPClient http; // http object of class HTTPClient
    WiFiClient WClient; // WClient object of class HTTPClient

    // Convert integer variables to string
    String sendval = String(val);
    String sendval2 = String(val2);

    String postData = api + "?id=" + sendval + "&value=" + sendval2;

    http.begin(WClient, postData);
//    http.addHeader("Content-Type", "application/json");

    // Update Host
    WClient.print(String("GET ") + postData + "HTTP/1.1\r\n" + "HOST : " + api + "\r\n" + "Connection : close\r\n\r\n");
//    int httpRes = http.GET();
    String httpRes = httpGETRequest(postData.c_str());

    // check if code success or not
    if(httpRes == HTTP_CODE_OK)
    {
      Serial.print(F("Http Response Code : "));
      Serial.println(httpRes);
      const String& payload = http.getString();
      Serial.println(payload);
    }
    else 
    {
      Serial.print(F("Error Code : ")); 
      Serial.println(httpRes);
    }

    // Free resources
    http.end();
    val2++;
    delay(10000);
}
