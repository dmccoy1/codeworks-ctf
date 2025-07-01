# CITS CTF Challenge

Welcome to the **CITS Capture The Flag (CTF) Challenge** — a beginner-friendly cybersecurity experience that combines web-based puzzles with real-time hardware feedback using a **Raspberry Pi** and **Arduino Uno**.

## 🌐 Project Overview

This project is hosted at:  
➡️ [https://dariuscits.github.io/cw-ctf/](https://dariuscits.github.io/cw-ctf/)

Participants navigate through a series of **5 web-based puzzles**, uncovering hidden flags embedded in HTML, CSS, and JavaScript. Once a flag is found, the participant will submit it through the Python script running on the **Raspberry Pi**.

Each correct flag submission triggers the **Raspberry Pi** to send a serial command to the **Arduino Uno**, providing **real-time feedback** using visual signals (RGB LEDs), sounds (buzzers), or displays (7-segment).

**Note:** This project is designed to be run on a **local network**. The Raspberry Pi and the device accessing the web interface should be on the same network to communicate effectively.

---

## 💻 Components

### 1. Raspberry Pi

- Runs a Python script to check for correct flag submissions and communicate with the Arduino via serial.

### 2. Arduino Uno

- Displays real-time feedback based on the results of flag submissions.
- Provides visual (RGB LED), audio (buzzer), and display feedback (7-segment display).

### 3. Web Interface

- Flags need to be submitted through the Python script on the Raspberry Pi.

---

## 🛠️ Setup Instructions

### 1. **Hardware Setup**

#### Raspberry Pi

- Connect your Raspberry Pi to the internet and ensure Python 3 is installed.
- If your Raspberry Pi does not have an operating system installed, you can follow [this guide](https://www.raspberrypi.org/documentation/computers/getting-started.html) to load the OS onto your Raspberry Pi.
- Connect the Raspberry Pi to the Arduino Uno using a USB cable.

#### Arduino Uno

- Ensure the Arduino is connected to the Raspberry Pi and the proper board and serial port are selected in the Arduino IDE.
- Flash the provided Arduino sketch to the Uno.

---

### 2. **Software Setup**

#### On the Raspberry Pi:

1. Install the required Python libraries:
    ```bash
    pip install pyserial
    ```

2. Update the serial port in the Python script (`pi_script.py`) to match the port your Arduino is connected to:
    ```python
    ser = serial.Serial('/dev/cu.usbmodem14401', 9600)  # Replace with your Arduino's serial port
    ```

3. **Update IP, User, and Password Variables**  
   In the web interface, update the following variables to match your Raspberry Pi setup:
    ```javascript
    const _ip = '192.168.1.X';  // Update to your Raspberry Pi's IP address
    const _user = 'pi';         // Update to your Raspberry Pi's username
    const _pass = 'raspberry';  // Update to your Raspberry Pi's password
    ```

    To find your Raspberry Pi’s IP address:
    ```bash
    hostname -I
    ```
    Or ping the default hostname:
    ```bash
    ping raspberrypi.local
    ```

4. Use this JS function to encode those credentials and paste the result into lines 98–100 in `challenge2.html`:
    ```javascript
    function toUnicode(text) {
        const unicodeArray = [];
        for (let i = 0; i < text.length; i++) {
            unicodeArray.push(text.charCodeAt(i));
        }
        return `(${unicodeArray.join(', ')})`;
    }

    // Example usage:
    const inputText = "Hello World!";
    const unicodeValues = toUnicode(inputText);
    console.log(unicodeValues); // Output: (72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33)
    ```

---

#### On the Arduino:

1. Open the Arduino IDE, paste the provided Arduino code into the editor, and upload it to the Uno board.

2. **Install Required Arduino Libraries**

    To use the 7-segment display, you need to install the `TM1637` library.

    #### 🔧 Steps:

    - Open the **Arduino IDE**
    - Go to **Sketch** → **Include Library** → **Manage Libraries...**
    - In the **Library Manager**, search for `TM1637`
    - Find **TM1637Display by Avishay Orpaz** and click **Install**
    - Add it to your sketch with:
      ```cpp
      #include <TM1637Display.h>
      ```

    > ✅ *Make sure to install any dependencies prompted by the Library Manager.*

---

## 📜 How to Play

1. **Solve the Puzzles**  
   Go to [the CITS CTF Challenge page](https://dmccoy1.github.io/codeworks-ctf/) and solve the 5 puzzles. Each puzzle contains a hidden flag.

2. **Submit Flags via Python Script**  
   After finding each flag, open the terminal on the Raspberry Pi and submit the flag using the Python script. Enter the flag when prompted, and the Raspberry Pi will check the submission.

3. **Receive Real-Time Feedback**

    - Correct submission: The Arduino will light up a **green LED**, play a sound, or display a success message.
    - Incorrect submission: The Arduino will turn on a **red LED**, play an error tone, and prompt you to try again.

---

## 🧑‍💻 Contributing

If you’d like to contribute to the CITS CTF Challenge, feel free to fork this repository, submit pull requests, or open issues for bugs and enhancements.
