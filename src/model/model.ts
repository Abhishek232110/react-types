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
