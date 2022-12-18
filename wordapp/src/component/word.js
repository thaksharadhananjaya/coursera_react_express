import React, {Component} from 'react';

class Word extends Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            words:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:8090/api/word')
        .then(res => res.json())
        .then(
            (data)=>{
                this.setState({
                    isLoaded:true,
                    words:data
                });
            },
            (error) =>{
                this.setState({
                    isLoaded:true,
                    error:error
                })
            }
        )
    }


    render(){
        const {error, words, isLoaded} = this.state;
        if(error){
            return <div>Error: {error.message}</div>
        }
        else if(!isLoaded){
            return <div>Still Loading....</div>
        }
        return (
            <ul>
                {words.map((s)=>((<li>(s.word)::(s.def)</li>)))}
            </ul>
        );
    }


}

export default Word;