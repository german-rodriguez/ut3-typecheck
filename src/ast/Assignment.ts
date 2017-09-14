import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';

/**
  Representación de las asignaciones de valores a variables.
*/
export class Assignment implements Stmt {

  type: WhileType;
  id: string;
  exp: Exp;

  constructor(type: WhileType, id: string, exp: Exp) {
    this.type = type;
    this.id = id;
    this.exp = exp;
  }

  toString(): string {
    return `Assignment(${this.type} ${this.id}, ${this.exp.toString()})`;
  }

  unparse(): string {
    return `${this.type} ${this.id} = ${this.exp.unparse()}`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    return undefined;
  }
}
