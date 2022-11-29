import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import IconCard from 'components/cards/IconCard';

const Stok = ({ match }) => {
  const [stok, setStok] = useState({
    cabai: 80,
    pupuk: 12,
    bibit: 9,
  });

  const updateStok = (e, index) => {
    e.preventDefault();
  };

  return (
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
            <IconCard
              icon="iconsminds-pepper"
              title="Cabai"
              value={`${stok.cabai} KG`}
            />
            <IconCard
              icon="iconsminds-plant"
              title="Pupuk"
              value={`${stok.pupuk} KG`}
            />
            <IconCard
              icon="iconsminds-seed"
              title="Bibit"
              value={`${stok.bibit} KG`}
            />
          </div>
        </Colxx>
        <Colxx xxs="12" lg="6">
          <h4 className="mb-4">Perbarui stok</h4>
          <Form>
            <FormGroup className="d-flex align-items-center">
              <Label>Cabai</Label>
              <Input
                type="number"
                className="mx-3"
                value={stok.cabai}
                onChange={(e) => setStok({ ...stok, cabai: e.target.value })}
              />
              <Button onClick={updateStok}>Perbarui</Button>
            </FormGroup>
            <FormGroup className="d-flex align-items-center">
              <Label>Pupuk</Label>
              <Input
                type="number"
                className="mx-3"
                value={stok.pupuk}
                onChange={(e) => setStok({ ...stok, pupuk: e.target.value })}
              />
              <Button onClick={updateStok}>Perbarui</Button>
            </FormGroup>
            <FormGroup className="d-flex align-items-center">
              <Label>Bibit</Label>
              <Input
                type="number"
                className="mx-3"
                value={stok.bibit}
                onChange={(e) => setStok({ ...stok, bibit: e.target.value })}
              />
              <Button onClick={updateStok}>Perbarui</Button>
            </FormGroup>
          </Form>
        </Colxx>
      </Row>
    </>
  );
};
export default Stok;
