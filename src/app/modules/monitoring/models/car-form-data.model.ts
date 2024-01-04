export interface CarFormData {
  id: number;
  image: string;
  title: string;
  driverName: string;
  offline: boolean;
  temperature: number;
  connected: boolean;
  location: { latitude: number; longitude: number };
}
