import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

interface RouteStorageObject {
    snapshot: ActivatedRouteSnapshot;
    handle: DetachedRouteHandle;
}

export class AppRouteReuseStrategy implements RouteReuseStrategy {
    storedRoutes: { [key: string]: RouteStorageObject } = {};
    private compareObjects(base: any, compare: any): boolean {

        // loop through all properties in base object
        for (const baseProperty in base) {

            // determine if comparrison object has that property, if not: return false
            if (compare.hasOwnProperty(baseProperty)) {
                switch(typeof base[baseProperty]) {
                    // if one is object and other is not: return false
                    // if they are both objects, recursively call this comparison function
                    case 'object':
                        if ( typeof compare[baseProperty] !== 'object' || !this.compareObjects(base[baseProperty], compare[baseProperty]) ) {
                            return false;
                        }
                        break;
                    // if one is function and other is not: return false
                    // if both are functions, compare function.toString() results
                    case 'function':
                        if ( typeof compare[baseProperty] !== 'function' || base[baseProperty].toString() !== compare[baseProperty].toString() ) {
                            return false;
                        }
                        break;
                    // otherwise, see if they are equal using coercive comparison
                    default:
                        if ( base[baseProperty] !== compare[baseProperty] ) {
                            return false;
                        }
                }
            } else {
                return false;
            }
        }

        // returns true only after false HAS NOT BEEN returned through all loops
        return true;
    }
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return route && route.routeConfig && route.routeConfig.path === 'home';
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | any): void {
        this.storedRoutes[route.routeConfig.path] = {
            snapshot: route,
            handle: handle
        };
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        const canAttach: boolean = !!route.routeConfig && !!this.storedRoutes[route.routeConfig.path];

        if (canAttach) {
            const paramsMatch: boolean = this.compareObjects(route.params, this.storedRoutes[route.routeConfig.path].snapshot.params);
            const queryParamsMatch: boolean = this.compareObjects(route.queryParams, this.storedRoutes[route.routeConfig.path].snapshot.queryParams);
            return paramsMatch && queryParamsMatch;
        } else {
            return false;
        }
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | any {
        if (!route.routeConfig || !this.storedRoutes[route.routeConfig.path]) {
            return null;
        }
        return this.storedRoutes[route.routeConfig.path].handle;
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return null
    }
}