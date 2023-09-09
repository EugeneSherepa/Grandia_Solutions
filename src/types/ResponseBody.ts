export type IpResponseBody = {
  is_valid: string;
  country: string;
  country_code: string;
  region_code:  string;
  region:  string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  address: string;
}


export interface TextResponse {
  text: string;
  bounding_box: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
}