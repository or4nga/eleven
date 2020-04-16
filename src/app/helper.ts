interface IAvatarStyle {
  background: string;
}

interface INamed {
  id: number;
  name: string;
}

interface IBuilding extends INamed{
  floors: IFloor[];
}

interface IFloor extends INamed {
  spaceTypes: ISpaceType[];
}

interface ISpaceType extends INamed{
  spaces: ISpace[];
}

interface ISpace extends INamed {
  utilization: {
    hour: number;
    day: number;
    week: number;
  };
  lastSanitized: number;
}

interface IOperator {
  lastName: string;
  firstName: string;
  image: string;
}

interface IWorkOrder {
  building: string;
  floor: string;
  spaces: ISpace[];
  dateEntered: string;
  dateRequired: string;
  requestType: string;
  operators: IOperator[];
  instructions: string[];
  title: string;
  orderNumber: number;
}

interface ITiming {
  name: string;
  value: string;
}

const usages: ITiming[] = [
  {name: '10%', value: '10'},
  {name: '20%', value: '20'},
  {name: '30%', value: '30'},
  {name: '40%', value: '40'},
  {name: '50%', value: '50'},
  {name: '60%', value: '60'},
  {name: '70%', value: '70'},
  {name: '80%', value: '80'},
  {name: '90%', value: '90'},
  {name: '100%', value: '100'},
];

const frequencies: ITiming[] = [
  {name: 'Every hour', value: '1h'},
  {name: 'Every 2 hours', value: '2h'},
  {name: 'Every 4 hours', value: '4h'},
  {name: 'Every day', value: '1d'},
  {name: 'Every 2 days', value: '2d'},
];

const backendUrl = 'http://e00f8eef.ngrok.io';

export {
  IAvatarStyle,
  IBuilding,
  IFloor,
  IOperator,
  ISpaceType,
  ISpace,
  ITiming,
  IWorkOrder,
  backendUrl,
  usages,
  frequencies,
};

