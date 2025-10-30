var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.28113144786446576,
        "pitch": -0.021955971680954534,
        "fov": 1.0626019107641762
      },
      "linkHotspots": [
        {
          "yaw": -2.123814977162425,
          "pitch": 0.021717001833621907,
          "rotation": 4.71238898038469,
          "target": "1-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-master-bedroom",
      "name": "Master bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.027933445423311554,
        "pitch": 0.0020755975481865363,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 1.6843573726291234,
          "pitch": -0.02369917804617394,
          "rotation": 1.5707963267948966,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
