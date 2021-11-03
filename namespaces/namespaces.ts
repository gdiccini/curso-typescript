namespace Geometry {
  export namespace Area {
    const PI = 3.14;

    export function rectangle(base: number, height: number): number {
      return base * height;
    }

    export function circunference(raio: number): number {
      return PI * Math.pow(raio, 2);
    };
  }
}

console.log(Geometry.Area.circunference(5))
console.log(Geometry.Area.rectangle(5, 4))
