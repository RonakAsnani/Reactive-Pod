import React from 'react';
//import firebase from 'firebase';

class AllSongs extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {

    //     }
    //     this.db = firebase.firestore();
    // }
    // componentDidMount(){
    //     this.db
    //     .collection('music')
    //     .onSnapshot((snapshot) => {
    //         snapshot.docs.map((doc) => {

    //         })
    //     })
    // }
    render(){

        return (
            <div className="all-songs">
                <h1 className="all-songs-heading">
                    All Songs
                </h1>
                <div className="all-songs list">
                    <div className="song-name">Thunder</div>
                    <div className="song-name">PlayDate</div>
                    <div className="song-name">Blue Bird</div>
                    <div className="song-name">Photograph</div>
                    <div className="song-name">My War</div>
                    <div className="song-name">Cigarettes after sex</div>
                </div>
            </div>
        )
    }
}
export default AllSongs;