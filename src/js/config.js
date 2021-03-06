import { isElectron } from './platform'
export default class Config {
    static APP_SERVER = 'http://wildfirechat.cn:8888';
    static QR_CODE_PREFIX_PC_SESSION = "wildfirechat://pcsession/";
    


    static getWFCPlatform() {
        if (isElectron()) {
            if (window.process && window.process.platform === 'darwin') {
                // osx
                return 4;
            } else {
                // windows
                return 3;
            }

        } else {
            // web
            return 5;
        }
    }
}
