import { Dispatch } from "react";

export interface Project {
  id: number;
  name: string;
  country: string;
  provider: string;
  cost: number;
}

export interface Cart {
  id: number;
  name: string;
  quantity: number;
  total: number;
}

export interface StateReducer<State, Action> {
  state: State;
  dispatch: Dispatch<Action>;
}
