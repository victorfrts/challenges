import React, {Component} from 'react';
import api from '../api'

export default class Main extends Component {
    componentDidMount(){
        this.loadProduts();
    }
    
    loadProduts = async () => {
        const response = await api.get('?location=sunnyvale')

        console.log(response);
    }

    render() {
        return <h1>Teste</h1>;
    }
}
