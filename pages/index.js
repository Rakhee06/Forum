import React, { Component } from 'react';
import { Card, Button, Grid , Feed, Icon } from 'semantic-ui-react';

import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

export default class QuestionIndex extends Component {

    static async getInitialProps() {

        const questions = await factory.methods.getDeployedQuestions().call();
        const questionCount = await factory.methods.getForumCount().call();

        const forumDetails = await Promise.all(
            Array(parseInt(questionCount))
                .fill()
                .map((element, index) => {
                    return factory.methods.forum(index).call();
                })
        );

        return { questions, forumDetails };
    }

    renderQuestions() {


        const items = this.props.forumDetails.map(item => {
            return {
                header: item[1],
                description: (
                    <Link route={`/questions/${item[0]}`}>
                        <a>View Question</a>
                    </Link>
                ),
                style: { overflowWrap: 'break-word' }
            }
        });


        // const items = this.props.questions.map(address => {
        //     return {
        //         header: address,
        //         description: (
        //             <Link route={`/questions/${address}`}>
        //                 <a>View Question</a>
        //             </Link>
        //         ),
        //         style: { overflowWrap: 'break-word' }
        //     }
        // });

        return <Card.Group items={items} />;


    };


    render() {
        return(
            <Layout>
                    <h3>Questions</h3>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Link route='/questions/new'>
                                    <a>
                                        <Button
                                            content='Ask a Question'
                                            icon='add circle'
                                            primary
                                        />
                                    </a>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={9}>
                                {this.renderQuestions()}
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Label>
                                            <Icon name='pencil' />
                                        </Feed.Label>
                                        <Feed.Content>
                                            <Feed.Date>25 seconds ago</Feed.Date>
                                            <Feed.Summary>
                                                Transaction from 0x9250F6bC076805d1439b25134e23FCD2bdEbE435 to 0x1832A8d386b7789FaD147c578127b63f71591746
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>

                                    <Feed.Event>
                                        <Feed.Label>
                                            <Icon name='pencil' />
                                        </Feed.Label>
                                        <Feed.Content>
                                            <Feed.Date>5 minutes ago</Feed.Date>
                                            <Feed.Summary>
                                                Transaction from 0x9250F6bC076805d1439b25134e23FCD2bdEbE435 to 0x1832A8d386b7789FaD147c578127b63f71591746
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>

                                    {/*<Feed.Event>*/}
                                        {/*<Feed.Label>*/}
                                            {/*<img src='/images/iu.png' />*/}
                                        {/*</Feed.Label>*/}
                                        {/*<Feed.Content>*/}
                                            {/*You added Elliot Fu to the group <a>Coworkers</a>*/}
                                        {/*</Feed.Content>*/}
                                    {/*</Feed.Event>*/}

                                </Feed>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Layout>
        );
    }
}