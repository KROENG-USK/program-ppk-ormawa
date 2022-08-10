import React from 'react';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import IconCard from 'components/cards/IconCard';

const Stok = ({ match }) => (
  <>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.stok" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row>
    <Row>
      <Colxx xxs="12" className="mb-4">
        <div className="icon-cards-row d-flex flex-wrap">
          <IconCard icon="iconsminds-pepper" title="Cabai" value="80 KG" />
          <IconCard icon="iconsminds-plant" title="Pupuk" value="12 KG" />
          <IconCard icon="iconsminds-seed" title="Bibit" value="9 KG" />
        </div>
      </Colxx>
      <Colxx xxs="12" lg="6">
        <h4 className="mb-4">Perbarui stok</h4>
        <Form>
          <FormGroup className="d-flex align-items-center">
            <Label>Cabai</Label>
            <Input type="number" className="mx-3" value={80} />
            <Button>Perbarui</Button>
          </FormGroup>
          <FormGroup className="d-flex align-items-center">
            <Label>Pupuk</Label>
            <Input type="number" className="mx-3" value={12} />
            <Button>Perbarui</Button>
          </FormGroup>
          <FormGroup className="d-flex align-items-center">
            <Label>Bibit</Label>
            <Input type="number" className="mx-3" value={9} />
            <Button>Perbarui</Button>
          </FormGroup>
        </Form>
      </Colxx>
    </Row>
  </>
);
export default Stok;
