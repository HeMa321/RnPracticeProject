import {Dimensions, NativeModules, PixelRatio, Platform,StatusBar} from 'react-native';

// const {RNDeviceInfo} = NativeModules;

export const deviceWidth = Dimensions.get('window').width;      //设备的宽度
export const deviceHeight = Dimensions.get('window').height;    //设备的高度
export const MAX_SCREENT = Math.max(deviceWidth, deviceHeight);
export const MIN_SCREENT = Math.min(deviceWidth, deviceHeight);

const __ISIPHONEX__ = Platform.OS === 'ios' && (MIN_SCREENT === 375.0 && MAX_SCREENT === 812.0);
const __ISIPHONEXSMAX__ = Platform.OS === 'ios' && (MIN_SCREENT === 414.0 && MAX_SCREENT === 896.0);

// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;
// iPhoneXR/XSMAX
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const PROMAX_WIDTH = 428;
const PROMAX_HEIGHT = 926;

const IPHONE12_H = 844;
const IPHONE12_Max = 926;
const IPHONE12_Mini = 780;

const IPONE_X_WIDTH = 320;
const IPONE_X_HEIGHT = 693;

//有刘海的情况
export const isFullScreen = (
    Platform.OS === 'ios' &&
    ((deviceHeight === X_HEIGHT && deviceWidth === X_WIDTH) ||
        (deviceHeight === X_WIDTH && deviceWidth === X_HEIGHT) ||
        (deviceHeight === XSMAX_HEIGHT && deviceWidth === XSMAX_WIDTH) ||
        (deviceHeight === XSMAX_WIDTH && deviceWidth === XSMAX_HEIGHT) ||
        deviceHeight === IPHONE12_H ||
        deviceHeight === IPHONE12_Max ||
        deviceHeight === IPHONE12_Mini) ||
    (deviceWidth === XSMAX_WIDTH && deviceHeight === XSMAX_HEIGHT) ||
    (deviceWidth === PROMAX_WIDTH && deviceHeight === PROMAX_HEIGHT) ||
    (deviceWidth === IPONE_X_WIDTH && deviceHeight === IPONE_X_HEIGHT)
);


let fontScale = PixelRatio.getFontScale();                      //返回字体大小缩放比例

let pixelRatio = PixelRatio.get();      //当前设备的像素密度
const defaultPixel = 2;                           //iphone6的像素密度
//px转换成dp
const w_2 = 750 / defaultPixel;
const h_2 = 1334 / defaultPixel;
const scale = Math.min(deviceHeight / h_2, deviceWidth / w_2);   //获取缩放比例
/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */
export function setSpText(size: number) {
    size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
    return size / defaultPixel;
}

export function scaleSize(size: number) {

    size = Math.round(size * scale + 0.5);
    return size / defaultPixel;
}

/**
 * 高度转换
 * @param dp
 * @returns {number}
 */
function autoSizeWidth(dp) {
    return PixelRatio.roundToNearestPixel(dp * deviceWidth / 375);
}

function autoSizeHeight(dp) {
    return PixelRatio.roundToNearestPixel(dp * deviceHeight / 750);
}


/**
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */
const r2 = 2;
const w2 = 750 / r2;

let isNavigationBarShow = true;
let hasNotchScreen = false;

function setBarShow(isShow) {
    isNavigationBarShow = isShow;
}

function getBarShow() {
    return isNavigationBarShow;
}

function isNavigationBarExist(callback = () => {
}) {
    if (Platform.OS === 'ios') {
        return;
    }
    // RNDeviceInfo.isNavigationBarExist(callback);
}

function setHasNotchScreen(isNotch) {
    hasNotchScreen = isNotch;
}

function getHasNotchScreen() {
    return hasNotchScreen;
}

function checkhasNotchScreen(callback = () => {
}) {
    if (Platform.OS === 'ios') {
        return;
    }
    // RNDeviceInfo.hasNotchScreen(callback);
}

export const DEFAULT_DENSITY = 1;

/**
 * 屏幕适配,缩放size
 * @param size
 * @returns {Number}
 * @constructor
 */
function px2dp(size) {
    let scaleWidth = deviceWidth / w2;
    size = Math.round((size * scaleWidth + 0.5));
    return size / DEFAULT_DENSITY;
}

export type Size = {
    width: number;
    height: number;
};

/**
 * 多图拍摄选择
 * @param imageCount
 * @returns {{imageCount: *, isRecordSelected: boolean, isCamera: boolean, isCrop: boolean, quality: number, enableBase64: boolean, rotateEnabled: boolean}}
 */
function syanImagePickerOptions(imageCount) {
    return {
        imageCount: imageCount,
        isRecordSelected: imageCount > 1,
        isCamera: true,
        isCrop: false,
        quality: 95,
        enableBase64: true,
        rotateEnabled: false,
    };
}

/**
 * 单图 是否可以进行编辑 裁剪
 * @param allowsEditing
 * @returns {{title: string, cancelButtonTitle: string, takePhotoButtonTitle: string, chooseFromLibraryButtonTitle: string, quality: number, maxWidth: *, maxHeight: *, allowsEditing: *, noData: boolean, permissionDenied: {title: string, text: string, reTryTitle: string, okTitle: string}, storageOptions: {skipBackup: boolean, path: string}}}
 */
function photoOptions(allowsEditing) {
    return {
        title: 'Select',
        cancelButtonTitle: 'Cancel',
        takePhotoButtonTitle: 'Take Photo...',
        chooseFromLibraryButtonTitle: 'Choose from Library...',
        quality: 0.9,
        maxWidth: deviceWidth,
        maxHeight: deviceWidth,
        allowsEditing: allowsEditing,
        noData: false,
        permissionDenied: {
            title: 'Permission denied',
            text:
                'To be able to take pictures with your camera and choose images from your library.',
            reTryTitle: 're-try',
            okTitle: "I'm sure",
        },
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
}


// 根据宽获取高
function getImgHeightWithWidth(size: Size, width: number = deviceWidth): number {
    if (!size || !size.width || !size.height) {
        return 0;
    }
    return size.height * width / size.width;
}

// const statusBarHeight = Platform.OS === 'ios' ? (__ISIPHONEX__ || __ISIPHONEXSMAX__ ? 44 : 20) : RNDeviceInfo.statusBarHeight;

export default {
    px2dp,
    setBarShow,
    getBarShow,
    MAX_SCREENT,
    MIN_SCREENT,
    setSpText,
    // isNavigationBarExist,
    setHasNotchScreen,
    getHasNotchScreen,
    // checkhasNotchScreen,
    getImgHeightWithWidth,
    autoSizeWidth,
    autoSizeHeight,
    width: deviceWidth,
    height: deviceHeight,
    pixelRatio: PixelRatio.get(),
    onePixel: 1 / PixelRatio.get(),
    // statusBarHeight,
    // 44为头部不包含状态栏高度
    // headerHeight: statusBarHeight + 44,
    tabBarHeight: Platform.OS === 'ios' ? (isFullScreen ? 88 : 64) : 49,
    // tabBarHeightMore: this.tabBarHeight - 49,
    isIOS: Platform.OS === 'ios',
    isIOSSmall: Platform.OS === 'ios' && deviceHeight === 568,// phoneSE,phone4,phone5,phone5s
    isIOSNomarl: Platform.OS === 'ios' && deviceHeight === 667,// phone6,phone7,phone8
    isIOSP: Platform.OS === 'ios' && deviceHeight === 736,//phone6p,phone7p,phone8p
    isIOSX: Platform.OS === 'ios' && deviceHeight === 812,
    safeBottom: Platform.OS === 'ios' ? (isFullScreen ? 26 : 0) : 0,
    SafeAreaBottomHeight : isFullScreen ? 34 : 0,//底部安全区域
    navBarHeight: Platform.OS === 'ios' ? (isFullScreen ? 88 : 64) : 40 + StatusBar.currentHeight,
    isIphoneMax: __ISIPHONEXSMAX__,
    isIphonex: __ISIPHONEX__,
    // isAllScreenDevice: Platform.OS === 'ios' ? false : RNDeviceInfo.isAllScreenDevice,
    // isAnroidNotchScreen: Platform.OS === 'ios' ? false : RNDeviceInfo.isAnroidNotchScreen,
    EMAIL_ADDRESS: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,// /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,//校验邮箱地址
    ANDROID: Platform.OS === 'android',//判断是否是andriod  true是android  false是ios
    PHONE_STYLE: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,//校验手机号
    syanImagePickerOptions,
    photoOptions,

};
