export class DialogData {
    title  = '';
    content = '';
    showOKBtn = false;
    showCancelBtn = false;

    public constructor(init?: Partial<DialogData>) {
        Object.assign(this, init);
    }
}
