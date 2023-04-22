import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dilogs/DialogsContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/reduxStore";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (

                <div role={'main'} className='app__wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app__wrapper-content'>
                        <Routes>
                            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                            <Route path='/dialogs/' element={<DialogsContainer/>}/>
                            <Route path='/login' element={<LoginPage/>}/>
                            <Route path='/users/' element={<UsersContainer/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/news' element={<News/>}/>

                        </Routes>
                    </div>
                </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

let AppContainer =  connect(mapStateToProps, {initializeApp})(App)

const SocialNetworkApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SocialNetworkApp