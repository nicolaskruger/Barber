import { formatDiagnostic, Identifier } from 'typescript';
import {Client} from './Client';
import {HairCut} from './HairCut';

export interface MsgDTO{
    client:Client;
    hairCut:HairCut;
    id:number;
}