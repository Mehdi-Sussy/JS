export type userNoteType = {
    id:string;
    conatctName:string;
    conatctNumber:string | number;
    storage:"SIM"|"Device";
    avatar: string | null
};
export type sus = userNoteType[];