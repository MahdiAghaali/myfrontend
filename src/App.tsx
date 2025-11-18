import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import TopMenuBar from "./components/appMenu";
import Footer from "./components/footer";
import Projects from "./components/projects";
import ThemeDashboard from "./components/theme";
import Contact from "./components/contact";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeControllerProvider } from "./components/theme/ThemeContext";
import TripInfoCard from "./components/tripInfoCard";

const Info = [
  {
    "tripId": "1|99519|10|86|18112025",
    "stop": {
      "type": "stop",
      "id": "900181503",
      "name": "Rathenaustr./HTW (Berlin)",
      "location": {
        "type": "location",
        "id": "900181503",
        "latitude": 52.458808,
        "longitude": 13.525763
      },
      "products": {
        "suburban": false,
        "subway": false,
        "tram": true,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": false
      }
    },
    "when": "2025-11-18T10:13:00+01:00",
    "plannedWhen": "2025-11-18T10:11:00+01:00",
    "delay": 120,
    "platform": null,
    "plannedPlatform": null,
    "prognosisType": "prognosed",
    "direction": "Bahnhofstr./Lindenstr.",
    "provenance": null,
    "line": {
      "type": "line",
      "id": "de-vbb-11000000-tram-67",
      "fahrtNr": "653",
      "name": "67",
      "public": true,
      "adminCode": "BVT---",
      "productName": "Tram",
      "mode": "train",
      "product": "tram",
      "operator": {
        "type": "operator",
        "id": "berliner-verkehrsbetriebe",
        "name": "Berliner Verkehrsbetriebe"
      }
    },
    "remarks": [
      {
        "type": "hint",
        "code": "FK",
        "text": "Bicycle conveyance"
      }
    ],
    "origin": null,
    "destination": {
      "type": "stop",
      "id": "900183003",
      "name": "Rahnsdorf/Waldschänke (Berlin)",
      "location": {
        "type": "location",
        "id": "900183003",
        "latitude": 52.442871,
        "longitude": 13.685771
      },
      "products": {
        "suburban": false,
        "subway": false,
        "tram": true,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": false
      }
    },
    "currentTripPosition": {
      "type": "location",
      "latitude": 52.461038,
      "longitude": 13.519902
    },
    "occupancy": "low"
  },
  {
    "tripId": "1|66050|11|86|18112025",
    "stop": {
      "type": "stop",
      "id": "900181503",
      "name": "Rathenaustr./HTW (Berlin)",
      "location": {
        "type": "location",
        "id": "900181503",
        "latitude": 52.458808,
        "longitude": 13.525763
      },
      "products": {
        "suburban": false,
        "subway": false,
        "tram": true,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": false
      }
    },
    "when": "2025-11-18T10:13:00+01:00",
    "plannedWhen": "2025-11-18T10:14:00+01:00",
    "delay": -60,
    "platform": null,
    "plannedPlatform": null,
    "prognosisType": "prognosed",
    "direction": "Johannisthal, Haeckelstr.",
    "provenance": null,
    "line": {
      "type": "line",
      "id": "de-vbb-11000000-tram-60",
      "fahrtNr": "23070",
      "name": "60",
      "public": true,
      "adminCode": "BVT---",
      "productName": "Tram",
      "mode": "train",
      "product": "tram",
      "operator": {
        "type": "operator",
        "id": "berliner-verkehrsbetriebe",
        "name": "Berliner Verkehrsbetriebe"
      }
    },
    "remarks": [
      {
        "type": "hint",
        "code": "FK",
        "text": "Bicycle conveyance"
      },
      {
        "id": "295116",
        "type": "warning",
        "summary": "Interruption",
        "text": "Tram 60: No service due to construction works between S Schöneweide/Sterndamm and Haeckelstraße. Alternatively, please use the bus lines M11, 160.",
        "icon": {
          "type": "HIM1",
          "title": null
        },
        "priority": 100,
        "products": {
          "suburban": false,
          "subway": false,
          "tram": true,
          "bus": false,
          "ferry": false,
          "express": false,
          "regional": false
        },
        "company": "BVG",
        "categories": [
          1
        ],
        "validFrom": "2025-08-06T00:00:00+02:00",
        "validUntil": "2025-11-30T23:59:00+01:00",
        "modified": "2025-10-27T10:48:45+01:00"
      }
    ],
    "origin": null,
    "destination": {
      "type": "stop",
      "id": "900194006",
      "name": "S Schöneweide/Sterndamm (Berlin)",
      "location": {
        "type": "location",
        "id": "900194006",
        "latitude": 52.454242,
        "longitude": 13.508738
      },
      "products": {
        "suburban": false,
        "subway": false,
        "tram": true,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": false
      }
    },
    "currentTripPosition": {
      "type": "location",
      "latitude": 52.457047,
      "longitude": 13.531094
    },
    "occupancy": "medium"
  },
  {
    "tripId": "1|65637|10|86|18112025",
    "stop": {
      "type": "stop",
      "id": "900181503",
      "name": "Rathenaustr./HTW (Berlin)",
      "location": {
        "type": "location",
        "id": "900181503",
        "latitude": 52.458808,
        "longitude": 13.525763
      },
      "products": {
        "suburban": false,
        "subway": false,
        "tram": true,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": false
      }
    },
    "when": "2025-11-18T10:14:00+01:00",
    "plannedWhen": "2025-11-18T10:15:00+01:00",
    "delay": -60,
    "platform": null,
    "plannedPlatform": null,
    "prognosisType": "prognosed",
    "direction": "Mahlsdorf-Süd",
    "provenance": null,
    "line": {
      "type": "line",
      "id": "de-vbb-11000000-tram-27",
      "fahrtNr": "22316",
      "name": "27",
      "public": true,
      "adminCode": "BVT---",
      "productName": "Tram",
      "mode": "train",
      "product": "tram",
      "operator": {
        "type": "operator",
        "id": "berliner-verkehrsbetriebe",
        "name": "Berliner Verkehrsbetriebe"
      }
    },
    "remarks": [
      {
        "type": "hint",
        "code": "FK",
        "text": "Bicycle conveyance"
      }
    ],
    "origin": null,
    "destination": {
      "type": "stop",
      "id": "900180017",
      "name": "Mahlsdorf-Süd (Berlin)",
      "location": {
        "type": "location",
        "id": "900180017",
        "latitude": 52.474117,
        "longitude": 13.59854
      },
      "products": {
        "suburban": false,
        "subway": false,
        "tram": true,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": false
      }
    },
    "currentTripPosition": {
      "type": "location",
      "latitude": 52.461604,
      "longitude": 13.517385
    },
    "occupancy": "low"
  },
  {
    "tripId": "1|65679|9|86|18112025",
    "stop": {
      "type": "stop",
      "id": "900181503",
      "name": "Rathenaustr./HTW (Berlin)",
      "location": {
        "type": "location",
        "id": "900181503",
        "latitude": 52.458808,
        "longitude": 13.525763
      },
      "products": {
        "suburban": false,
        "subway": false,
        "tram": true,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": false
      }
    },
    "when": "2025-11-18T10:18:00+01:00",
    "plannedWhen": "2025-11-18T10:18:00+01:00",
    "delay": 0,
    "platform": null,
    "plannedPlatform": null,
    "prognosisType": "prognosed",
    "direction": "S Friedrichsfelde Ost",
    "provenance": null,
    "line": {
      "type": "line",
      "id": "de-vbb-11000000-tram-27",
      "fahrtNr": "21994",
      "name": "27",
      "public": true,
      "adminCode": "BVT---",
      "productName": "Tram",
      "mode": "train",
      "product": "tram",
      "operator": {
        "type": "operator",
        "id": "berliner-verkehrsbetriebe",
        "name": "Berliner Verkehrsbetriebe"
      }
    },
    "remarks": [
      {
        "type": "hint",
        "code": "FK",
        "text": "Bicycle conveyance"
      }
    ],
    "origin": null,
    "destination": {
      "type": "stop",
      "id": "900171002",
      "name": "S Friedrichsfelde Ost (Berlin)",
      "location": {
        "type": "location",
        "id": "900171002",
        "latitude": 52.513535,
        "longitude": 13.519075
      },
      "products": {
        "suburban": true,
        "subway": false,
        "tram": true,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": false
      }
    },
    "occupancy": "low"
  },
  {
    "tripId": "1|66027|12|86|18112025",
    "stop": {
      "type": "stop",
      "id": "900181503",
      "name": "Rathenaustr./HTW (Berlin)",
      "location": {
        "type": "location",
        "id": "900181503",
        "latitude": 52.458808,
        "longitude": 13.525763
      },
      "products": {
        "suburban": false,
        "subway": false,
        "tram": true,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": false
      }
    },
    "when": "2025-11-18T10:21:00+01:00",
    "plannedWhen": "2025-11-18T10:21:00+01:00",
    "delay": 0,
    "platform": null,
    "plannedPlatform": null,
    "prognosisType": "prognosed",
    "direction": "Friedrichshagen, Altes Wasserwerk",
    "provenance": null,
    "line": {
      "type": "line",
      "id": "de-vbb-11000000-tram-60",
      "fahrtNr": "23169",
      "name": "60",
      "public": true,
      "adminCode": "BVT---",
      "productName": "Tram",
      "mode": "train",
      "product": "tram",
      "operator": {
        "type": "operator",
        "id": "berliner-verkehrsbetriebe",
        "name": "Berliner Verkehrsbetriebe"
      }
    },
    "remarks": [
      {
        "type": "hint",
        "code": "FK",
        "text": "Bicycle conveyance"
      },
      {
        "id": "295116",
        "type": "warning",
        "summary": "Interruption",
        "text": "Tram 60: No service due to construction works between S Schöneweide/Sterndamm and Haeckelstraße. Alternatively, please use the bus lines M11, 160.",
        "icon": {
          "type": "HIM1",
          "title": null
        },
        "priority": 100,
        "products": {
          "suburban": false,
          "subway": false,
          "tram": true,
          "bus": false,
          "ferry": false,
          "express": false,
          "regional": false
        },
        "company": "BVG",
        "categories": [
          1
        ],
        "validFrom": "2025-08-06T00:00:00+02:00",
        "validUntil": "2025-11-30T23:59:00+01:00",
        "modified": "2025-10-27T10:48:45+01:00"
      }
    ],
    "origin": null,
    "destination": {
      "type": "stop",
      "id": "900182005",
      "name": "Altes Wasserwerk (Berlin)",
      "location": {
        "type": "location",
        "id": "900182005",
        "latitude": 52.447761,
        "longitude": 13.639369
      },
      "products": {
        "suburban": false,
        "subway": false,
        "tram": true,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": false
      }
    },
    "occupancy": "low"
  },
  {
    "tripId": "1|66480|10|86|18112025",
    "stop": {
      "type": "stop",
      "id": "900181503",
      "name": "Rathenaustr./HTW (Berlin)",
      "location": {
        "type": "location",
        "id": "900181503",
        "latitude": 52.458808,
        "longitude": 13.525763
      },
      "products": {
        "suburban": false,
        "subway": false,
        "tram": true,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": false
      }
    },
    "when": "2025-11-18T10:21:00+01:00",
    "plannedWhen": "2025-11-18T10:21:00+01:00",
    "delay": 0,
    "platform": null,
    "plannedPlatform": null,
    "prognosisType": "prognosed",
    "direction": "S Schöneweide",
    "provenance": null,
    "line": {
      "type": "line",
      "id": "de-vbb-11000000-tram-67",
      "fahrtNr": "24113",
      "name": "67",
      "public": true,
      "adminCode": "BVT---",
      "productName": "Tram",
      "mode": "train",
      "product": "tram",
      "operator": {
        "type": "operator",
        "id": "berliner-verkehrsbetriebe",
        "name": "Berliner Verkehrsbetriebe"
      }
    },
    "remarks": [
      {
        "type": "hint",
        "code": "FK",
        "text": "Bicycle conveyance"
      }
    ],
    "origin": null,
    "destination": {
      "type": "stop",
      "id": "900194006",
      "name": "S Schöneweide/Sterndamm (Berlin)",
      "location": {
        "type": "location",
        "id": "900194006",
        "latitude": 52.454242,
        "longitude": 13.508738
      },
      "products": {
        "suburban": false,
        "subway": false,
        "tram": true,
        "bus": true,
        "ferry": false,
        "express": false,
        "regional": false
      }
    },
    "occupancy": "medium"
  }
]

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeControllerProvider>
          <TopMenuBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/theme" element={<ThemeDashboard />} />
            <Route path="/trip" element={<TripInfoCard trip={Info[1]} />} />
            <Route path="/*" element={<>not found</>} />

          </Routes>
          <Footer />
        </ThemeControllerProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
