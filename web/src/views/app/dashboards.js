import React from 'react';
import { Row, Card, CardBody, CardTitle, Table, Badge } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import IconCard from 'components/cards/IconCard';
import { LineChart } from 'components/charts';
import { lineChartData } from 'data/charts';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Dashboards = ({ match }) => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'c36bc2fd7ce762a4707aa43361293b98',
    lat: '5.367116',
    lon: '95.565581',
    lang: 'id',
    unit: 'metric',
  });

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.dashboards" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx className="mb-4">
          <h4 className="mb-3">Stok</h4>
          <div className="icon-cards-row d-flex flex-wrap">
            <IconCard icon="iconsminds-pepper" title="Cabai" value="80 KG" />
            <IconCard icon="iconsminds-plant" title="Pupuk" value="12 KG" />
            <IconCard icon="iconsminds-seed" title="Bibit" value="9 KG" />
          </div>
          <Card className="p-4">
            <CardTitle>Pembeli cabai terakhir</CardTitle>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama</th>
                  <th>Nomor HP</th>
                  <th>Waktu</th>
                  <th>Jumlah (KG)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Kiki Baihaki</td>
                  <td>081212121212</td>
                  <td>02-08-2022</td>
                  <td>4</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Fauzan Amanullah</td>
                  <td>085252525252</td>
                  <td>02-08-2022</td>
                  <td>10</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Akmal Dira</td>
                  <td>082323232323</td>
                  <td>02-08-2022</td>
                  <td>8</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Putra Noufal</td>
                  <td>082323232323</td>
                  <td>02-08-2022</td>
                  <td>5</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Nuzul</td>
                  <td>082323232323</td>
                  <td>02-08-2022</td>
                  <td>2</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Colxx>
        <Colxx className="mb-4">
          <h4 className="mb-3">Informasi sistem</h4>
          <div className="icon-cards-row d-flex flex-wrap">
            <IconCard
              icon="iconsminds-rain-drop"
              title="Tangki Air"
              value="80 %"
            />
          </div>
          <Row className="px-4 mb-2 d-flex align-items-center">
            <h6>Status listrik:</h6>
            <Badge color="success ml-2 mb-2">Hidup</Badge>
          </Row>
        </Colxx>
      </Row>
      <h4 className="mb-3">Informasi lahan</h4>
      <Row>
        <Colxx>
          <Card className="mb-4">
            <CardBody>
              <CardTitle>Cuaca</CardTitle>
              <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="id"
                locationLabel="Seuneubok, Seulimeum, Aceh Besar"
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
              />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx>
          <Card className="mb-4">
            <CardBody>
              <CardTitle>Lokasi</CardTitle>
              <iframe
                title="lahan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7944.661182043852!2d95.55884362633874!3d5.366443216261259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304067ffb6816a39%3A0xa2b647c1f1f42761!2sSeuneubok%2C%20Seulimeum%2C%20Aceh%20Besar%20Regency%2C%20Aceh!5e0!3m2!1sen!2sid!4v1659450638285!5m2!1sen!2sid"
                height="450"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-100"
              />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default Dashboards;
