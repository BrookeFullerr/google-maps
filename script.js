let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.90072347758852, lng: -80.18716696087269 },
    zoom: 18,
styles:
[
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ff7000"
            },
            {
                "lightness": "69"
            },
            {
                "saturation": "100"
            },
            {
                "weight": "1.17"
            },
            {
                "gamma": "2.04"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cb8536"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#ffb471"
            },
            {
                "lightness": "66"
            },
            {
                "saturation": "100"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": 0.01
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": -31
            },
            {
                "lightness": -33
            },
            {
                "weight": 2
            },
            {
                "gamma": 0.8
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-8"
            },
            {
                "gamma": "0.98"
            },
            {
                "weight": "2.45"
            },
            {
                "saturation": "26"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 30
            },
            {
                "saturation": 30
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": 20
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 20
            },
            {
                "saturation": -20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 10
            },
            {
                "saturation": -30
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": "-19"
            },
            {
                "lightness": "100"
            },
            {
                "gamma": "3.92"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "100"
            },
            {
                "lightness": "4"
            },
            {
                "gamma": "1.89"
            },
            {
                "weight": "2.43"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -20
            },
            {
                "color": "#ecc080"
            },
            {
                "visibility": "on"
            }
        ]
    }
]

    
    
  });




const fieldhouseMarker = new google.maps.Marker({
    position: { lat: 39.898209570997246, lng: -80.18755109630057 },
    map,
    title: "Waynesburg University",
    icon: "https://i.imgur.com/7jqFU16.png"  
  });

const fieldhouseCoords = [
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    { lat: 39.89821720506465, lng: -80.18727432259585 },
    { lat: 39.89798540909532, lng: -80.18727609987678 },
    { lat: 39.89798677260331, lng: -80.18785904802633 },
	{ lat: 39.89822129557472, lng: -80.18785727074538 },

  ];

const fieldhousePolygon = new google.maps.Polygon({
    paths: fieldhouseCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  fieldhousePolygon.setMap(map);


 const fieldhouseinfowindow= new google.maps.InfoWindow({
    content: "This is Marisa Fieldhouse! It was named after a former head basketball coach and Director of Athletics Rudy Marisa.",
  });

fieldhouseMarker.addListener("click", () => {
    fieldhouseinfowindow.open({
      anchor: fieldhouseMarker,
      map,
      shouldFocus: false,
    });
  });

const GpacMarker = new google.maps.Marker({
    position: { lat: 39.90002671850124, lng: -80.18787482595958 },
    map,
    title: "Waynesburg University",
    icon: "https://i.imgur.com/mfTZGhV.png"  
  });

const GpacCoords = [
    { lat: 39.90003, lng: -80.18801},
    { lat: 39.90002, lng: -80.18771},
    { lat: 39.89980, lng: -80.18772},
    { lat: 39.89981, lng: -80.18802},
    { lat: 39.90003, lng: -80.18801} ];

    const GpacPolygon = new google.maps.Polygon({
        paths: GpacCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.35,
    });
    GpacPolygon.setMap(map);

    const Gpacinfowindow= new google.maps.InfoWindow({
    content: "This is the GPac! The Goodwin Performing Arts Center houses the University’s drama and music programs.",
  });

GpacMarker.addListener("click", () => {
    Gpacinfowindow.open({
      anchor: GpacMarker,
      map,
      shouldFocus: false,
    });
  });


    const ThayerMarker = new google.maps.Marker({
    position: { lat: 39.89977836404712, lng: -80.18422747187857 },
    map,
    title: "Waynesburg University",
    icon: "https://i.imgur.com/ln8oQP6.png"  
  });

    const ThayerCoords = [
    { lat: 39.89980, lng: -80.18429},
    { lat: 39.89979, lng: -80.18416},
    { lat: 39.89947, lng: -80.18416},
    { lat: 39.89947, lng: -80.18415},
    { lat: 39.89940, lng: -80.18415},
    { lat: 39.89939, lng: -80.18409},
    { lat: 39.89922, lng: -80.18409},
    { lat: 39.89922, lng: -80.18430},
    { lat: 39.89980, lng: -80.18429} ];

     const ThayerPolygon = new google.maps.Polygon({
        paths: ThayerCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.35,
    });
        ThayerPolygon.setMap(map);

        const Thayerinfowindow= new google.maps.InfoWindow({
    content: "This is Thayer! This three-story structure was completed in 1958 and is a residence hall for 126 male students.",
  });

ThayerMarker.addListener("click", () => {
    Thayerinfowindow.open({
      anchor: ThayerMarker,
      map,
      shouldFocus: false,
    });
  });


        const pollockMarker = new google.maps.Marker({
    position: { lat: 39.899318905949286, lng: -80.1849558635952 },
    map,
    title: "Waynesburg University",
    icon: "https://i.imgur.com/ln8oQP6.png"  
  });

        const pollockCoords = [
    { lat: 39.89932966350404, lng: -80.18516459443458 }, 
     { lat: 39.89932674703466, lng: -80.18474261889916 }, 
     { lat: 39.89918383988418, lng: -80.18474185858288 }, 
     { lat:39.89918675635962, lng: -80.18516611506715 }, 
    { lat: 39.89932966350404 , lng: -80.18516459443458}
  ];
  // Construct the polygon.
  const pollockpolygon = new google.maps.Polygon({
    paths: pollockCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  pollockpolygon.setMap(map);

  const pollockinfowindow= new google.maps.InfoWindow({
    content: "This is Pollock! Pollock Residence Hall opened in August 2005. It offers suite residence housing for women.",
  });

pollockMarker.addListener("click", () => {
    pollockinfowindow.open({
      anchor: pollockMarker,
      map,
      shouldFocus: false,
    });
  });



  const stewartMarker = new google.maps.Marker({
    position: { lat: 39.89818887427889, lng: -80.18660688481958 },
    map,
    title: "Waynesburg University",
    icon: "https://i.imgur.com/yotTeFq.png"  
  });

  const stewartCoords = [
    { lat: 39.89820313942542, lng: -80.18674222997413 },
    { lat: 39.898196966171525, lng: -80.1864800440406 },
    { lat: 39.8977313983387, lng: -80.1864981489516 },
    { lat: 39.89773808607581, lng: -80.18675966433287 },
    { lat: 39.89820313942542, lng: -80.18674222997413 },
  ];
  // Construct the polygon.
  const stewartpolygon = new google.maps.Polygon({
    paths: stewartCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  stewartpolygon.setMap(map);

  const stewartinfowindow= new google.maps.InfoWindow({
    content: "This is Stewart! This building, named in honor of Paul R. Stewart, Waynesburg’s president for forty-two years.",
  });

stewartMarker.addListener("click", () => {
    stewartinfowindow.open({
      anchor: stewartMarker,
      map,
      shouldFocus: false,
    });
  });

  const southMarker = new google.maps.Marker({
    position: { lat: 39.90035371714069, lng: -80.18592165705653 },
    map,
    title: "Waynesburg University",
    icon: "https://i.imgur.com/ln8oQP6.png"  
  });

  const southCoords = [
    { lat: 39.90036605487646, lng: -80.18613153937626 },
    { lat: 39.90036296834702, lng: -80.18572786691594 },
    { lat: 39.90022304553257, lng: -80.18572786691594 },
    { lat: 39.90022407437784, lng: -80.18613556268981 },
    { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];
  // Construct the polygon.
  const southpolygon = new google.maps.Polygon({
    paths: southCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  southpolygon.setMap(map);

  const southinfowindow= new google.maps.InfoWindow({
    content: "This is South! It offers suite residence housing for women.",
  });

southMarker.addListener("click", () => {
    southinfowindow.open({
      anchor: southMarker,
      map,
      shouldFocus: false,
    });
  });

const westMarker = new google.maps.Marker({
    position: { lat: 39.90053998149557, lng: -80.18631552813294 },
    map,
    title: "Waynesburg University",
    icon: "https://i.imgur.com/ln8oQP6.png"  
  });

const westCoords = [
    { lat: 39.90053787146326, lng: -80.18560984971823 },
    { lat: 39.90053787146326, lng: -80.18542477729457 },
    { lat: 39.900227082463, lng: -80.18542305089767 },
    { lat: 39.90022503189161, lng: -80.1856048100907 },
    { lat: 39.90053787146326, lng: -80.18560984971823 },
  ];
  // Construct the polygon.
  const westpolygon = new google.maps.Polygon({
    paths: westCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  westpolygon.setMap(map);

  const westinfowindow= new google.maps.InfoWindow({
    content: "This is West! It offers suite residence housing for women.",
  });

westMarker.addListener("click", () => {
    westinfowindow.open({
      anchor: westMarker,
      map,
      shouldFocus: false,
    });
  });

  const eastMarker = new google.maps.Marker({
    position: { lat: 39.90052756388767, lng: -80.18552239048594 },
    map,
    title: "Waynesburg University",
    icon: "https://i.imgur.com/ln8oQP6.png"  
  });

   const eastCoords = [
    { lat: 39.900556198377956, lng: -80.1864066888825 },
    { lat: 39.90055312253561, lng: -80.1862209202955 },
    { lat: 39.900233234177925, lng: -80.18622893908343 },
    { lat: 39.90023425946349, lng: -80.18641337120577 },
    { lat: 39.900556198377956, lng: -80.1864066888825 },
  ];
  // Construct the polygon.
  const eastpolygon = new google.maps.Polygon({
    paths: eastCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  eastpolygon.setMap(map);

  const eastinfowindow= new google.maps.InfoWindow({
    content: "This is East! It offers suite residence housing for women.",
  });

eastMarker.addListener("click", () => {
    eastinfowindow.open({
      anchor: eastMarker,
      map,
      shouldFocus: false,
    });
  });


  

  const hannaMarker = new google.maps.Marker({
    position: { lat: 39.90004741464909, lng: -80.18530657072321 },
    map,
    title: "Waynesburg University",
    icon: "https://i.imgur.com/dfgYUkT.png"  
  });

  const hannaCoords = [
    { lat: 39.899575902129406, lng: -80.18715171790629 },
    { lat: 39.89957230113685, lng: -80.18694183506034 },
    { lat: 39.89937424625455, lng: -80.18694787003034 },
    { lat: 39.89937784725752, lng: -80.18715708232408 },
    { lat: 39.899575902129406, lng: -80.18715171790629 }
  ];

const hannaPolygon = new google.maps.Polygon({
    paths: hannaCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

    hannaPolygon.setMap(map);
  
  


    const CREDMarker = new google.maps.Marker({
    position: { lat: 39.8981975148811, lng: -80.18625576910551 },
    map,
    title: "Waynesburg University",
    icon: "https://i.imgur.com/iUbMSVZ.png"
});
    const CREDCoords = [
    { lat: 39.89820789567786, lng: -80.1863954019053 },
    { lat: 39.898204677891705, lng:  -80.18609970550332 },
    { lat: 39.89802287272942, lng:  -80.18610389977852 },
    { lat: 39.89802930831865,  lng:  -80.18640588759332 },
    { lat: 39.89820789567786, lng: -80.1863954019053 }
  ];
  const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  CREDPolygon.setMap(map);

  const CREDinfowindow= new google.maps.InfoWindow({
    content: "This is CRED! The Center for Research and Economic Development (CRED) is a resource for business and industry, applying the University’s scientific research and business expertise to real-world projects.",
  });

CREDMarker.addListener("click", () => {
    CREDinfowindow.open({
      anchor: CREDMarker,
      map,
      shouldFocus: false,
    });
  });

  

 const StoverMarker = new google.maps.Marker({
    position: { lat: 39.90001991826108, lng: -80.18617460261629 },
    map,
    title: "Waynesburg University",
    icon: "https://i.imgur.com/dfgYUkT.png"
});

const StoverCoords = [
    {lat: 39.899772227541916, lng: -80.18636360069222},
    {lat: 39.89980309309625, lng: -80.18636695345333},
    {lat: 39.89980309309625, lng: -80.18640517492993},
    {lat: 39.89999548807153, lng: -80.18639712830327},
    {lat: 39.89999548807153, lng: -80.18635823627444},
    {lat: 39.90002841122172, lng: -80.18635756572223},
    {lat: 39.90002326698055, lng: -80.18596864543396},
    {lat: 39.89976502557723, lng: -80.18597803316504},
    {lat: 39.899772227541916, lng: -80.18636360069222}
];
const StoverPolygon = new google.maps.Polygon({
    paths: StoverCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  StoverPolygon.setMap(map);

  const Stoverinfowindow= new google.maps.InfoWindow({
    content: "This is Stover Center! A hub of campus life, which opened in September 1998, the Center houses Student Services, the Service Learning programs, and international programs as well as a new snack bar, student mailboxes, recreation space, banquet/meeting facilities, prayer chapel, Chaplain’s office, and bookstore.",
  });

StoverMarker.addListener("click", () => {
    Stoverinfowindow.open({
      anchor: StoverMarker,
      map,
      shouldFocus: false,
    });
  });

const millerMarker = new google.maps.Marker({
    position: { lat: 39.89957140131414, lng: -80.18704391985473 },
    map,
    title: "Waynesburg University",
    icon: "https://i.imgur.com/5T7Fsgv.png"  
  });

    const millerCoords = [
    { lat: 39.89939727765804, lng: -80.1877995788888}, 
    { lat: 39.89939419108494, lng: -80.18761718866978},
    { lat: 39.89937772935947, lng: -80.18761718866978},
    { lat: 39.89937515721452, lng: -80.18760713038564},
    { lat: 39.899367955208106, lng: -80.1876057892811},
    { lat: 39.89936744077903,  lng: -80.1874254107189},
    { lat: 39.89937515721452, lng: -80.1874227285098},
    { lat: 39.899376186072516, lng: -80.18741602298704},
    { lat: 39.89939933537334, lng: -80.18741535243477}, 
    { lat: 39.89939984980218, lng: -80.1872289389021},
    { lat: 39.89955932254984, lng: -80.18723229166346},
    { lat: 39.89956343797066, lng: -80.18743748065987},
    { lat: 39.899593274764335, lng: -80.18743748065987},
    { lat: 39.89959481804641, lng: -80.18759103713101},
    { lat: 39.8995618946879, lng: -80.18759304878785},
    { lat: 39.89956086583266, lng: -80.18779555557518},
    { lat: 39.89939727765804, lng: -80.1877995788888}
];
      const millerPolygon = new google.maps.Polygon({
    paths: millerCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
    });


  millerPolygon.setMap(map);

  const millerinfowindow= new google.maps.InfoWindow({
    content: "This is Miller! Alfred Brashear Miller Hall is the main administration building of Waynesburg University.",
  });

millerMarker.addListener("click", () => {
    millerinfowindow.open({
      anchor: millerMarker,
      map,
      shouldFocus: false,
    });
  });

}

