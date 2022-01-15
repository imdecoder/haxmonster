import React from 'react';
import styled from 'styled-components';
import MenuItem from "./MenuItem";

const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const Menu = () => {
    return (
        <Container>
            <MenuItem title="Dashboard" icon="apps" active />
            <MenuItem title="Fixtures" icon="table-clock" />
            <MenuItem title="Results" icon="soccer-field" />
            <MenuItem title="Tables" icon="file-table-box" />
            <MenuItem title="Teams" icon="strategy" />
            <MenuItem title="Players" icon="account-group" />
            <MenuItem title="Tickets" icon="ticket-confirmation" />
        </Container>
    );
};

export default Menu;
