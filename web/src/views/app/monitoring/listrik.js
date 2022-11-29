/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  Modal,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { ThemeColors } from 'helpers/ThemeColors';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { BarChart, LineChart } from 'components/charts';
import { lineChartData } from 'data/charts';
import { NotificationManager } from 'components/common/react-notifications';
import { getCurrentUser } from 'helpers/Utils';
import axios from 'axios';
import { api } from 'constants/defaultValues';

const Listrik = ({ match }) => {
  const colors = ThemeColors();
  const user = getCurrentUser();
  const [isLoading, setIsLoading] = useState(false);
  const [dataBaterai, setDataBaterai] = useState({
    labels: [''],
    datasets: [
      {
        label: 'Baterai',
        borderColor: colors.themeColor1,
        backgroundColor: colors.themeColor1_10,
        data: [0],
        borderWidth: 1,
      },
    ],
  });
  const [dataInverter, setDataInverter] = useState({
    labels: [''],
    datasets: [
      {
        label: 'Inverter',
        borderColor: colors.themeColor2,
        backgroundColor: colors.themeColor2_10,
        data: [0],
        borderWidth: 1,
      },
    ],
  });

  const getBaterai = async () => {
    await axios
      .get(`${api}/baterai`, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      })
      .then((response) => {
        if (!response.data.error) {
          setDataBaterai({
            labels: [''],
            datasets: [
              {
                label: 'Baterai',
                borderColor: colors.themeColor1,
                backgroundColor: colors.themeColor1_10,
                data: [response.data.data.tegangan],
                borderWidth: 1,
              },
            ],
          });
        }
      });
  };

  const getInverter = async () => {
    await axios
      .get(`${api}/inverter`, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      })
      .then((response) => {
        if (!response.data.error) {
          setDataInverter({
            labels: [''],
            datasets: [
              {
                label: 'Inverter',
                borderColor: colors.themeColor1,
                backgroundColor: colors.themeColor1_10,
                data: [response.data.data.tegangan],
                borderWidth: 1,
              },
            ],
          });
        }
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getBaterai();
    getInverter();
    setInterval(() => {
      getBaterai();
      getInverter();
    }, 5000);
    setIsLoading(false);
  }, []);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.listrik" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      {isLoading ? (
        <div className="loading" />
      ) : (
        <Row className="mb-2">
          <Colxx xxs="6" lg="3" md="4" className="mb-2 p-2">
            <Card className="p-4">
              <CardTitle>Baterai (%)</CardTitle>
              <div className="chart-container">
                <BarChart shadow data={dataBaterai} />
              </div>
            </Card>
          </Colxx>
          <Colxx xxs="6" lg="3" md="4" className="mb-2 p-2">
            <Card className="p-4">
              <CardTitle>Inverter (W)</CardTitle>
              <div className="chart-container">
                <BarChart shadow data={dataInverter} type={2} />
              </div>
            </Card>
          </Colxx>
        </Row>
      )}
    </>
  );
};
export default Listrik;
