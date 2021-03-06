import React from 'react';
import * as s from './App.styles';

//Components
import Sidebar from "./Components/Sidebar/Sidebar";
import MainView from "./Components/MainView/MainView";

function App() {

    const backgroundImage = 'images/exampleGift.png'
    const sidebarHeader = {
        fullName: 'YO YO Travel',
        shortName: 'YO'
    };
    const menuItems = [
        {name: 'Home', to: '/', icon: 'icons/home.svg', subMenuItems: []},
        {name: 'About', to: '/about', icon: 'icons/about.svg', subMenuItems: []},
        {name: 'Destinations', to: '/destinations', icon: 'icons/destinations.svg',
            subMenuItems: [
                { name: 'Canada', to: '/canada'},
                { name: 'Brazil', to: '/brazil'},
                { name: 'India', to: '/india'},
                { name: 'Australia', to: '/australia'},
                { name: 'Kenya', to: '/kenya'},
                { name: 'Moldova', to: '/moldova'},
            ]},
        {name: 'Blog', to: '/blog', icon: 'icons/blog.svg', subMenuItems: []},
        {name: 'Services', to: '/services', icon: 'icons/services.svg', subMenuItems: []},
        {name: 'Contacts', to: '/contacts', icon: 'icons/contacts.svg', subMenuItems: []},
    ];

    const fonts = {
        header: 'ZCOOL KuaiLe',
        menu: 'Poppins'
    }

    return (
        <s.App>
            <Sidebar
                backgroundImage={backgroundImage}
                sidebarHeader={sidebarHeader}
                menuItems ={menuItems}
                fonts = {fonts}
            />
            <MainView/>
        </s.App>
    )
}

export default App;