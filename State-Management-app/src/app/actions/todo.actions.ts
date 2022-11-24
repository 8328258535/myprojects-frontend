import {Action} from "@ngrx/store";
import { TodoActionType } from "../Shared/todo.actions.types.enum";
export class ActionParent implements Action {
    type:any;
    payload:any;
}


export class TodoAdd implements ActionParent {
    type =TodoActionType.Add;
    

    constructor(public payload:any) {}
}