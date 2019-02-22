import React, { Component } from 'react';
import {
  Grid,
  Header,
  Segment,
  Button,
  Tab,
  Form,
  Table,
} from 'semantic-ui-react'

import PersonalDetailsStore from '../stores/PersonalDetailsStore';
import * as PersonalDetailsActions from '../actions/PersonalDetailsActions';

class HomepageIntro extends Component {

  state = {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    personalDetails: PersonalDetailsStore.getAll()
  }

  handleAddPersonalDetails = () => {
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      phone: this.state.phone
    }
    PersonalDetailsActions.addPerson(data);
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }

  componentDidMount() {
    PersonalDetailsStore.on("change", () => {
      this.setState({
        personalDetails: PersonalDetailsStore.getAll()
      });
    })
  }

  componentWillUnmount() {
    PersonalDetailsStore.removeListener("change", () => {
      this.setState({
        personalDetails: PersonalDetailsStore.getAll()
      });
    });
  }



  render() {

    const personRow = this.state.personalDetails.map((person) => {
      return <Table.Row key={person.firstName}>
        <Table.Cell>{person.firstName} {person.lastName}</Table.Cell>
        <Table.Cell>{person.address}</Table.Cell>
        <Table.Cell positive>{person.phone}</Table.Cell>
      </Table.Row>
    });

    const form = (
      <Form>
        <Form.Group unstackable widths={2}>
          <Form.Input name="firstName" label='First name' placeholder='First name' onChange={this.handleInputChange} />
          <Form.Input name="lastName" label='Last name' placeholder='Last name' onChange={this.handleInputChange} />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input name="address" label='Address' placeholder='Address' onChange={this.handleInputChange} />
          <Form.Input name="phone" label='Phone' placeholder='Phone' onChange={this.handleInputChange} />
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button type='submit' color="teal" onClick={this.handleAddPersonalDetails}>Next</Button>
      </Form>
    );

    const table = (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {personRow}
        </Table.Body>
      </Table>
    );

    const panes = [
      { menuItem: 'Personal Details', render: () => <Tab.Pane attached={false}>{form}</Tab.Pane> },
      { menuItem: 'Loan Details', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
      { menuItem: 'Confirmation', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
    ];

    return (
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Hello, how much would you like to borrow?
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Even though this is how we charge for every loan we provide, the APR is different depending
                on how long the loan is and whether you repay it weekly or monthly instalments.
              </p>
              <Tab menu={{ borderless: true, attached: false, tabular: false }} panes={panes} />
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              {table}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button size='huge'>Check Them Out</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default HomepageIntro;
