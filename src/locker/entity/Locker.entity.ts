import {v4 as uuid} from 'uuid'


export class Locker{

    readonly name:string
    readonly uuid:string
    private static isOpen:boolean



    constructor(name:string) {
        this.uuid = uuid()
        this.name=name
    }


    static get getIsOpen(): boolean {
        return this.isOpen;
    }

    static set setIsOpen(value: boolean) {
        this.isOpen = value;
    }


}