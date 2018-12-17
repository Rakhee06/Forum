import React, {Component, Fragment} from "react";
import {Button, Loader, Message} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import {Router} from "../routes";

export default class Content extends Component{
    constructor(props){
        super(props);
        this.addVote = this.addVote.bind(this);
        // this.getQuestionDetails = this.getQuestionDetails.bind(this);
        // this.getQuestionDetails().then((res, err) => {
        //     if (err) {
        //         console.log(err);
        //     }
        // });
        this.state={
            QuestionValue: 0,
            loader: false,
            successMessage:''
        }

    }

    componentDidMount() {
        this.getQuestionDetails().then((res, err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    getQuestionDetails = async() =>{
        const summary = await this.props.questionInstance.methods.getQuestionDetails().call();
        const value = summary[0];
        this.setState({
            QuestionValue: value
        })
    };

    addVote = async () =>{

        this.setState({ loader: true });
        try {
            const accounts = await web3.eth.getAccounts();
            await this.props.questionInstance.methods.vote(this.props.in).send({
                from: accounts[0]
            });
        }
        catch (error) {
            console.log(error);
        }
        this.setState({ loader: false });
    };

    finalizeAnswer = async () =>{

        this.setState({ loader: true });
        try{
            const accounts = await web3.eth.getAccounts();
            await this.props.questionInstance.methods.finalizeAnswer(this.props.in).send({
                from: accounts[0],
                value: this.state.QuestionValue + 100000
            });
        }
        catch (error) {
            console.log(error);
        }
        this.setState({loader: false , successMessage: 'Chosen Answer!'});
    };

    render(){

        return(
            <div>
                <Loader active={this.state.loader} size='large'>
                    Wait while we fetch that transaction.
                </Loader>
                <Message
                    error
                    header='Oops!'
                    content={this.state.successMessage}
                />
                <Fragment>{this.props.item[1]}</Fragment>
                <Button onClick={this.addVote} floated='right' color='green'>Vote</Button>
                <Button onClick={this.finalizeAnswer} floated='right' color='orange'>Finalize</Button>
            </div>
        );
    }

};