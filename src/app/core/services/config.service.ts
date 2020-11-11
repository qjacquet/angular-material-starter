import { appConfig, Config } from '../config/config';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const STORAGE_KEY = 'config';
const RELOAD_CONFIG_WHEN_UPDATED = true;

@Injectable()
export class ConfigService extends StorageService {

    private configSubject: BehaviorSubject<Config>;
    public config: Observable<Config>;

    public get configValue(): Config {
        return this.configSubject.value;
    }

    constructor() {
        super();

        this.storageId = STORAGE_KEY;

        this.init();
    }

    init() {
        let storedConfig = this.get() as Config;

        // Init from appConfig
        if (storedConfig == null) {
            this.storageValue = appConfig;
            this.save();

            // Reload config
            storedConfig = this.get() as Config;
        }

        // Set stored config
        this.configSubject = new BehaviorSubject<Config>(storedConfig);
        this.config = this.configSubject.asObservable();

        // Update config schema if needed
        if (RELOAD_CONFIG_WHEN_UPDATED) {
            this.updateSchema(storedConfig);
        }
    }

    set(config: Config) {
        super.setValuesAndSave(STORAGE_KEY, config);
        this.configSubject.next(config);
    }

    /**
     * Update stored config schema from default config
     * @param storedConfig
     */
    private updateSchema(storedConfig) {
        Object.keys(appConfig).forEach((key) => {
            // Conditions : Stored config key not exist or exist but is empty
            if (storedConfig[key] === undefined || storedConfig[key] !== undefined && String(storedConfig[key]).length === 0) {
                storedConfig[key] = appConfig[key];
            }
        });

        this.set(storedConfig);
    }
}
