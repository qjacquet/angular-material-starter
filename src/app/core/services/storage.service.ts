import { Injectable } from '@angular/core';

export enum StorageMode {
    None = 0,
    Local = 1,
    Database = 2
}

@Injectable()
export class StorageService {

    storageMode: StorageMode;

    storageId: string;
    storageValue: any;

    constructor() {
        this.storageMode = StorageMode.Local;
    }

    save() {
        switch (this.storageMode) {
            case StorageMode.Local:
                localStorage.setItem(this.storageId, JSON.stringify(this.storageValue));
                break;
            default:
                break;
        }
    }

    protected setValuesAndSave(key: string, value: any) {
        this.storageId = key;
        this.storageValue = value;
        this.save();
    }

    load() {
        this.storageValue = this.get();
    }

    get() {
        switch (this.storageMode) {
            case StorageMode.Local:
                return this.storageValue = localStorage.getItem(this.storageId) ? JSON.parse(localStorage.getItem(this.storageId)) : null;
                break;
            default:
                break;
        }
    }
}
