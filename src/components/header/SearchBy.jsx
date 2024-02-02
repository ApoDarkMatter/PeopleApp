import React, { useState } from 'react'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

const SearchBy = () => {

    const [verticalActive, setVerticalActive] = useState('tab1');

    const handleVerticalClick = (value) => {
        if (value === verticalActive) {
        return;
        }

    setVerticalActive(value);
    };
    return (
        <>
            <MDBRow>
            <MDBCol size='3'>
                <MDBTabs className='flex-column text-center'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                    Home
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                    Profile
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                    Messages
                    </MDBTabsLink>
                </MDBTabsItem>
                </MDBTabs>
            </MDBCol>
            <MDBCol size='9'>
                <MDBTabsContent>
                <MDBTabsPane open={verticalActive === 'tab1'}>Home content</MDBTabsPane>
                <MDBTabsPane open={verticalActive === 'tab2'}>Profile content</MDBTabsPane>
                <MDBTabsPane open={verticalActive === 'tab3'}>Messages content</MDBTabsPane>
                </MDBTabsContent>
            </MDBCol>
            </MDBRow>
        </>
    )
}

export default SearchBy