interface Interface1 {
  prop1: number;
}

interface Interface2 {
  prop2: number;
  prop3: number;
}

interface Interface3 {
  prop2: number;
}

type InterfaceMix2 = Interface1 & Interface2;

const interfaceMix2: InterfaceMix2 = {
  prop1: 2,
  prop2: 3,
  prop3: 3
}