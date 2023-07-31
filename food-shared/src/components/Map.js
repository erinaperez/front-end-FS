import React, { useState } from "react";
import mapboxgl from  'mapbox-gl';
import axios from "axios";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;