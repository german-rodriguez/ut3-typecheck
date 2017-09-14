import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { Integer, Double, TruthValue } from './AST';

/**
  Representación de las asignaciones de valores a variables.
*/
export class Assignment implements Stmt {

  id: string;
  exp: Exp;

  constructor(id: string, exp: Exp) {
    this.id = id;
    this.exp = exp;
  }

  toString(): string {
    return `Assignment(${this.id}, ${this.exp.toString()})`;
  }

  unparse(): string {
    return `${this.id} = ${this.exp.unparse()}`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    var type: WhileType = checkstate.get(this.id);
    if(type == "int" && this.exp instanceof Integer ||
       type == "double" && this.exp instanceof Double ||
       type == "bool" && this.exp instanceof TruthValue){
        checkstate.set(this.id,type);
      }
    return checkstate;
  }
}
