import React from 'react'
import Block from './Components/Block'
import Form from './Components/Form'
import Ques from './Components/Ques'
import {Route,Switch} from "react-router-dom"
// import Color from './Components/Color';
// import Text from './Components/Text';
const App = () => {
        return (
                <div>
                        <Switch>
                                <Route exact path="/" component={Block}/>
                                <Route exact path="/Form" component={Form}/>
                                <Route exact path="/Ques" component={Ques}/>
                        </Switch>  
                </div>
        )
}

export default App







