import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Welcome from '../screen/Welcome';
import DashboardNavigation from './DashboardNavigation';
import NavigationService from './NavigationService';


const TopLevelNavigator = createSwitchNavigator({
    dasboard: { screen: DashboardNavigation},
    welcome : { screen: Welcome},
})

const AppContainer = createAppContainer(TopLevelNavigator);

export default class AppSwicthContainer extends React.Component {
    render(){
        return(
            <AppContainer 
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}