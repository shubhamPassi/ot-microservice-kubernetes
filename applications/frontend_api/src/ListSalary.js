import react, * as React from "react";
import { Page, Grid, Table, Button } from "tabler-react";
import SiteWrapper from "./SiteWrapper.react";

const salaryUrl = process.env.REACT_APP_SALARY_API;
class ListSalary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  loadData() {
    fetch(salaryUrl.concat("/salary/search/all"))
      .then((response) => response.json())
      .then((data) => {
        if (data != null) {
          this.setState({ data: data });
        }
      })
      .catch((err) => console.error(this.props.url, err.toString()));
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <SiteWrapper>
        <Page.Card title="Salary List"></Page.Card>
        <Grid.Col md={6} lg={10} className="align-self-center">
          <Table>
            <Table.Header>
              <Table.ColHeader>Employee ID</Table.ColHeader>
              <Table.ColHeader>Name</Table.ColHeader>
              <Table.ColHeader>Salary</Table.ColHeader>
            </Table.Header>
            <Table.Body>
              {this.state.data.map((item, i) => {
                return (
                  <Table.Row>
                    <Table.Col>{item.id}</Table.Col>
                    <Table.Col>{item.name}</Table.Col>
                    <Table.Col>{item.salary}</Table.Col>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Grid.Col>
      </SiteWrapper>
    );
  }
}
//
export default ListSalary
//export default withTransaction('ListSalary', 'component')(ListSalary)
