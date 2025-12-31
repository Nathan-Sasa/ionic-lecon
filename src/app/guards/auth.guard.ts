import { CanActivateFn, Router } from "@angular/router";
import { inject } from '@angular/core'
import { NavController } from "@ionic/angular";
// import { AuthService } from "./auth.service";

export const authGuard: CanActivateFn = () => {
    // const auth = inject(AuthService);
    // const router = inject(Router)

    // if (!auth.hasValidToken() || !auth.isLoggedIn()) {
    //     router.navigate(['/login'])
    //     return false
    // }
    // return true
    const navCtrl = inject(NavController)

    if(localStorage.getItem('isLoggedIn') === 'true'){
        // navCtrl.navigateRoot('/auth');
        navCtrl.navigateRoot('/auth')
        return true;
    }

    return true;
}