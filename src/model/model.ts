export interface CityResponse {
  total_count: number;
  results?: City[];
}

export interface City {
  name: string;
  ascii_name: String;
  admin1_code: number;
  admin2_code: number;
  admin3_code: number;
  admin4_code: number;
  cou_name_en: string;
  country_code: string;
  country_code_2: null;
  dem: number;
  feature_class: String;
  feature_code: String;
  geoname_id: number;
  label_en: String;
  modification_date: number;
  population: number;
  timezone: String;
  alternate_names: String[];
  coordinates: Coordinates;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface WeatherData {
  data: string;
  base: String;
  cod: number;
  dt: number;
  name: String;
  timezone: number;
  visibility: number;
  says?: Says;
  main: Main[];
  weather?: Weather[];
  wind: Wind;
}

export interface Says {
  country: String;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Weather {
  description: String;
  main: number;
  icon: string;
  id: number;
}

export interface Wind {
  deg: number;
  guest: number;
  speed: number;
}
