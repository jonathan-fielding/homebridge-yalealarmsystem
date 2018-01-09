# homebridge-yalealarmsystem

The main function of the Homebridge plugin is to proxy HomeKit queries to the API that the Yale Burglar Alarm uses. 

## Installation

1. Install homebridge using: npm install -g homebridge
1. Install homebridge-yalealarmsystem using: npm install -g homebridge-yalealarmsystem
1. Update your configuration file. See sample-config.json in this repository for a sample.

## Configuration

The module simply requires you to specify the username and password you use to authenticate with your burglar alarm system.

```
"accessories": [
    {
        "accessory": "YaleAlarm",
        "name": "Yale Alarm",
        "username": "username",
        "password": "password"
    }
]
```

## License
Copyright 2017 Jonathan Fielding

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

License: MIT (http://www.opensource.org/licenses/mit-license.php)