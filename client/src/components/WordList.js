import React from 'react';
class WordList extends React.Component{
    render(){
        var lists;
        if(this.props.wordStatus){
            lists = Object.keys(this.props.wordStatus).map((word, index) => 
                <li key={index}>{word} {this.props.wordStatus[word]}</li>
            )
        }
        return (
            <div>
                <ul>
                    {lists}
                </ul>
            </div>
        );
    }
}
export default WordList;