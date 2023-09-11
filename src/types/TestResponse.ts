export interface TextResponse {
  text: string;
  bounding_box: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
}