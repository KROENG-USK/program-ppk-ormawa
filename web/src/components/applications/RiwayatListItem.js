import React from 'react';
import { Card, CardBody, Badge, CustomInput } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { Colxx } from '../common/CustomBootstrap';

const RiwayatListItem = ({ item }) => {
  return (
    <Colxx xxs="12">
      <Card className="card d-flex mb-3">
        <div className="d-flex flex-grow-1 min-width-zero">
          <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
            <NavLink
              to="#"
              location={{}}
              id={`toggler${item.id}`}
              className="list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1"
            >
              <span className="align-middle d-inline-block">{item.nama}</span>
            </NavLink>
            <p className="mb-1 text-muted text-small w-15 w-xs-100">
              {item.pj}
            </p>
            <p className="mb-1 text-muted text-small w-15 w-xs-100">
              {item.waktu}
            </p>
            <p className="mb-1 text-muted text-small w-15 w-xs-100">
              {item.jumlah}
            </p>
            <div className="w-15 w-xs-100">
              <Badge
                color={item.jenis === 'Pengeluaran' ? 'primary' : 'secondary'}
                pill
              >
                {item.jenis}
              </Badge>
            </div>
          </CardBody>
        </div>
      </Card>
    </Colxx>
  );
};

export default React.memo(RiwayatListItem);
