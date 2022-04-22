import {NavigationActions, NavigationScreenProp, StackActions} from 'react-navigation';

let navigation: NavigationScreenProp<{}> | null = null;

function setNavigation(ref: NavigationScreenProp<{}>) {
    if (ref) {
        navigation = ref;
    }
}

function navigate(routeName, params) {
    // console.warn('navigate====',navigation.state, params)
    if (navigation) {
        navigation.dispatch(
            NavigationActions.navigate({
                routeName,
                params
            })
        );
    }
}

function navigateRest(routeName, params) {
    if (navigation) {
        navigation.dispatch(
            StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName, params})]
            })
        );
    }
}

function push(routeName, params) {
    if (navigation) {
        navigation.dispatch(
            StackActions.push({
                routeName,
                params
            })
        );
    }
}

function pop() {
    if (navigation) {
        navigation.dispatch(StackActions.pop({}));
    }
}
function popToTop() {
    if (navigation) {
        navigation.dispatch(StackActions.popToTop({}));
    }
}

export default {
    pop,
    popToTop,
    navigate,
    navigateRest,
    setNavigation,
    push
};
