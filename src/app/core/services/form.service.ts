import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from './storage.service';

export enum StorageMode {
    None = 0,
    Local = 1,
    Database = 2
}

export class FormServiceModel {
    form: any;
    step: number;

    public constructor(init?: Partial<FormServiceModel>) {
        Object.assign(this, init);
    }
}

@Injectable()
export class FormService extends StorageService {

    selector: string;
    form: FormGroup;
    step: number;

    constructor(
        private formBuilder: FormBuilder,
    ) {
        super();
    }

    /**
     * Set the current Form
     *
     * @param id Id
     * @param form Array of FormGroup
     */
    set(id: string, form: FormGroup[]) {
        this.storageId = id;

        const iterator = form.keys();

        const array = [];
        for (const key of iterator) {
            array[key] = form[key];
        }

        // this.selector = id;
        this.form = this.formBuilder.group(array);

        // Load saved form
        if (this.get() != null) {
            this.getForm();
        }
    }

    /**
     * Save form
     */
    saveForm() {
        this.storageValue = new FormServiceModel({
            form: this.form.value,
            step: this.step
        });
        this.save();
    }

    /**
     * Get form
     */
    getForm() {
        const values = this.get() as FormServiceModel;
        if (values != null) {
            this.form.setValue(values.form);
        }
        this.step = values.step;
    }

    /**
     * Delete saved form
     * @param id Must be uniqueId
     */
    deleteSave() {
        switch (this.storageMode) {
            case StorageMode.Local:
                localStorage.removeItem(this.selector);
                localStorage.removeItem(this.selector + '-step');
                break;
            default:
                break;
        }
    }

}
