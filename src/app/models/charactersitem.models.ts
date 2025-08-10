import {TransformationModel} from './transformation.model';

export interface CharacterItemModel {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string;
  transformations: TransformationModel[];
  originPlanet: OriginPlanet;

}

interface OriginPlanet {
  id: number;
  name: string;
  isDestroyed: boolean;
  despription: string;
  image: string;


}
