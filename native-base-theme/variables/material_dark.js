// @flow

import {Dimensions, PixelRatio, Platform} from 'react-native';

import {PLATFORM} from './commonColor';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = PLATFORM.MATERIAL;
const isIphoneX =
    platform === PLATFORM.IOS &&
    (deviceHeight === 812 ||
        deviceWidth === 812 ||
        deviceHeight === 896 ||
        deviceWidth === 896);
const themeColor = '#065394';//'#3F51B5',

export default {
    platformStyle,
    platform,
    white: '#0F0202',//232222
    bg_color:'#222222',// '#7b7a7a',//rgba(15,2,2,0.7)    F5F5F9
    dark_bg_color: 'rgba(15,2,2,1)',//F0F0F0    F5F5F9
    dark_bg_chat_color: 'rgba(15,2,2,1)',//F0F0F0    F5F5F9

    black1: '#FFF',
    black2: '#FFF',
    black53: '#FFF',
    black3: '#FFF',
    gray2: '#FFF',
    plan_new:'#222222',

    // chat
    chat_day_bg: '#181818',
    chat_reply_color: '#c8c8c8',
    chat_reply_bg: '#262626',

    button_text: '#fff',

    // Accordion
    headerStyle: '#edebed',
    iconStyle: '#000',
    contentStyle: '#f5f4f5',
    expandedIconStyle: '#000',
    accordionBorderColor: '#d3d3d3',
    disableRow: '#a9a9a9',

    // ActionSheet
    elevation: 4,
    containerTouchableBackgroundColor: 'rgba(0,0,0,0.4)',
    innerTouchableBackgroundColor: '#FFF',
    listItemHeight: 50,
    listItemBorderColor: 'transparent',
    marginHorizontal: -15,
    marginLeft: 14,
    marginTop: 15,
    minHeight: 56,
    padding: 15,
    touchableTextColor: '#757575',

    // Android
    androidRipple: true,
    androidRippleColor: 'rgba(256, 256, 256, 0.3)',
    androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
    buttonUppercaseAndroidText: true,

    // Badge
    badgeBg: '#ED1727',//背景色
    badgeColor: '#FFF',//Badge字体颜色
    badgePadding: 0,

    // Button
    buttonFontFamily: 'Roboto',
    buttonDisabledBg: '#b5b5b5',
    buttonPadding: 6,
    get buttonPrimaryBg() {
        return this.brandPrimary;
    },
    get buttonPrimaryColor() {
        return this.inverseTextColor;
    },
    get buttonInfoBg() {
        return this.brandInfo;
    },
    get buttonInfoColor() {
        return this.inverseTextColor;
    },
    get buttonSuccessBg() {
        return this.brandSuccess;
    },
    get buttonSuccessColor() {
        return this.inverseTextColor;
    },
    get buttonDangerBg() {
        return this.brandDanger;
    },
    get buttonDangerColor() {
        return this.inverseTextColor;
    },
    get buttonWarningBg() {
        return this.brandWarning;
    },
    get buttonWarningColor() {
        return this.inverseTextColor;
    },
    get buttonTextSize() {
        return this.fontSizeBase - 1;
    },
    get buttonTextSizeLarge() {
        return this.fontSizeBase * 1.5;
    },
    get buttonTextSizeSmall() {
        return this.fontSizeBase * 0.8;
    },
    get borderRadiusLarge() {
        return this.fontSizeBase * 3.8;
    },
    get iconSizeLarge() {
        return this.iconFontSize * 1.5;
    },
    get iconSizeSmall() {
        return this.iconFontSize * 0.6;
    },

    // Card
    cardDefaultBg: '#FFF',
    cardBorderColor: '#ccc',
    cardBorderRadius: 2,
    cardItemPadding: platform === PLATFORM.IOS ? 10 : 12,

    // CheckBox
    CheckboxRadius: 0,
    CheckboxBorderWidth: 2,
    CheckboxPaddingLeft: 2,
    CheckboxPaddingBottom: 5,
    CheckboxIconSize: 16,
    CheckboxIconMarginTop: 1,
    CheckboxFontSize: 17,
    checkboxBgColor: themeColor,
    checkboxSize: 20,
    checkboxTickColor: '#FFF',

    // Color
    brandPrimary: themeColor,
    brandInfo: '#007AFF',//62B1F6
    brandSuccess: '#5cb85c',
    brandDanger: '#d9534f',
    brandWarning: '#f0ad4e',
    brandDark: '#000',
    brandLight: '#a9a9a9',

    // Container
    containerBgColor: '#FFF',

    // Date Picker
    datePickerTextColor: '#000',
    datePickerBg: 'transparent',

    // FAB
    fabWidth: 56,

    // Font
    DefaultFontSize: 16,
    fontFamily: 'Roboto',
    fontSizeBase: 15,
    get fontSizeH1() {
        return this.fontSizeBase * 1.8;
    },
    get fontSizeH2() {
        return this.fontSizeBase * 1.6;
    },
    get fontSizeH3() {
        return this.fontSizeBase * 1.4;
    },

    // Footer
    footerHeight: 55,
    footerDefaultBg: 'rgba(15,2,2,1)',//底部Footer背景色
    footerPaddingBottom: 0,

    // FooterTab
    tabBarTextColor: '#ccc',//未选中的字体，图片icon样式
    tabBarTextSize: 12,//文字大小
    activeTab: themeColor,
    sTabBarActiveTextColor: themeColor,
    tabBarActiveTextColor: themeColor,//选中的字体，图片icon样式
    tabActiveBgColor: 'rgba(15,2,2,1)',//选中的tab背景色

    // Header
    toolbarBtnColor: '#FFF',
    toolbarDefaultBg: 'rgba(15,2,2,1)',//标题栏背景色
    toolbarHeight: isIphoneX ? 35 : 46,
    toolbarSearchIconSize: 23,
    toolbarInputColor: '#FFF',
    searchBarHeight: platform === PLATFORM.IOS ? 30 : 40,
    searchBarInputHeight: platform === PLATFORM.IOS ? 40 : 50,
    toolbarBtnTextColor: '#FFF',//标题栏 左右 文字颜色
    toolbarBtnTextSize: platform === PLATFORM.IOS && !isIphoneX ? 12 : 14,//标题栏 左右 文字大小
    toolbarDefaultBorder: '#ccc',//标题栏底部线框颜色
    iosStatusbar: 'dark-content',
    get statusBarColor() {
        return this.toolbarDefaultBg;//android顶部状态栏 蒙层透明度
    },
    get darkenHeader() {
        return this.tabBgColor;
    },

    //Switch
    switchOpenColor: themeColor,
    switchClosedColor: '#FFF',

    // Icon
    iconFamily: 'Ionicons',
    iconFontSize: 28,
    iconHeaderSize: 25,//修改图标默认大小

    // InputGroup
    inputFontSize: 17,
    inputBorderColor: '#D9D5DC',
    inputSuccessBorderColor: '#2b8339',
    inputErrorBorderColor: '#ed2f2f',
    inputHeightBase: 50,
    get inputColor() {
        return this.textinputColor;
    },
    get inputColorPlaceholder() {
        return '#575757';
    },

    // Line Height
    buttonLineHeight: 19,
    lineHeightH1: 32,
    lineHeightH2: 27,
    lineHeightH3: 25,
    lineHeight: 24,

    // List
    listBg: 'transparent',
    listBorderColor: '#c9c9c9',
    listDividerBg: '#f4f4f4',
    listBtnUnderlayColor: '#222222',
    listItemPadding: 12,
    listNoteColor: '#808080',
    listNoteSize: 13,
    listItemSelected: '#FFF',

    // Progress Bar
    defaultProgressColor: '#E4202D',
    inverseProgressColor: '#1A191B',

    // Radio Button
    radioBtnSize: 23,
    radioSelectedColorAndroid: themeColor,
    radioBtnLineHeight: 24,
    get radioColor() {
        return this.brandPrimary;
    },

    // Segment
    segmentBackgroundColor: themeColor,
    segmentActiveBackgroundColor: '#FFF',
    segmentTextColor: '#FFF',
    segmentActiveTextColor:themeColor,
    segmentBorderColor: '#FFF',
    segmentBorderColorMain: themeColor,

    // Spinner
    defaultSpinnerColor: '#45D56E',
    inverseSpinnerColor: '#1A191B',

    // Tab
    tabDefaultBg: themeColor,
    topTabBarTextColor: '#b3c7f9',
    topTabBarActiveTextColor: '#FFF',
    topTabBarBorderColor: '#FFF',
    topTabBarActiveBorderColor: '#FFF',

    // Tabs
    tabBgColor: '#F8F8F8',
    tabFontSize: 15,

    // Text
    textColor: '#FFF',// 默认字体颜色
    inverseTextColor: '#FFF',
    textinputColor:'#333',
    noteFontSize: 14,
    get defaultTextColor() {
        return this.textColor;
    },

    // Title
    titleFontfamily: 'Roboto',
    titleFontColor: '#FFF',//标题栏字体颜色
    titleFontSize: 19,//标题栏字体大小
    subTitleFontSize: 13,//标题栏 副标题 大小
    subtitleColor: '#FFF',//标题栏 副标题 颜色

    // Other
    borderRadiusBase: 2,
    borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    contentPadding: 10,
    dropdownLinkColor: '#414142',
    inputLineHeight: 24,
    deviceWidth,
    deviceHeight,
    isIphoneX,
    inputGroupRoundedBorderRadius: 30,

    // iPhoneX SafeArea
    Inset: {
        portrait: {
            topInset: 24,
            leftInset: 0,
            rightInset: 0,
            bottomInset: 34,
        },
        landscape: {
            topInset: 0,
            leftInset: 44,
            rightInset: 44,
            bottomInset: 21,
        },
    },
};
