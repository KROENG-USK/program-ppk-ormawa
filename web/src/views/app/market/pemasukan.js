import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import Select from 'react-select';
import CustomSelectInput from 'components/common/CustomSelectInput';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const selectData = [
  { label: 'Admin 1', value: 'admin1', key: 0 },
  { label: 'Admin 2', value: 'admin2', key: 1 },
  { label: 'Admin 3', value: 'admin3', key: 2 },
];

const Pemasukan = ({ match }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.pemasukan" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>Formulir pemasukan cabai</CardTitle>
              <Form>
                <FormGroup>
                  <Label>Penanggung jawab</Label>
                  <Select
                    components={{ Input: CustomSelectInput }}
                    className="react-select"
                    classNamePrefix="react-select"
                    name="form-field-name"
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={selectData}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Waktu</Label>
                  <DatePicker
                    selected={startDate}
                    onChange={setStartDate}
                    placeholderText={startDate}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Jumlah (KG)</Label>
                  <Input type="number" />
                </FormGroup>
                <Button onClick={(e) => e.preventDefault()}>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default Pemasukan;
