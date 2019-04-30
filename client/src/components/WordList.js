import React from 'react';
import './WordList.css';

class WordList extends React.Component{
    render(){
        var rows;
        if(this.props.wordStatus){
            rows = Object.keys(this.props.wordStatus).map((word, index) => 
                // <li key={index}>{word} {this.props.wordStatus[word]}</li>
                <tr key={index}><td colSpan="2">{word}</td><td>{this.props.wordStatus[word]}</td></tr>
            )
        }
        return (
            <div>
                <table>
                    <tbody>
                        <tr><th colSpan="2">word</th><th>count</th></tr>
                        {rows}
                    </tbody>
                </table>
                {/* <ul>
                    {lists}
                </ul> */}
            </div>
        );
    }
}
export default WordList;