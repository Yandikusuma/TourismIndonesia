import {StackActions, NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator( navigatorRef){
    _navigator = navigatorRef;
}

function navigate(routeName, params){
    _navigator.dispacth(
        NavigationActions.navigate({
            routeName,
            params,
        })
    )
}

function reset(routeName){
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })],
    });
    _navigator.dispacth(resetAction)
}

export default {
    reset,
    navigate,
    setTopLevelNavigator,
};