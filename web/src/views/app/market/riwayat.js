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
import RiwayatListItem from 'components/applications/RiwayatListItem';

const items = [
  {
    id: 0,
    jenis: 'Pengeluaran',
    pj: 'Admin 1',
    nama: 'Akmal',
    jumlah: '10 KG',
    waktu: '11-08-2022',
  },
  {
    id: 1,
    jenis: 'Pengeluaran',
    pj: 'Admin 1',
    nama: 'Kiki',
    jumlah: '10 KG',
    waktu: '11-08-2022',
  },
  {
    id: 2,
    jenis: 'Pemasukan',
    pj: 'Admin 1',
    nama: 'Admin 1',
    jumlah: '10 KG',
    waktu: '11-08-2022',
  },
  {
    id: 3,
    jenis: 'Pengeluaran',
    pj: 'Admin 1',
    nama: 'Fauzan',
    jumlah: '10 KG',
    waktu: '11-08-2022',
  },
];

const Riwayat = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.riwayat" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          {items.map((item) => (
            <RiwayatListItem key={item.id} item={item} />
          ))}
        </Colxx>
      </Row>
    </>
  );
};
export default Riwayat;
