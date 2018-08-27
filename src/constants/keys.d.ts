declare module "*keys.json" { 
  const value: key[];
  export default value;
}

interface key {
  text: string,
  width: number,
  height: number,
  radius: number,
  font: string,
  size: number
}
