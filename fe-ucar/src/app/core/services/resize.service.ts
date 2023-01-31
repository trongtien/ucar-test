import { Injectable } from "@angular/core";
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { Observable, Subscription, fromEvent } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ResizeService {
    private resizeObservable$: Observable<Event> | undefined;
    private resizeSubscription$: Subscription | undefined;

    private isMobile: boolean = false
    private isTablet: boolean = false
    private isDesktopDevice: boolean = false
    private screenWidth = 0
    private screenHeight = 0
    public isViewResponsive = false

    constructor(
        private deviceService: DeviceDetectorService,
    ) { }

    setScreenWidth(size: number) {
        this.screenWidth = size
    }

    setScreenHeight(size: number) {
        this.screenHeight = size
    }

    getResizeSubscription() {
        return this.resizeSubscription$
    }

    detectSize() {
        this.resizeObservable$ = fromEvent(window, 'resize');
        this.resizeSubscription$ = this.resizeObservable$.subscribe(e => {
            let width = window.innerWidth
            let height = window.innerHeight

            this.screenHeight = height
            this.screenWidth = width

            if (width <= 992){
                this.isViewResponsive = true
            }else{
                this.isViewResponsive = false
            }
        });
    }

    epicFunction() {
        const deviceInfo: DeviceInfo | null = this.deviceService.getDeviceInfo() || null

        if (deviceInfo !== null) {
            this.isMobile = this.deviceService.isMobile()
            this.isTablet = this.deviceService.isTablet()
            this.isDesktopDevice = this.deviceService.isDesktop()
        }
    }
}