import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

import { Link } from '../routes';

export default () => {

        return(
            <Menu style={{ marginTop: '10px' }}>
                <Link route='/'>
                    <Button primary size="big"> University of Massachusetts Boston </Button>
                </Link>
                <Menu.Header as='h3' content="Welcome to Incentivized Q & A Forum"/>

                <Menu.Menu position='right'>
                    <Link route='/'>
                        <Button primary> Questions </Button>
                    </Link>
                    {/*<Menu.Item>*/}
                        {/*<Link route='/questions/new'>*/}
                            {/*<Button primary icon="plus" size="big"></Button>*/}
                        {/*</Link>*/}
                    {/*</Menu.Item>*/}
                    <Link route='/questions/new'>
                        <Button primary icon="plus" size="big"></Button>
                    </Link>
                </Menu.Menu>
            </Menu>
        );
};